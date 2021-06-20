export interface TSignInCredentials {
    username: string,
    password: string,
    csrfToken?: string,
    callbackUrl?: string,
    json?: string
}

export interface TSignUpCredentials {
    username: string,
    password: string,
    hashedPass: string,
    displayName: string,
    email: string
}

export interface TUser {
    id: number,
    username: string,
    display_name: string,
    email: string,
    photo_url: string
}