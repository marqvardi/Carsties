export { auth as middleware } from "@/auth"

export const config = {
    matcher : ['/session', '/login', '/register', '/forgot-password', '/reset-password'], 
    pages : {
        signIn: '/api/auth.signin',
    }
}