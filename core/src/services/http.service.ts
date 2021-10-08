function createConfig(method: string, headers: { [x: string]: string } = { 'Content-Type': 'application/json' }, data?: any) {
    const base: any = { method };
    const lowercaseMethod = method.toLowerCase();
    if (lowercaseMethod === 'get') {
        return base;
    } else {
        base.headers = headers
        if (['put', 'post'].includes(method)) {
            if (!data) throw new Error("Can't post/put empty data!");
            base.body = JSON.stringify(data);
        }
    }
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
    get: async (url: string, responseType: string = 'json') => {
        return await fetch(url).then(r => createResponse(r, responseType));
    },
    post: async (url: string, data: any, responseType: string = 'json') => {
        return await fetch(url, createConfig('POST', data = data)).then(r => createResponse(r, responseType));
    },
    put: async (url: string, data: any, responseType: string = 'json') => {
        return await fetch(url, createConfig('PUT', data = data)).then(r => createResponse(r, responseType));
    },
    delete: async (url: string, responseType: string = 'json') => {
        return await fetch(url, createConfig('DELETE')).then(r => createResponse(r, responseType));
    }
};