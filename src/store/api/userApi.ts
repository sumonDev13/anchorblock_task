import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UsersResponse {
  data: User[];
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/" }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<UsersResponse, void>({
      query: () => "/api/users?page=2",
    }),
  }),
});

export const { useFetchUsersQuery } = userApi;
