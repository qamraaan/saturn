import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import employeeInitialState from '../utils/initialState';
import {Employee} from '../types/types';

const employeeSlice = createSlice({
  name: 'employeeDetails',
  initialState: employeeInitialState,
  reducers: {
    setEmployeeDetails: (state, action: PayloadAction<Employee>) => {
      state = {...state, ...action.payload};
      return state;
    },
    resetEmployeeDetails: state => {
      state = employeeInitialState;
      return state;
    },
  },
});
export const {setEmployeeDetails, resetEmployeeDetails} = employeeSlice.actions;
export default employeeSlice.reducer;
