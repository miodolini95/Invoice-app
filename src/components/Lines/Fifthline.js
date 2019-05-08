import React from 'react';
import "./linesStyles/lines.css"


class FifthLine extends React.Component {
    render(){
      return (
        <div className="FifthLine Line row">
            <div className="col-lg-4 inputx">
                <textarea className="textarea" value={this.props.nameofsell} onChange={this.props.change} name="nameofsell"></textarea>
            </div>
            <div className="col-lg-1 inputx">
                <select className="form-control" value={this.props.typeofsell} onChange={this.props.change} name="typeofsell">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select> 
            </div>
            <div className="col-lg-1 inputx">
                <input type="text" value={this.props.amount} onChange={this.props.change} name="amount" >{this.props.amount}</input>
            </div>
            <div className="col-lg-1 inputx">
                <input type="text" value={this.props.pricenetto} onChange={this.props.change} name="pricenetto">{this.props.pricenetto}</input>
                <h6 className="TotalText">Razem</h6>
                <h6 className="TotalText">Do zapłaty</h6>
            </div>
            <div className="col-lg-1 inputx">
                <input type="text" value={this.props.totalnetto} onChange={this.props.change} name="totalnetto" disabled></input>
                <input type="text" value={this.props.totalnetto} onChange={this.props.change} name="totalnetto" disabled></input>
                <input type="text" value={this.props.totalnetto} onChange={this.props.change} name="totalnetto" disabled></input>
                <input type="text" value={this.props.topay} onChange={this.props.change} name="topay" disabled></input>
            </div>
            <div className="col-lg-1 inputx">
                <select className="form-control" value={this.props.percentagevat1} onChange={this.props.change} name="percentagevat1">
                    <option value="0">0%</option>
                    <option value="3">3%</option>
                    <option value="5">5%</option>
                    <option value="6">6%</option>
                    <option value="7">7%</option>
                    <option value="8.5">8.5%</option>
                    <option value="9">9%</option>
                    <option value="10">10%</option>
                    <option value="11">11%</option>
                    <option value="13">13%</option>
                    <option value="15">15%</option>
                    <option value="18">18%</option>
                    <option value="20">20%</option>
                    <option value="21">21%</option>
                    <option value="23">23%</option>
                    <option value="27">27%</option>
                </select> 
                <div className="blank"></div>
                <input type="text" value={(this.props.percentagevat1) + "%"} onChange={this.props.change} name="percentagevat1"  disabled></input>
            </div>
            <div className="col-lg-1 inputx">
                <input type="text" value={this.props.vat} onChange={this.props.change} name="vat" disabled></input>
                <input type="text" value={this.props.vat} onChange={this.props.change} name="vat" disabled></input>
                <input type="text" value={this.props.vat} onChange={this.props.change} name="vat" disabled></input>
            </div>
            <div className="col-lg-1 inputx">
                <input type="text" value={this.props.topay} onChange={this.props.change} name="topay"></input>
                <input type="text" value={this.props.topay} onChange={this.props.change} name="topay" disabled></input>
                <input type="text" value={this.props.topay} onChange={this.props.change} name="topay" disabled></input>
            </div>
        </div>
      );
  }}
  export default FifthLine;