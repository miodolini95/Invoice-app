
import React from 'react';
import "./linesStyles/lines.css";

class FirstLine extends React.Component {
    render(){
      return (
            <div className="FirstLine Line row">
                <div className="FakturaType inputx col-lg-4">
                    <div className="FakturaTypeText">
                        <h3>Typ dokumentu</h3>
                    </div>
                    <select className="form-control" name="typeofdocument" value={this.props.typeofdocument} onChange={this.props.change}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>         
                <div className="NumberOfFaktura inputx col-lg-4">
                    <h3>Numer faktury</h3>
                    <input 
                        type="text" 
                        value={this.props.numberofinvoice} 
                        onChange={this.props.change} 
                        name="numberofinvoice">
                    </input>
                </div>  
                <div className="NameSurname inputx col-lg-4">
                    <h3>Data Wystawienia</h3>
                    <input 
                        type="date" 
                        placeholder="dd-mm-yyyy" 
                        value={this.props.dateofmake} 
                        onChange={this.props.change} 
                        name="dateofmake">
                    </input>
                </div>  
            </div>
      );
  }}
  export default FirstLine;