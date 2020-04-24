import React from 'react';

import {Edit} from '../Icon/Edit';
import {Trash} from '../Icon/Trash';
import {Tasks} from './constants';

class Table extends React.Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<td>Task name</td>
						<td>Assignee</td>
						<td>Starting date</td>
						<td>Due date</td>
						<td></td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{Tasks.map((task, i) => {
						return (
							<tr key={i}>
								<td>{task.name}</td>
								<td>{task.assignee}</td>
								<td>{task.start_date}</td>
								<td>{task.due_date}</td>
								<td><Edit /></td>
								<td><Trash /></td>
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}
}

export {Table}
