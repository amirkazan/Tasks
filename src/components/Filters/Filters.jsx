import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './Filters.module.css';
import {Select} from '../Select/Select';

const selectValues = [
	{
		value: 1,
		label: "My first value"
	},
	{
		value: 2,
		label: "My second value"
	}
];

class Filters extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles["filter-item"]}>
					<div className={styles.label}>Assignee</div>
					<Select values={selectValues} />
				</div>
				<div className={styles["filter-item"]}>
					<div className={styles.label}>Starting Date</div>
					<DatePicker 
						selected={this.props.startDate}
      					onChange={date => this.props.onStartDateChange(date)} 
					/>
				</div>
				<div className={styles["filter-item"]}>
					<div className={styles.label}>Due Date</div>
					<DatePicker 
						selected={this.props.dueDate}
      					onChange={date => this.props.onDueDateChange(date)}
					/>
				</div>
			</div>
		)
	}
}

export {Filters}