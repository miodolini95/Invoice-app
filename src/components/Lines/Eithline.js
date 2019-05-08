import React from 'react';
import "./linesStyles/lines.css";

class EithLine extends React.Component {
    render(){
      return (
            <div className="EithLine Line row">
                <div className="NumberOfFaktura inputx col-lg-6">
                    <h3>Uwagi</h3>
                    <input type="text" value={this.props.feedback} onChange={this.props.change} name="feedback"></input>
                </div>    
                <div className="NameSurname inputx col-lg-3">
                    <h3>Uwagi dodatkowe</h3>
                    <input type="text" value={this.props.extrafeedback} onChange={this.props.change} name="extrafeedback"></input>
                </div>  
                <div className="NameSurname inputx col-lg-3">
                    <h3>Wygeneruj Fakture</h3>
                    <button className="btn btn-primary generatebutton" onClick={this.props.generate}>Generuj</button>
                </div>  
            </div>
      );
  }}
  export default EithLine;