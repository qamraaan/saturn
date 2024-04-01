import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import CustomLayout from '@src/components/layout/CustomLayout';
import CustomText from '@src/components/typography/CustomText';
import {Employee} from '../types/types';
import {useDebounce} from '@src/utils/useDebounce';
import Animated, {FadeInDown} from 'react-native-reanimated';
import EmployeeCard from './components/EmployeeCard';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';
import uuid from 'react-native-uuid';
import Header from '@src/components/layout/Header';
import {useAppSelector} from '@src/hooks/hooks';
import {EmptyComponent} from '@src/components/empty-components/EmptyComponent';
import CustomButton from '@src/components/micro-components/CustomButton';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {navigationStrings} from '@src/utils/constants';
import CustomSearch from '@src/components/micro-components/CustomSearch';

const EmployeesList = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme<Theme>();
  const {colors, spacing} = theme;
  const {employees, loading} = useAppSelector(
    store => store.persistedReducer.employeeList,
  );

  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [query, setQuery] = useState('');

  //function to render to employees
  const renderItem = ({item, index}: {item: Employee; index: number}) => (
    <Animated.View
      id={uuid.v4().toString()}
      entering={FadeInDown.delay(200 * index)}>
      <View id={uuid.v4().toString()}>
        <EmployeeCard
          key={uuid.v4().toString()}
          isEditable={true}
          employee={item}
        />
      </View>
    </Animated.View>
  );

  //function to render the header
  const renderHeader = () => (
    <View
      style={{
        rowGap: spacing.xxs,
        marginVertical: spacing.xxs,
        paddingHorizontal: spacing.s
      }}>
      <Header title="Employees" />
      <CustomSearch placeholder="Search employees" onChange={handleSearch} value={query} />
    </View>
  );

  //function to render the footer
  const renderFooter = () => {
    if (filteredEmployees?.length === 0) {
      return null;
    } else if (loading) {
      return <ActivityIndicator color={colors.linkColor} />;
    } else if (filteredEmployees?.length === 100) {
      return (
        <View
          style={{
            marginVertical: spacing.m,
          }}>
          <CustomText color={colors.textGray}>No more items</CustomText>
        </View>
      );
    } else {
      return null;
    }
  };
  
  // function to search a user by firstName, lastName and email
    const handleSearch = useCallback((searchText: string) => {
    setQuery(searchText ?? ''); 
    const filteredData = employees?.filter((employee) => {
      const normalizedSearchTerm = searchText?.toLowerCase();
      const normalizedName = `${employee?.name?.first} ${employee?.name?.last}`.toLowerCase();
      const normalizedEmail = employee.email?.toLowerCase();
      return (
        normalizedName?.includes(normalizedSearchTerm) ||
        normalizedEmail?.includes(normalizedSearchTerm)
      );
    });
    setFilteredEmployees(filteredData);
  }, [employees]);


  useDebounce(
    (eV: string) => {
      if (eV !== undefined) setQuery(eV);
    },
    300,
    [handleSearch],
  );

  const handlePress = () => {
    navigation.navigate(navigationStrings.REGISTER);
  };
  const keyExtractor = () => uuid.v4().toString();
  return (
    <CustomLayout
      style={{
        backgroundColor: colors.appBackgroundColor
      }}>
      {loading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator color={colors.linkColor} size="large" />
        </View>
      ) : (
        <>
        {renderHeader()}
          <FlatList
            keyboardShouldPersistTaps="never"
            removeClippedSubviews={true}
            scrollEventThrottle={16}
            keyExtractor={keyExtractor}
            contentContainerStyle={{
              rowGap: spacing.s,
              marginHorizontal: spacing.xxs,
              paddingHorizontal: spacing.s,
              paddingBottom: spacing.s,
            }}
            data={filteredEmployees}
            renderItem={renderItem}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={EmptyComponent}
          />
          <View
            style={{
              alignItems: 'center',
              marginBottom: spacing.s,
            }}>
            <CustomButton
              label="Add new employee"
              style={{height: 50}}
              onPress={handlePress}
            />
          </View>
        </>
      )}
    </CustomLayout>
  );
};

export default EmployeesList;
