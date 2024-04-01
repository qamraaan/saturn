import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomLayout from '@src/components/layout/CustomLayout';
import {Formik, FormikValues} from 'formik';
import {registerSchema} from '@src/utils/schema';
import CustomTextInput from '@src/components/micro-components/CustomTextInput';
import CustomButton from '@src/components/micro-components/CustomButton';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@src/theme/theme';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@src/hooks/hooks';
import {addEmployee, updateEmployee} from '../slices/employeeList';
import {showInfo, showSuccess} from '@src/utils/flash';
import {navigationStrings} from '@src/utils/constants';
import BackHeader from '@src/components/layout/BackHeader';
import uuid from 'react-native-uuid';
import {Employee} from '../types/types';
import { AppFonts } from '@src/assets/AppFonts';

type EmployeeDetailsProps = {
  employeeId?: string;
};
const RegisterEmployee = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route =
    useRoute<RouteProp<Record<string, EmployeeDetailsProps>, string>>();

  const theme = useTheme<Theme>();
  const {colors, spacing, fontSize} = theme;

  const isFocused = useIsFocused();
  const employeeId = route?.params?.employeeId ?? '';

  //getting the employee details from the store
  const {employees} = useAppSelector(
    store => store.persistedReducer.employeeList,
  );

  const dispatch = useAppDispatch();

  const [employeeDetails, setEmployeeDetails] = useState<Employee>();


  //this side-effect is used to get a particular employee details
  useEffect(() => {
    if (employeeId) {
      const employee = employees.find(employee => employee.uuid === employeeId);
      setEmployeeDetails(employee);
    }
  }, [employeeId, isFocused]);
  //function to add or edit employee details
  const handleSubmit = (values: FormikValues) => {
    if (values) {
      if (employeeId) {
        dispatch(
          updateEmployee({
            ...values,
            name: {
              first: values.firstName,
              last: values.lastName,
            },
            email: values.email,
            phone: values.phone,
            location: {
              country: values.location,
              street: {
                name: values.address,
              },
              postcode: values.postCode,
            },
            dob: {
              age: values.age,
            },
          }),
        );
        showInfo('Employee added successfully');
      } else {
        dispatch(
          addEmployee({
            uuid: uuid.v4().toString(),
            picture: {
              large: profileUrl,
            },
            name: {
              first: values.firstName,
              last: values.lastName,
            },
            email: values.email,
            phone: values.phone,
            location: {
              country: values.location,
              street: {
                name: values.address,
              },
              postcode: values.postCode,
            },
            dob: {
              age: values.age,
            },
          }),
        );
        showSuccess('Employee added successfully');
      }
    }
    navigation.navigate(navigationStrings.EMPLOYEES_LIST);
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

        {isFocused && (
          <View
            style={{
              marginHorizontal: spacing.ms,
            }}>
            <Formik
              initialValues={{
                uuid: employeeId ? employeeDetails?.uuid : '',
                avatar: employeeId ? employeeDetails?.picture?.large : '',
                firstName: employeeId ? employeeDetails?.name?.first : '',
                lastName: employeeId ? employeeDetails?.name?.last : '',
                email: employeeId ? employeeDetails?.email : '',
                location: employeeId ? employeeDetails?.location?.country : '',
                address: employeeId
                  ? employeeDetails?.location?.street?.name
                  : '',
                postCode: employeeId ? employeeDetails?.location?.postcode : '',
                phone: employeeId ? employeeDetails?.phone : '',
                age: employeeId ? employeeDetails?.dob?.age : '',
              }}
              enableReinitialize={true}
              onSubmit={handleSubmit}
              validationSchema={registerSchema}>
              {({handleSubmit}) => (
                <View>
                  <CustomTextInput
                    name="firstName"
                    placeholder="Juan"
                    label="First Name"
                    maxLength={25}
                  />
                  <CustomTextInput
                    name="lastName"
                    placeholder="Doe"
                    label="Last Name"
                    maxLength={20}
                  />
                  <CustomTextInput
                    name="email"
                    placeholder="Juan@yopmail.com"
                    label="Email"
                    keyboardType="email-address"
                    maxLength={35}
                  />
                  <CustomTextInput
                    name="location"
                    placeholder="Beirut, Lebanon"
                    label="Location"
                    maxLength={40}
                  />
                  <CustomTextInput
                    name="address"
                    placeholder="Lane1, Downtown"
                    label="Address"
                    maxLength={40}
                  />
                  <CustomTextInput
                    name="postCode"
                    placeholder="55534"
                    label="Postcode"
                    maxLength={40}
                  />
                  <CustomTextInput
                    name="phone"
                    placeholder="783339393"
                    label="Phone"
                    keyboardType="phone-pad"
                    maxLength={14}
                  />
                  <CustomTextInput
                    name="age"
                    placeholder="32"
                    label="Age"
                    keyboardType="phone-pad"
                    maxLength={2}
                  />
                  <CustomButton
                    onPress={handleSubmit}
                    label={employeeId ? 'Edit' : 'Add'}
                    style={{marginVertical: spacing.s}}
                  />
                </View>
              )}
            </Formik>
          </View>
        )}
      </ScrollView>
    </CustomLayout>
  );
};

export default RegisterEmployee;
