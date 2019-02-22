import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
  {
    task: "laundry",
    id: 1234,
    completed: false
  },
  {
    task: "dishes",
    id: 1256,
    completed: false
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      newTodoText: ""
    };
  }
  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          handleChanges={this.handleChanges}
          newTodoText={this.state.newTodoText}
        />

      </div>
    );
  }
}

export default App;
