import { useCallback, useState } from "react";

export default function useArray(array: any[] = []) {

    const [arr, setArray] = useState(array);
    const [initial] = useState(array);

    function push(value: any) {
        setArray(arr => [...arr, value]);
    }

    const copie = useCallback(() => JSON.parse(JSON.stringify(arr)), [arr]);

    const update = useCallback((index: number, values: any, count: number = 1) => {
        if (index < 0 || index > arr.length) {
            throw new Error("Array index out of range");
        }
        const updateArr = JSON.parse(JSON.stringify(arr));
        updateArr.splice(index, count, values);
        setArray(updateArr);
    }, [arr]);

    const remove = useCallback((index: number, count: number = 1) => {
        if (index < 0 || index > arr.length) {
            throw new Error("Array index out of range");
        }
        const updateArr = JSON.parse(JSON.stringify(arr));
        updateArr.splice(index, count);
        setArray(updateArr);
    }, [arr]);

    function clear() {
        setArray([]);
    }

    return { value: arr, push, copie, initial, update, delete: remove, length: arr.length, clear };

}

