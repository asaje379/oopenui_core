import Button from './components/Buttons/Button';
import Card from './components/Containers/Card';
import Container from './components/Containers/Container';
import Flex from './components/Containers/Flex';
import Icon from './components/Fonts/Icon';
import Checkbox from './components/Forms/Checkbox';
import Input from './components/Forms/Input';
import Password from './components/Forms/Password';
import Search from './components/Forms/Search';
import Select from './components/Forms/Select';
import Textarea from './components/Forms/Textarea';
import Upload from './components/Forms/Upload';
import useArray from './hooks/useArray';
import useLocalStorage from './hooks/useLocalStorage';
import useObject from './hooks/useObject';
import usePersistance from './hooks/usePersistance';
import useSessionStorage from './hooks/useSessionStorage';
import { http } from './services/http.service';
import * as utils from './utils/utils';

export const lib = utils;
export {
	http,
	useLocalStorage,
	useSessionStorage,
	usePersistance,
	Button,
	Container,
	Card,
	Flex,
	Icon,
	Checkbox,
	Input,
	Password,
	Search,
	Select,
	Textarea,
	Upload,
	useArray,
	useObject
};
