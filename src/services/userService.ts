import type { typeNotification } from "./customTypes";
import type { User } from "./models";

export async function createUser(user: User, error: typeNotification): Promise<User | null>{
    return{
        name: user.name,
        email: user.email
    }
}

// todo: Add refreshToken routine
export async function loginUser(email: string, password: string, error: typeNotification): Promise<User | null>{
    return{
        name: "fernado",
        email: email
    }
}