import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomLayout from '@src/components/layout/CustomLayout';
import CustomText from '@src/components/typography/CustomText';
import {useEmployeesListQuery} from './api';
import {Employee} from '../types/types';
import Animated from 'react-native-reanimated';
import EmployeeCard from './components/EmployeeCard';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';
import uuid from 'react-native-uuid';
import Header from '@src/components/layout/Header';

const Employees = () => {
  const theme = useTheme<Theme>();
  const {colors, spacing} = theme;

  //setting fixed count as the dummy api doesn't provide count
  const dataLength = 100;
  const results = 5;
  const [page, setPage] = useState<number>(1);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  let onEndReachedCalledDuringMomentum = true;

  //api call to get the list of employees
  const {
    data,
    refetch,
    isSuccess,
    isError,
    error,
    isFetching,
    isLoading,
    endpointName,
  } = useEmployeesListQuery({results, page});

 //side-effect to display employees.
  useEffect(() => {
    if (isSuccess) {
      if (data?.results && !isFetching) {
          if (page === 1) {
            setEmployees(data?.results);
          } else {
            setEmployees(prevList => [
              ...prevList,
              ...(data?.results || [])
            ]);
          }
        }
    
    }
    if (isError) {
      console.log('error in discover tab', error);
    }
  }, [data, error, page, isFetching, isSuccess]);

    const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    refetch();
    setRefreshing(false);
  }, [refetch]);

    // Increasing the page number to load more data
  const handleLoadMore = () => {
    if (employees?.length < dataLength && !isFetching) {
      setPage(prevPage => prevPage + 1);
    }
  };
 
  //function to render employees
  const renderItem = ({item, index}: {item: Employee; index: number}) => (
    <Animated.View
      id={uuid.v4().toString()}>
      <View id={uuid.v4().toString()}>
        <EmployeeCard
          key={uuid.v4().toString()}
          employee={item}
        />
      </View>
    </Animated.View>
  );

  //function to render header
  const renderHeader = () => (
    <View
      style={{
        rowGap: spacing.xxs,
        marginVertical: spacing.xxs,
      }}>
      <Header title="Our Employees" />
    </View>
  );

  //function to render footer
  const renderFooter = () => {
    if (employees?.length === 0) {
      return null;
    } else if (isFetching) {
      return <ActivityIndicator color={colors.linkColor} />;
    } else if (employees?.length === 100) {
      //replace with count
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


  const keyExtractor = () => uuid.v4().toString();
  return (
    <CustomLayout
      style={{
        backgroundColor: colors.appBackgroundColor,
      }}>
      {
        (isFetching || isLoading) && page === 1 ?
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
       <ActivityIndicator color={colors.linkColor} size="large"/>
       </View>
       :
      
      <FlatList
        keyboardShouldPersistTaps="never"
        removeClippedSubviews={true}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        contentContainerStyle={{
          rowGap: spacing.s,
          marginHorizontal: spacing.xxs,
          paddingHorizontal: spacing.s,
          paddingBottom: spacing.s
        }}
        data={employees}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        // ListEmptyComponent={EmptyComponent}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false;
        }}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd < 0) return;
          if (!onEndReachedCalledDuringMomentum) {
            handleLoadMore();
          }
        }}
        bounces={false}
        decelerationRate={'normal'}
      />
}
    </CustomLayout>
  );
};

export default Employees;
