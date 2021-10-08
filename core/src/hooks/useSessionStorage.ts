import { prefix } from '../utils/utils';
import useStorage from './useStorage'

export default function useSessionStorage(key: string) {
    return useStorage('session', prefix(key));
}
