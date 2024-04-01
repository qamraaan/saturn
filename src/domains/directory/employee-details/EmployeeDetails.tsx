import React from 'react';
import CustomLayout from '@src/components/layout/CustomLayout';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import BackHeader from '@src/components/layout/BackHeader';
import {useAppSelector} from '@src/hooks/hooks';
import {ScrollView, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';
import CustomText from '@src/components/typography/CustomText';
import {AppFonts} from '@src/assets/AppFonts';
import DetailsCard from '../components/DetailsCard';
import {Gender} from '@src/enums/enums';
import dayjs from 'dayjs';
import PersonalDetails from '../components/PersonalDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import {navigationStrings} from '@src/utils/constants';

type EmployeeDetailsProps = {
  isEditable?: boolean;
};
const EmployeeDetails = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route =
    useRoute<RouteProp<Record<string, EmployeeDetailsProps>, string>>();

  const isEditable = route?.params?.isEditable ?? false;


  const theme = useTheme<Theme>();
  const {colors, spacing, fontSize, borderRadii} = theme;
  const {uuid, name, email, picture, dob, gender, nat, location, cell, phone} =
    useAppSelector(store => store.persistedReducer.employee);

  const handlePress = () => {
    navigation.navigate(navigationStrings.REGISTER, {employeeId: uuid});
  };
  const profileUrl =
    'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg';
    
  return (
    <CustomLayout
      style={{
        backgroundColor: colors.appBackgroundColor,
      }}>
      <ScrollView>
        <BackHeader navigation={navigation} />
        <View style={{width: '100%'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: spacing.xs,
              padding: spacing.xs,
              backgroundColor: colors.cardSecondaryBackground,
            }}>
            <Animated.Image
              sharedTransitionTag={name?.first}
              resizeMode="cover"
              style={{
                height: 120,
                width: 120,
                borderRadius: borderRadii.ultraHigh,
              }}
              source={{
                uri: picture?.large ? picture?.large : profileUrl,
              }}
              alt="Picture of a person"
            />
          </View>
          <View
            style={{
              marginHorizontal: spacing.xs,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CustomText
                color={colors.linkColor}
                fontFamily={AppFonts.SourceSansBold}
                fontSize={fontSize.m}>
                Personal Details
              </CustomText>
              {isEditable && (
                <Icon
                  name="create-outline"
                  color={colors.linkColor}
                  size={fontSize.m}
                  onPress={handlePress}
                />
              )}
            </View>
            <View
              style={{
                rowGap: spacing.xxxs,
              }}>
              <DetailsCard
                title="Name"
                value={
                  (name?.title ? name?.title + ' ' : '') +
                  (name?.first ? name?.first + ' ' : '') +
                  (name?.last ? name?.last : '')
                }
              />
              <DetailsCard title="Email" value={email ?? ''} />
              <DetailsCard
                title="Gender"
                value={
                  gender === Gender.MALE
                    ? 'Male'
                    : gender === Gender.FEMALE
                    ? 'Female'
                    : 'Unspecified'
                }
              />
              <DetailsCard title="Age" value={dob?.age ?? ''} />
              <DetailsCard
                title="DOB"
                value={dayjs(dob?.date).toDate().toDateString() ?? ''}
              />

              <DetailsCard
                title="Address"
                value={
                  (location?.street?.number
                    ? location?.street?.number + ', '
                    : '') +
                  (location?.street?.name ? location?.street?.name : '')
                }
              />
              <DetailsCard
                title="Location"
                value={
                  (location?.city ? location?.city + ', ' : '') +
                    (location?.state ? location?.state + ', ' : '') +
                    location?.country ?? ''
                }
              />

              <DetailsCard title="Postcode" value={location?.postcode ?? ''} />
              <DetailsCard
                title="Timezone"
                value={
                  location?.timezone?.description ??
                  '---' + ' ' + `(${location?.timezone?.offset ?? 'NA'})`
                }
              />
              <DetailsCard
                title="Nationaliy"
                value={(nat ? nat + ' ' : '') + `(${location?.country ?? ''})`}
              />
            </View>
          </View>
          <View
            style={{
              margin: spacing.xs,
            }}>
            <CustomText
              color={colors.linkColor}
              fontFamily={AppFonts.SourceSansBold}
              fontSize={fontSize.m}>
              Additional Details
            </CustomText>
            <View
              style={{
                rowGap: spacing.xxxs,
              }}>
              <PersonalDetails
                icon="phone-portrait-outline"
                detail={phone ?? ''}
              />
              <PersonalDetails
                icon="call-outline"
                detail={cell ? cell : '---'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomLayout>
  );
};

export default EmployeeDetails;
