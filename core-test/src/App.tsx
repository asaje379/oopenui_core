import { Button, Input, lib, Password, useSessionStorage } from 'oopenui_core';
import 'oopenui_core/src/assets/scss/_index.scss';
import useArray from './hooks/useArray';
import useObject from './hooks/useObject';
import useOnline from './hooks/useOnline';

lib.setPrefix('test_core');

function App() {
	const ls = useSessionStorage('ls');
	const online = useOnline();

	console.log(online);

	const my_arr = useArray();
	const my_obj = useObject({
		email: 'test@gmail.com',
		password: '1234'
	});

	return (
		<div className="p-5">
			<div>{ls.value}</div>
			<div>{my_arr.value.join('-')}</div>
			<div>{my_arr.copie().join('-')}</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					my_obj.reset();
				}}
			>
				<Input label="Email" value={my_obj.value.email} onChange={(v) => my_obj.setValue('email', v)} />
				<Password
					label="Password"
					value={my_obj.value.password}
					onChange={(v) => my_obj.setValue('password', v)}
				/>
				<Button>Set</Button>
			</form>

			<div>
				Email: {my_obj.value.email} <br />
				Password: {my_obj.value.password}
			</div>

			<Button
				expand
				color="primary"
				onClick={() => {
					ls.set('7');
					my_arr.push(0);
				}}
			>
				Hello nakama!
			</Button>
			<Button
				color="danger"
				onClick={() => {
					ls.clear();
				}}
			>
				Buy!
			</Button>
		</div>
	);
}

export default App;
