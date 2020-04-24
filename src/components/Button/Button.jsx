import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

const Button = (props) => {
	return (
		<button className={cn(styles.button, props.type === 'grey' ? styles.button__grey : '')}>
			{props.children}
		</button>
	)
}

export {Button}