import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
	render() {
		return this.props.todos.map((todo, index) => (
			<TodoItem
				key={index}
				todo={todo}
				markComplete={this.props.markComplete}
				deleteItem={this.props.deleteItem}
			/>
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired
};
export default Todos;
