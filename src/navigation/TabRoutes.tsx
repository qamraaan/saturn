import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { navigationStrings } from '@src/utils/constants';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@src/theme/theme';
import * as screens from '@src/screens/screens'
const Tab = createBottomTabNavigator();

const TabRoutes = ()=>{

    const theme = useTheme<Theme>();
    const {colors} = theme;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: 60,
          paddingBottom: 10,
        },
        headerShown: false,
        // tabBarActiveTintColor: colors?.primary?.[500],
        // tabBarInactiveTintColor: theme?.colors?.singletons?.blackAlpha,
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name={navigationStrings.EMPLOYEES}
        component={screens.Employees}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'people' : 'people-outline'}
              size={24}
              color={
                focused
                  ? colors?.linkColor
                  : colors?.linkColor
              }
            />
          ),
          headerShown:false,
          tabBarLabel: 'Employees',
          
        }}
      />
      <Tab.Screen
        name={navigationStrings.EMPLOYEES_LIST}
        component={screens.EmployeesList}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'people' : 'people-outline'}
              size={24}
              color={
                focused
                  ? colors?.linkColor
                  : colors?.linkColor
              }
            />
          ),
          headerShown:false,
          tabBarLabel: 'Employees List',
          
        }}
      />
    </Tab.Navigator>
  );
}
export default TabRoutes;