import { User } from "../models/User";
const baseUri = 'https://dummyjson.com/users';

const jsonHeaders = new Headers();
jsonHeaders.append('Content-Type', 'application/json; charset=UTF-8')


export const getUsers = async (page?: number, signal?: AbortSignal): Promise<User[]> => {
    const response = await fetch(`${baseUri}`, {
        method: 'GET',
        headers: jsonHeaders,
        signal: signal
    });
    const data = await response.json() as { users : User[]} ;
    return data.users;
}