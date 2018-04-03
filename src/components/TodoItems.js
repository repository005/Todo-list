import React from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends React.Component {
	constructor(props) {
		super(props);
		this.createTask = this.createTask.bind(this);
		this.state = {
			number: 1
		}
	}

	delete(key) {
		this.props.delete(key);
	}

	createTask(item) {
		return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTask);

		return (
			<ul className='item-list'>
			<FlipMove deration={250} easing={'ease-out'}>
				{listItems}
			</FlipMove>
			</ul>
		);
	}
}

export default TodoItems;