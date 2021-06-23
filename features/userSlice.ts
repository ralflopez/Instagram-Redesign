import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from '../lib/pg/types'
import axios, { AxiosResponse } from 'axios'

// export const userSlice = createApi({
//     reducerPath: 'user',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `http://localhost:3000/api/users`,
//         prepareHeaders(headers) {
//             return headers
//         }
//     }),
//     endpoints(builder) {
//         return {
//             fetchUser: builder.query<string, string>({
//                 query(email) {
//                     return `/user?email=${email}`
//                 },
//             }),
//             signUp: builder.mutation<TUser, TSignUpCredentials>({
//                 query: (credentials) => ({
//                     url: '/signup',
//                     method: 'POST',
//                     body: credentials
//                 })
//             }) 
//         }
//     }
// })

// export const { useFetchUserQuery, useSignUpMutation } = userSlice

const initialUser: TUser = {
    display_name: '',
    email: '',
    id: -1,
    photo_url: '',
    username: '',
    followers: 0,
    following: 0
}

const initialState: { loading: boolean, error: any, data: TUser } = {
    loading: false,
    error: null,
    data: initialUser
}

export const getUser: any = createAsyncThunk('users/getUser', async (email) => {
    return axios.get(`${process.env.NEXTAUTH_URL}/api/users/user?email=${email}`).then((res: AxiosResponse) => res.data).catch((err) => console.log(err))
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(getUser.pending, (state) => {
            state.loading = true
        })
        .addCase(getUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
    }
})

export default userSlice.reducer