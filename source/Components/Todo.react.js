import React from "react";
import Header from "./Header.react";
import Manager from "./Manager.react";
import Creator from "./Creator.react";

class Todo extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (
      <section className="todo-container">
          <Header title = {this.props.title}/>
          <Manager onDone={this.props.onDone} onDeleteTask={this.props.onDeleteTask} tasks={this.props.tasks}/>
          <Creator onAddTask={this.props.onAddTask}/>
      </section>
    );
  }
}

export default Todo;
