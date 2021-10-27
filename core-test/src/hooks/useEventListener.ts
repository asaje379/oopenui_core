import { useEffect } from "react";

export default function useEventListener(eventName: string, cb: any, ref: any = window, deps: any[] = []) {
    const dep = [...deps, cb, eventName, ref];
    useEffect(() => {
        ref.addEventListener(eventName, cb);
        return ref.removeEventListener(eventName, cb);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dep);
}