import { useState } from "react";
import useEventListener from "./useEventListener";

export default function useOnline() {
    const [online, setOnline] = useState(navigator.onLine);

    useEventListener('online', () => setOnline(true), window, [navigator]);
    useEventListener('offline', () => setOnline(false), window, [navigator]);

    return online;
}