import {baseApi} from '@src/store/baseQuery';
import {Employees} from '../../types/types';

const employeeDetails = baseApi.injectEndpoints({
  endpoints: build => ({
    employeesList: build.query<
      Employees,
      {
        page?: number;
        results?: number;
      }
    >({
      query: arg => {
        const {page, results} = arg;
        const params: Record<string, any> = {};
        if (page !== undefined) params.page = page;
        if (results !== undefined) params.results = results;

        return {
          url: '/api',
          params,
        };
      },
      keepUnusedDataFor: 0,
    }),
  }),
});
export const {useEmployeesListQuery} = employeeDetails;
