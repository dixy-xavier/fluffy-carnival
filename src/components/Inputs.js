import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

function Inputs({ onChange }) {
	const [value, setValue] = useState('');
	const dValue = useDebounce(value);

	useEffect(() => {
		if (dValue) onChange(dValue);
	}, [dValue, onChange]);

	return (
		<div>
			<input onChange={(e) => { setValue(e.target.value) }} />
		</div>
	)
}

export default Inputs