import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/" }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/api/login",
          method: "post",
          body,
        };
      },
    }),
    signupUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/api/register",
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const { useSigninUserMutation,useSignupUserMutation} = authApi;
