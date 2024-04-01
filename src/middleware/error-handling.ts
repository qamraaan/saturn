import {isRejectedWithValue} from '@reduxjs/toolkit';
import type {MiddlewareAPI, Middleware} from '@reduxjs/toolkit';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      //   const {status} = action.payload;
      //   if (status === 401) {
      if (true) {
        // api.dispatch(logout());
        console.log();
      }
    }
    return next(action);
  };
