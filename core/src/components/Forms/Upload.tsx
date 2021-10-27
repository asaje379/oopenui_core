import React, { ReactElement, useRef, useState } from 'react';
import { file2base64 } from '../../utils/utils';
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';

interface Props {
	title?: string;
	onUpload?: Function;
	multiple?: boolean;
	className?: string;
	style?: Object;
}

export default function Upload({
	title = 'Choose a file',
	onUpload = (v: any) => v,
	multiple = false,
	className = '',
	style = {}
}: Props): ReactElement {
	const ref = useRef<HTMLInputElement>(null);
	const [ filenames, setFilenames ] = useState<Array<string>>([]);
	const [ fileSrcs, setFileSrcs ] = useState<Array<string>>([]);
	const handleClick = () => {
		if (ref && ref.current) {
			ref.current.click();
		}
	};
	const upload = (event: any) => {
		const files = [ ...event.target.files ];
		onUpload(multiple ? files : files[0]);
		setFilenames(files.map((it) => it.name));
		const p = [];
		for (const el of files) {
			p.push(file2base64(el));
		}
		Promise.all(p).then((values) => setFileSrcs(values));
	};

	return (
		<div className={className} style={style}>
			<Flex jc="center" ai="center" className="p-2 bg-gray" gap="20px">
				<div className="text-center">
					<Icon style={{ fontSize: '1.2rem' }} name="upload" onClick={handleClick} />
					<div className="mt-1 mb-1" onClick={handleClick}>
						{title}
					</div>
					<input type="file" style={{ display: 'none' }} multiple={multiple} ref={ref} onChange={upload} />
					<Flex>
						<div>
							{fileSrcs.map((src, index) => (
								<Flex key={index} gap="10px" className="mb-2">
									<img src={src} height="30" alt="" />
									<span>{filenames[index]}</span>
								</Flex>
							))}
						</div>
					</Flex>
				</div>
			</Flex>
		</div>
	);
}
