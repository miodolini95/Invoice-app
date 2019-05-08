import React from 'react';
import "./Menu.css"

class Menu extends React.Component {
    render(){
        return (
            <div className="Menu">
                <button onClick={this.props.showinvoice} className="Menubutton btn btn-success btn-block">{this.props.buttontext}</button>
            </div>
        );
    }
}
  export default Menu;