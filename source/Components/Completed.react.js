import React from "react";
import CompletedTask from "./CompletedTask.react";

class Completed extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="completed">
        <div className="row">
          <div className="col-xs-12 header">
              Completed Tasks
          </div>
        </div>
        <br/>
        <hr/>
        {this.props.tasks.map(
          (task)=>{
            return <CompletedTask onDelete = {this.props.onDelete} onRestore={this.props.onRestore} key={task.created} task={task}/>;
          }
        )}
      </div>
    );
  }
}

export default Completed;
