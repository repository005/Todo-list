import React from 'react';
import TodoItems from './TodoItems';
import FlipMove from 'react-flip-move';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
		e.preventDefault();

		if (this._inputElement.value !== '') {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			}

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
		}
		this._inputElement.value = '';
	}

	deleteItem(key) {
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});

		this.setState({
			items: filteredItems
		});
	}

	render() {
		return (
			<div className='todo-list'>
				<h1 className='todo-headline'>Список дел</h1>
				<div className='todo-header'>
					<form className="todo-form" onSubmit={this.addItem}>
						<input 
							ref={(a) => this._inputElement = a}
							placeholder='Введите задачу'
							autoFocus={true}
						/>
						<button type='submit'>Добавить</button>
					</form>
				</div>
				<TodoItems
					entries={this.state.items} 
					delete={this.deleteItem}
				/>
			</div>
		);
	}
}

export default TodoList;