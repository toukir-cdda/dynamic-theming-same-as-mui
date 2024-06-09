import { apiSlice } from '@/redux/features/api/apiSlice';

export const permissionApi : any = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPermissions: builder.query({
      query: () => ({
        url: `/permissions`,
        method: 'GET'
      })
    }),

    getPermissionsWithType: builder.query({
      query: ({ limit = 100000, type }) => ({
        url: `/permissions?type=${type}`
      })
    }),

    getPermission: builder.query({
      query: (uid) => ({
        url: `/permissions/${uid}`
      })
    }),

    createPermission: builder.mutation({
      query: (data) => ({
        url: '/permissions',
        method: 'POST',
        body: data
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // pessimistic cache update
        try {
          const { data: createdRole } = await queryFulfilled;

          console.log(createdRole, 'createdRole');
          // update get tasks cache, when new task is added
          dispatch(
            apiSlice.util.updateQueryData('getPermissions', undefined, (draft: any[]) => {
              draft.unshift(createdRole);
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    }),

    editPermission: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/permissions/${uid}`,
        method: 'PUT',
        body: data
      }),
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      // invalidatesTags: (result, error, { uid }) => ['Permissions'],

      async onQueryStarted({ uid, data }, { dispatch, queryFulfilled }) {
        try {
          // pessimistic cache update
          const { data: role } = await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData('getPermissions', undefined, (draft : any[]) => {
              return draft.map((item) => (item?.uid === uid ? role : item));
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    }),

    deletePermission: builder.mutation({
      query: (uid) => ({
        url: `/permissions/${uid}`,
        method: 'DELETE'
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // optimistic cache update
        if (arg) {
          const patchResult = dispatch(
            apiSlice.util.updateQueryData('getPermissions', undefined, (draft : any[]) => {
              console.log(draft, 'draft delete data');
              return draft.filter((role) => role.uid !== arg);
            })
          );
          try {
            await queryFulfilled;
          } catch (err) {
            patchResult.undo();
          }
        }
      }
    })
  })
});

export const {
  useGetPermissionsQuery,
  useGetPermissionsWithTypeQuery,
  useGetPermissionQuery,
  useCreatePermissionMutation,
  useEditPermissionMutation,
  useDeletePermissionMutation,
  useGetUserPermissionListQuery,
  useCreateUserPermissionMutation
} = permissionApi;
