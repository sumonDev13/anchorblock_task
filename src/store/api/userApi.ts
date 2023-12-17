import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/" }),
    endpoints: (builder) => ({
      fetchUsers: builder.query<{ data: any[] }, void>({
        query: () => "/api/users?page=2", 
      }),
    }),
  });
  
  export const { useFetchUsersQuery } = userApi;
  