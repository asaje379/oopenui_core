import { useCallback, useState } from "react";

export default function useObject(obj: any = {}) {
    const [object, setObject] = useState(obj);
    const [initial] = useState(obj);

    const copie = useCallback(() => JSON.parse(JSON.stringify(object)), [object]);

    const setValue = useCallback((key: string, value: any) => {
        setObject({ ...object, [key]: value });
    }, [object]);

    const deleteValue = useCallback((key: string) => {
        delete object[key];
        setObject(object);
    }, [object]);

    const reset = useCallback(() => setObject(initial), [initial]);
    const clear = useCallback(() => setObject({}), []);

    return { value: object, initial, setValue, copie, deleteValue, reset, clear }
}