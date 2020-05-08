import React, {Component} from 'react';
import styles from './Select.module.css';
const Select = (props) =>{
	const {values} = props;
	return (
		<select className={styles.select}>
			<option value="" defaultValue></option>
			{values.map(el => <option key={el.value} value={el.value}>{el.label}</option>)}
		</select>
	)
}
export {Select}