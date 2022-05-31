import appConfig from '@app/appConfig';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiBase,
    prepareHeaders: async headers => {
      const user = null; //await AsyncStorageService.getStoredData();
      const hasUser = !!user && !!user!.userToken;

      if (hasUser) {
        headers.set('Authorization', `Token ${user.userToken}`);
      }

      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['Game'],
});
