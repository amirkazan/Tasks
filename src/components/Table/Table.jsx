import React from 'react';
import {Edit} from '../Icon/Edit';
import {Trash} from '../Icon/Trash';
import styles from './Table.module.css';
import {Months} from './constants'


class Table extends React.Component {
	constructor(props){
		super(props);
		this.state={
			tasks:[]
		}
	}
	componentDidMount(){
		let promise = fetch('http://localhost:4000/tasks');
		promise.then(response => response.json()).then(data => this.setState({tasks:data}));
	}
	render() {
		return(
			<table className={styles.table}>
				<thead className={styles.header}>
					<tr>
						<td>Task name</td>
						<td>Assignee</td>
						<td>Starting date</td>
						<td>Due date</td>
						<td></td>
						<td></td>

					</tr>
				</thead>
				<tbody className={styles.line}>
					{this.state.tasks.map((task, i) =>{
						var d = new Date(task.due_date);
						var s = new Date(task.start_date)
						return(<tr key={i}>
							<td>{task.name}</td>
							<td>{task.assignee}</td>
							<td>{s.getDate()} {Months[s.getMonth()]}</td>
							<td>{d.getDate()} {Months[d.getMonth()]}</td>
							<td><Edit/></td>
							<td><Trash/></td>
						</tr>)
					})}
				</tbody>
			</table>
			)
	}
}

export {Table}