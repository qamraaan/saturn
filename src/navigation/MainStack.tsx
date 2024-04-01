import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';
import { navigationStrings } from '@src/utils/constants';
import * as screens from '@src/screens/screens'

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  const options = {
    gestureEnabled: true,
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName={
          navigationStrings.TABROUTES
      }
      screenOptions={{
        ...options,
        animation: 'slide_from_right',
        animationDuration: 500,
      }}>
      <Stack.Screen
        name={navigationStrings.TABROUTES}
        component={TabRoutes}
      />
      <Stack.Screen
        name={navigationStrings.EMPLOYEE_DETAILS}
        component={screens.EmployeeDetails}
      />
      <Stack.Screen
        name={navigationStrings.REGISTER}
        component={screens.RegisterEmployee}
      />
      
    </Stack.Navigator>
  );
};

export default MainStack;
