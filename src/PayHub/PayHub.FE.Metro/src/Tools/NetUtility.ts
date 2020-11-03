"use strict";

// Ref: https://www.carlrippon.com/fetch-with-async-await-and-typescript/

interface HttpResponse<T> extends Response {
    parsedBody?: T;
}

async function http<T>(
    request: RequestInfo
): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
        request
    );
    response.parsedBody = await response.json();
    return response;
}

async function get<T>(
    path: string,
    args: RequestInit = { method: "get" }
): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
};

async function post<T>(
    path: string,
    body: any,
    args: RequestInit = { method: "post", body: JSON.stringify(body) }
): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
};

async function put<T>(
    path: string,
    body: any,
    args: RequestInit = { method: "put", body: JSON.stringify(body) }
): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
};