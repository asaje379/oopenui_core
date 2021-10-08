import localforage from 'localforage';
import { useEffect, useMemo, useState } from 'react'
import { prefix } from '../utils/utils';

export default function usePersistance(key: string) {

    const [value, setValue] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const prefixedKey = useMemo(() => prefix(key), []);

    useEffect(() => {
        localforage.getItem(prefixedKey).then(previousValue => {
            if (previousValue) {
                setValue(previousValue);
            } else {
                setValue(null);
            }
            setLoading(false);
        });
    }, []);

    function putValue(value: any) {
        localforage.setItem(prefixedKey, JSON.stringify(value)).then(() => {
            setValue(value);
        });
    }

    function deleteValue() {
        localforage.removeItem(prefixedKey).then(() => {
            setValue(null);
        });
    }

    return [loading, value, putValue, deleteValue]
}
