import React from 'react';
import "./linesStyles/lines.css";

class Thirdline extends React.Component {
    render(){
      return (
        <div className="ThirdLine Line row">
                <div className="SellerData inputx col-lg-6 row">
                    <div className="SellerDataText">
                        <h3>Dane sprzedawcy</h3>
                    </div>
                    <input type="text" placeholder="Sprzedawca" value={this.props.name1} onChange={this.props.change} name="name1"></input>
                    <input type="text" placeholder="NIP" value={this.props.nip1} onChange={this.props.change} name="nip1"></input>
                    <input type="text" placeholder="Ulica" value={this.props.street1} onChange={this.props.change} name="street1"></input>
                    <input className="col-lg-8" type="text" placeholder="Miasto" value={this.props.city1} onChange={this.props.change} name="city1"></input>
                    <input className="col-lg-3" type="text" placeholder="Kod" value={this.props.code1} onChange={this.props.change} name="code1"></input>
                    <input type="text" placeholder="Podpis" value={this.props.sign1} onChange={this.props.change} name="sign1"></input>
                </div>   
                <div className="TargetData inputx col-lg-6">
                    <div className="TargetDataText">
                        <h3>Dane odbiorcy</h3>
                    </div>
                    <input type="text" placeholder="Sprzedawca" value={this.props.name2} onChange={this.props.change} name="name2"></input>
                    <input type="text" placeholder="NIP" value={this.props.nip2} onChange={this.props.change} name="nip2"></input>
                    <input type="text" placeholder="Ulica" value={this.props.street2} onChange={this.props.change} name="street2"></input>
                    <input className="col-lg-8" type="text" placeholder="Miasto" value={this.props.city2} onChange={this.props.change} name="city2"></input>
                    <input className="col-lg-3" type="text" placeholder="Kod" value={this.props.code2} onChange={this.props.change} name="code2"></input>
                    <input type="text" placeholder="Podpis" value={this.props.sign2} onChange={this.props.change} name="sign2"></input>
                </div>               
            </div>
      );
  }}
  export default Thirdline;