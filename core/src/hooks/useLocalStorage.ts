import { prefix } from '../utils/utils';
import useStorage from './useStorage'

export default function useLocalStorage(key: string) {
    return useStorage('local', prefix(key));
}
