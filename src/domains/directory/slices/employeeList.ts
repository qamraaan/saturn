import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Employee} from '../types/types';

interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
}

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};
const employeeListSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state: EmployeeState, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state: EmployeeState, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(
        employee => employee.uuid === action.payload.uuid,
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state: EmployeeState, action: PayloadAction<string>) => {
      const employeeId = action.payload;
      state.employees = state.employees.filter(
        employee => employee.uuid !== employeeId,
      );
    },
    setSortField: (
      state: EmployeeState,
      action: PayloadAction<string | undefined>,
    ) => {
      state.sortField = action.payload;
    },
    setSortOrder: (
      state: EmployeeState,
      action: PayloadAction<'asc' | 'desc' | undefined>,
    ) => {
      state.sortOrder = action.payload;
    },
    resetEmployees: (state: EmployeeState) => {
      state.employees = [];
      state.loading = false;
      state.error = null;
      state.sortField = undefined;
      state.sortOrder = undefined;
    },
  },
});

export const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setSortField,
  setSortOrder,
  resetEmployees,
} = employeeListSlice.actions;
export default employeeListSlice.reducer;
