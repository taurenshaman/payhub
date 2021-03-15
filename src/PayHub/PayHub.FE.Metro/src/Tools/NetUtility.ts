"use strict";
import { HttpResponse } from '../Core/interfaces';
// Ref: https://www.carlrippon.com/fetch-with-async-await-and-typescript/

export default class NetUtility{
    static async http<T>(
        request: RequestInfo
    ): Promise<HttpResponse<T>> {
        const response: HttpResponse<T> = await fetch(
            request
        );
        response.parsedBody = await response.json();
        return response;
    }
    
    static async get<T>(
        path: string,
        args: RequestInit = { method: "get" }
    ): Promise<HttpResponse<T>> {
        return await NetUtility.http<T>(new Request(path, args));
    };
    
    static async post<T>(
        path: string,
        body: any,
        args: RequestInit = { method: "post", body: JSON.stringify(body) }
    ): Promise<HttpResponse<T>> {
        return await NetUtility.http<T>(new Request(path, args));
    };
    
    static async put<T>(
        path: string,
        body: any,
        args: RequestInit = { method: "put", body: JSON.stringify(body) }
    ): Promise<HttpResponse<T>> {
        return await NetUtility.http<T>(new Request(path, args));
    };
}

