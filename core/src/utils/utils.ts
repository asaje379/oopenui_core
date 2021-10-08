export const config = {
    prefix: '__openui'
};

export function capitalize(str: string) {
    return [str[0].toUpperCase(), str.substr(1)].join('');
}

export function setPrefix(value: string) {
    config.prefix = ['__', value].join('');
}

export function prefix(value: string) {
    return [config.prefix, value].join('__');
}