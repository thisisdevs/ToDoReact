import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="header row">
         <div className="col-xs-12 header-content">
           {this.props.title}
         </div>
      </div>
    );
  }
}

export default Header;
