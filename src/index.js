import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './TodoList.css';
import TodoList from './components/TodoList'


ReactDOM.render(
	<TodoList />,
	document.getElementById('container')
);