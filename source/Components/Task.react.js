import React from "react";
import Chart from "./Chart.react";

class Task extends React.Component{
  constructor(props) {
    super(props);
    var created_at = this.props.tasktodo.created;
    var due_at = this.props.tasktodo.due;
    console.log(created_at);
    console.log(due_at);
    var delta = Math.abs(created_at - new Date()) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    this.time_elapsed = days.toString()+"d "+hours.toString()+"h "+minutes.toString()+"m";

    var delta = Math.abs(due_at - new Date()) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    this.time_left = days.toString()+"d "+hours.toString()+"h "+minutes.toString()+"m";



  }
  render(){
    return (
      <div className="task row">
          <div className="task-content col-xs-12">
              <div className="task-name">
              {this.props.tasktodo.name}
              </div>
              <div className="task-info row">
                  <div className="chart col-xs-4">
                      <Chart icon="timelapse.png" data={this.time_elapsed} />
                  </div>
                  <div className="chart col-xs-4">
                      <Chart icon="timer-icon.png" data={this.time_left}/>
                  </div>
                  <div className="completed col-xs-4">
                      <button type="button" onClick={this.dothis.bind(this)}className="btn btn-success btn-sm">Done</button>&nbsp;
                      <button type="button" onClick={this.deletethis.bind(this)} className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash"></span></button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  deletethis(e){
    e.preventDefault();
    this.props.onDeleteTask(this.props.tasktodo);
  }
  dothis(e){
    e.preventDefault();
    this.props.onDone(this.props.tasktodo);
  }
}

export default Task;
