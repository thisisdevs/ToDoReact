import React from "react";
import Datetime from "react-datetime"

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "taskName":"",
      "dueDate":"Choose due date and time",
      "dateFormat":""
    }
  }
  render(){
    return (
       <div className="creator row">
        <div className="creator-content col-xs-12">
        <form onSubmit={this.add.bind(this)}>
            <div className="row">
              <div className="col-xs-12">
                <input value={this.state.taskName} onChange={this.updateName.bind(this)} placeholder="Enter task name" className="form-control input-sm" type="text" required/>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-xs-6">
                <input required type="text" onChange={this.updateTime.bind(this)} className="form-control input-sm" placeholder="yyyy-mm-dd hh:mm" pattern='/([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])/' />
              </div>
              <div className="col-xs-6">
                <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-plus"></span>&nbsp;Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  updateName(e){
    this.setState({
      "taskName":e.target.value,
    });

  }
  updateTime(e){
    this.setState({
      "dueDate":new Date(e.target.value),
      "dateFormat":e.target.vaue
    });
    console.log(e.target.value);
  }
  add(e){
    e.preventDefault();
    

      this.props.onAddTask({
        name:this.state.taskName,
        created:new Date(),
        due:this.state.dueDate
      })


  }

}

export default Creator;
