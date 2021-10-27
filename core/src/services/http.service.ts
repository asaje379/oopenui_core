import { tryBloc } from "../utils/utils";

function createConfig(method: string, data?: any, headers: { [x: string]: string } = { 'Content-Type': 'application/json' }) {
    const base: any = { method };
    const lowercaseMethod = method.toLowerCase();

    base.headers = headers
    if (['put', 'post'].includes(lowercaseMethod)) {
        if (!data) throw new Error("Can't post/put empty data!");
        base.body = JSON.stringify(data);
    }

    return base;
}

function createResponse(r: any, responseType: string) {
    switch (responseType) {
        case 'text':
            return r.text();
        case 'arrayBuffer':
            return r.arrayBuffer();
        case 'blob':
            return r.blob();
        case 'formData':
            return r.formData();
        default:
            return r.json();
    }
}

export const http = {
    get: (url: string, responseType: string = 'json') => {
        return tryBloc(async () => {
            return fetch(url).then(r => createResponse(r, responseType));
        })
    },
    post: (url: string, data: any, headers: any = { 'Content-Type': 'application/json' }, responseType: string = 'json') => {
        return tryBloc(async () => {
            return fetch(url, createConfig('POST', data, headers)).then(r => createResponse(r, responseType));
        })
    },
    put: (url: string, data: any, headers: any = { 'Content-Type': 'application/json' }, responseType: string = 'json') => {
        return tryBloc(async () => {
            return fetch(url, createConfig('PUT', data, headers)).then(r => createResponse(r, responseType));
        })
    },
    delete: (url: string, responseType: string = 'json') => {
        return tryBloc(async () => {
            return fetch(url, createConfig('DELETE')).then(r => createResponse(r, responseType));
        })
    }
};