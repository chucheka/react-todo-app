import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';

import './App.css';

class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					todos: data
				});
			});
	}
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};
	deleteItem = (id) => {
		fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: 'DELETE'
		}).then((res) =>
			this.setState({
				todos: this.state.todos.filter((todo) => todo.id !== id)
			})
		);
	};

	addTodo = (title) => {
		fetch('https://jsonplaceholder.typicode.com/todos', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				completed: false
			})
		})
			.then((res) => res.json())
			.then((newTodo) => {
				this.setState({ todos: [ ...this.state.todos, newTodo ] });
			})
			.catch((err) => {
				console.log('Could not post todo to jsonplaceholder');
			});
	};
	render() {
		return (
			<HashRouter>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										deleteItem={this.deleteItem}
									/>
								</React.Fragment>
							)}
						/>
						<Route path="/about" component={About} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
