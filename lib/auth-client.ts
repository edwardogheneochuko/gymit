import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react
 
export const { signIn, signUp, useSession } = createAuthClient({
    baseURL: "http://localhost:3000"

})
