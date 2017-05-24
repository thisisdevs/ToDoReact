import React from "react";
import Todo from "./Todo.react";
import Completed from "./Completed.react";

class  Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "tasksToDo":[],
      "completed":[]
    }
    this.props.backend.on("update",(taskstodo)=>{
      this.setState({
        "tasksToDo":taskstodo
      });
    })
    this.props.backend.on("change",(completed_tasks)=>{
      this.setState({
        "completed":completed_tasks
      });
    })
  }
  componentWillMount(){
    this.setState({
      "tasksToDo":this.props.backend.getAllToDo(),
      "completed":this.props.backend.getCompleted()
    });
  }
  render(){
    return (
      <main className='main-container container-fluid row'>
          <div className="col-xs-12 col-sm-6">
              <Todo onDone = {this.done.bind(this)}onAddTask={this.addTask.bind(this)} onDeleteTask={this.deleteTaskTodo.bind(this)} tasks = {this.state.tasksToDo} title = {this.props.title} />
          </div>
          <div className="col-xs-12 col-sm-6">
              <Completed onDelete={this.deleteCompleted.bind(this)} onRestore={this.restore.bind(this)} tasks = {this.state.completed} />
          </div>
      </main>
    );
  }
  deleteTaskTodo(task){
    this.props.backend.deleteTask(task);
  }
  addTask(task){
    this.props.backend.add(task);
  }
  done(task){
    this.props.backend.done(task);
  }
  restore(task){
    this.props.backend.restore(task);
  }
  deleteCompleted(task){
    this.props.backend.deleteFromCompleted(task);
  }
}

export default Application;
