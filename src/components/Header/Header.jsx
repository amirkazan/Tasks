import React, {Component} from 'react';
import styles from './Header.module.css';
import {Button} from '../Button/Button'
class Header extends Component {
	constructor(props){
		super(props);

		this.state = {
			tasks: [],
			isAddTaskModalOpened: false
		}
	}
		
	render() {return(
		<div className={styles.container}>
			<h1 className={styles.title}>Tasks</h1>
			<Button>+ add</Button>
		</div>
		)
	}	
}

export {Header}