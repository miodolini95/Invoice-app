
import React from 'react';
import "./linesStyles/lines.css";

class SixthLine extends React.Component {
    render(){
      return (
            <div className="FirstLine Line row">
                <div className="FakturaType inputx col-lg-3">
                    <div className="FakturaTypeText">
                        <h3>Status</h3>
                    </div>
                    <select className="form-control" value={this.props.state} onChange={this.props.change} name="state">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>       
                <div className="inputx col-lg-3">
                    <h3>Zapłacono</h3>
                    <input type="text" value={this.props.amountpayed} onChange={this.props.change} name="amountpayed"></input>
                </div>    
                <div className="inputx col-lg-3">
                    <h3>Data płatności</h3>
                    <input type="date" placeholder="dd-mm-yyyy" value={this.props.dateofpay} onChange={this.props.change} name="dateofpay"></input>
                </div>  
                <div className="inputx col-lg-3">
                    <h3>opis płatności</h3>
                    <input type="text" value={this.props.paycomment} onChange={this.props.change} name="paycomment"></input>
                </div>  
            </div>
      );
  }}
  export default SixthLine;