import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const AuthApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: body => {
        return {
          url: 'api/auth/login',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const {useLoginUserMutation} = AuthApi;
