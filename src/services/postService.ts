import { IPost } from "../models/Post";
const baseUri = 'https://jsonplaceholder.typicode.com';

const jsonHeaders = new Headers();
jsonHeaders.append('Content-Type', 'application/json; charset=UTF-8')


export const getPosts = async (page: number, signal?: AbortSignal): Promise<IPost[]> => {
    const response = await fetch(`${baseUri}/posts?_page=${page}`, {
        method: 'GET',
        headers: jsonHeaders,
        signal: signal
    });
    const data = await response.json() as IPost[];
    return data;
}