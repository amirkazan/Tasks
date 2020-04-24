import React from 'react';
import styles from './Header.module.css';
import {Button} from '../Button/Button';

const Header = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Tasks</h1>
			<Button>+ add</Button>
		</div>
	)
}

export {Header}