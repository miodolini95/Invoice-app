import React from 'react';
import "./linesStyles/lines.css";

class SeventhLine extends React.Component {
    render(){
      return (
            <div className="FirstLine Line row">
                <div className="FakturaType inputx col-lg-3">
                    <div className="FakturaTypeText">
                        <h3>Sposób płatności</h3>
                    </div>
                    <select className="form-control" value={this.props.paymantway} onChange={this.props.change} name="paymantway">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>       
                <div className="NumberOfFaktura inputx col-lg-3">
                    <h3>Termin płatności</h3>
                    <input type="date" value={this.props.paymantday} onChange={this.props.change} name="paymantday"></input>
                </div>    
                <div className="NameSurname inputx col-lg-6">
                    <h3>Numer konta</h3>
                    <input type="text" value={this.props.account} onChange={this.props.change} name="account"></input>
                </div>  
            </div>
      );
  }}
  export default SeventhLine;