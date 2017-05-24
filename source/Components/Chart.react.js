import React from "react";

class Chart extends React.Component {
  constructor() {
    super();
    this.icon = '';
  }
  componentDidMount(){

  }
  render(){
    return <div className="chart-content">
        <div className="icon">
            <img src={"images/"+this.props.icon}/>
        </div>
        <div className="data">
          {this.props.data}
        </div>
    </div>;
  }
}
export default Chart;
