import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {Image, TouchableHighlight, View} from 'react-native';
import {navigationStrings} from '@src/utils/constants';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';
import CustomText from '@src/components/typography/CustomText';
import {AppFonts} from '@src/assets/AppFonts';
import DetailsCard from '../../components/DetailsCard';
import PersonalDetails from '../../components/PersonalDetails';
import {Employee} from '../../types/types';
import {useAppDispatch} from '@src/hooks/hooks';
import {setEmployeeDetails} from '../../slices/employee';
import Icon from 'react-native-vector-icons/Ionicons';
import { deleteEmployee, resetEmployees } from '../../slices/employeeList';
import { showInfo } from '@src/utils/flash';

interface EmployeeCardProps {
  employee?: Employee;
  isEditable?: boolean;
}
const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  isEditable = false,
}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const theme = useTheme<Theme>();
  const {colors, spacing, fontSize, borderRadii} = theme;

  const handleClick = () => {
    if (employee) {
      dispatch(setEmployeeDetails(employee));
    }
    navigation.navigate(navigationStrings.EMPLOYEE_DETAILS, {
      isEditable: isEditable
    });
  };
  const handleDelete = () => {
    console.log('delte');
    if(employee?.uuid){
      dispatch(deleteEmployee(employee?.uuid))
      showInfo('Employee deleted successfully.')
    }
  };
  const profileUrl =
    'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg';
  return (
    <TouchableHighlight
      onPress={handleClick}
      underlayColor=""
      style={{
        flex: 1,
        height: 350,
        backgroundColor: colors.cardSecondaryBackground,
        borderRadius: borderRadii.m,
        padding: spacing.xs,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: colors.overlayBgColor,
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
      }}>
      <>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {isEditable && (
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: '100%',
                flexDirection: 'row',
              }}>
              <Icon
                name="trash-outline"
                size={fontSize.l}
                color={colors.textWarnColor}
                onPress={handleDelete}
              />
            </View>
          )}
          <Image
            source={{
              uri: employee?.picture?.large
                ? employee?.picture?.large
                : profileUrl,
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize={fontSize.m}
              fontFamily={AppFonts.SourceSansBold}
              color={colors.textBlack}>
              {employee?.name?.first + ' ' + employee?.name?.last ?? ''}
            </CustomText>
            <CustomText
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize={fontSize.xs}
              fontFamily={AppFonts.SourceSansRegular}
              color={colors.textGray}>
              {employee?.email}
            </CustomText>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: colors.successBg,
            width: '100%',
            borderRadius: borderRadii.m,
            borderColor: colors.borderColor,
            borderWidth: 1,
          }}>
          <View
            style={{
              borderRadius: spacing.xs,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: spacing.s,
            }}>
            <DetailsCard
              title="Address"
              value={
                (employee?.location?.street?.number
                  ? employee?.location?.street?.number + ', '
                  : '') + `${employee?.location?.street?.name}`
              }
            />
            <DetailsCard title="Age" value={employee?.dob?.age ?? ''} />
          </View>
          <View
            style={{
              borderRadius: spacing.xs,
              alignItems: 'flex-start',
              paddingHorizontal: spacing.s,
              justifyContent: 'flex-start',
              width: '100%',
              rowGap: spacing.xxxs,
            }}>
            <PersonalDetails
              icon="call-outline"
              detail={employee?.phone ?? ''}
            />
            <PersonalDetails
              icon="location-outline"
              detail={
                (employee?.location?.city
                  ? employee?.location?.city + ' '
                  : '') +
                (employee?.location?.state
                  ? employee?.location?.state + ' '
                  : '') +
                (employee?.location?.country
                  ? employee?.location?.country + ' '
                  : '')
              }
            />
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
};

export default EmployeeCard;
