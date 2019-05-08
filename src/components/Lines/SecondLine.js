import React from 'react';
import "./linesStyles/lines.css";

class Secondline extends React.Component {
    render(){
      return (
        <div className="SecondLine Line row">
                <div className="Languages inputx col-lg-2">
                    <div className="FakturaTypeText">
                        <h3>Języki</h3>
                    </div>
                    <select className="form-control" value={this.props.languages} onChange={this.props.change} name="languages">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>   
                <div className="SecondLanguages inputx col-lg-2">
                    <div className="FakturaTypeText">
                        <h3>Drugi język</h3>
                    </div>
                    <select className="form-control" value={this.props.secondlanguages} onChange={this.props.change} name="secondlanguages">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>               
                <div className="NumberOfFaktura inputx col-lg-4">
                    <h3>Miejsce Wystawienia</h3>
                    <input 
                        type="text" 
                        value={this.props.placeofonvoice} 
                        onChange={this.props.change} 
                        name="placeofonvoice">
                    </input>
                </div>  
                <div className="NameSurname inputx col-lg-4">
                    <h3>Data Sprzedaży</h3>
                    <input 
                        type="date" 
                        placeholder="dd-mm-yyyy" 
                        value={this.props.dateofsell} 
                        onChange={this.props.change} 
                        name="dateofsell">
                    </input>
                </div>  
            </div>
      );
  }}
  export default Secondline;