import React from 'react';
import "./Menu.css"

class Menu extends React.Component {
    render(){
        return (
            <div className="Menu">
                <button onClick={this.props.showapp} className="Menubutton btn btn-success btn-block">Formularz</button>
                <button onClick={this.props.showlist} className="Menubutton btn btn-success btn-block">Lista</button>
                <button onClick={this.props.showlook} className="Menubutton btn btn-success btn-block">Podgląd</button>
                <button onClick={this.props.pushtolist} className="Menubutton btn btn-success btn-block">Dodaj do listy</button>
            </div>
        );
    }
}
  export default Menu;