import React from "react";

class CompletedTask extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="completed-task row">
        <div className="col-xs-6">
          {this.props.task.name}
        </div>
        <div className="col-xs-3">
          <button className="btn btn-default" onClick={this.restore.bind(this)}><span className="glyphicon glyphicon-repeat"></span></button>

        </div>
        <div className="col-xs-3">
          <button className="btn btn-danger" onClick={this.delete.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>

        </div>
      </div>
    );
  }
  restore(e){
    e.preventDefault();
    this.props.onRestore(this.props.task);
  }
  delete(e){
    e.preventDefault();
    this.props.onDelete(this.props.task);
  }
}

export default CompletedTask;
