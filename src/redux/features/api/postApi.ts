// services/postsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagNames: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'post',
      providesTags: ['Post']
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: 'post',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: builder.mutation({
      query: (body) => ({
        url: `post?id=${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `post?id=${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Post']
    })
  })
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation
} = postsApi;
