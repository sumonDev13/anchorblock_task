import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
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
    
    userList: builder.query<{ data: any[] }, void>({
      query: () => "/api/users?page=2", // Modify the URL according to your API endpoint
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSigninUserMutation,useSignupUserMutation,useVerifyUserMutation} = authApi;
