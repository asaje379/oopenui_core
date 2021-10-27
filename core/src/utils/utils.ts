export const config = {
    prefix: '__openui'
};

export function capitalize(str: string): string {
    return [str[0].toUpperCase(), str.substr(1)].join('');
}

export const _COLORS_ = ['primary', 'light', 'dark', 'danger', 'success', 'white', 'gray'];
export type COLOR_TYPE = 'primary' | 'light' | 'dark' | 'danger' | 'success' | 'white' | 'gray';

export function setPrefix(value: string) {
    config.prefix = ['__', value].join('');
}

export function prefix(value: string) {
    return [config.prefix, value].join('__');
}

export const tryBloc = (cb: Function): Function | any => {
    try {
        return cb();
    } catch (error) {
        console.log(error);
        throw new Error();
    }
};

export function file2base64(file: File): Promise<string> {
    return new Promise((res) => {
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onloadend = () => res(fr.result as string);
    });
}