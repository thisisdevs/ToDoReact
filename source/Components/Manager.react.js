import React from "react";
import Task from "./Task.react";

class Manager extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (<div className='manager row'>
      <div className='col-xs-12 manager-content'>
          {this.props.tasks.map((task)=>{
            return <Task key={task.created} onDone={this.props.onDone} onDeleteTask={this.props.onDeleteTask} tasktodo = {task} />
          })}
      </div>
    </div>);
  }
}

export default Manager;
