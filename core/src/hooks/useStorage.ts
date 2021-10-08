import { useState } from 'react'

export default function useStorage(type: 'local' | 'session', key: string) {

    const storage = type === 'local' ? localStorage : sessionStorage;
    const previousValue = storage.getItem(key);

    const [value, setValue] = useState(previousValue ? JSON.stringify(previousValue) : null);

    function putValue(value: any) {
        storage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    function deleteValue() {
        storage.removeItem(key);
        setValue(null);
    }

    return [value, putValue, deleteValue]
}
