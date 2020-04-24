import React from 'react';
import s from './Select.module.css';

const Select = (props) => {
	const {values} = props;
	return(
		<select className={s.select}>
			<option value="" defaultValue>No items selected</option>
			{values.map(el => <option key={el.value} value={el.value}>{el.label}</option>)}
		</select>
	)
}

export { Select }