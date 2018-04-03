import React from 'react';
import TodoItems from './TodoItems';
import ClearButton from './ClearButton';
import FlipMove from 'react-flip-move';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.clearAll = this.clearAll.bind(this);
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
		this._inputElement.focus();
	}

	deleteItem(key) {
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});

		this.setState({
			items: filteredItems
		});
	}

	clearAll() {
		this.setState({
			items: []
		});
	}

	render() {
		var deployed = this.state.items.length > 0;

		return (
			<div className='todo-list'>
				<h1 className='todo-headline'>Список дел</h1>
				<div className='todo-header'>
					<form className='todo-form' onSubmit={this.addItem}>
						<input 
							ref={(a) => this._inputElement = a}
							placeholder='Введите задачу'
							autoFocus={true}
						/>
						<button className='submit' type='submit'>Добавить</button>
					</form>
				</div>
				{deployed && <ClearButton onClick={this.clearAll}/>}
				<TodoItems
					entries={this.state.items} 
					delete={this.deleteItem}
				/>
			</div>
		);
	}
}

export default TodoList;