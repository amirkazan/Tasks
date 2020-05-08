impotr react, {Component} from 'react';

class AddTaskModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}
	handleTextChange = e => {this.setState({text: e.target.value})}

	handleSubmit = async () =>{
		const { appendTask, toggleAddTaskModalOpened} = this.props;

		appendTask(this.state);
		toggleAddTaskModalOpened();
		


		}