import React, { Component } from 'react';
import MainPage from "./components/mainpage";
import Look from './Look';
import './App.css';

class App extends Component {
  state = {
    value: '',
    name: '',
    firstLine: {typeofdocument: '', numberofinvoice: '', dateofmake: ''},
    secondline: {languages: '', secondlanguages:'', placeofonvoice:'',dateofsell:''},
    thirdline: {name1:'', nip1:'',street1:'',city1:'',code1:'',sign1:'',
                name2:'', nip2:'',street2:'',city2:'',code2:'',sign2:''},
    fifthline: {nameofsell:'', typeofsell:'', amount:0, pricenetto:0, totalnetto:0,topay:0,percentagevat1:0,percentagevattext1:0,vat:0},
    sixthline: {state: '', amountpayed:'',dateofpay:'',paycomment:'' },
    seventhline: {paymantway:'', paymantday:'',account:''},
    eightline: {feedback:'', extrafeedback:''},
    classnonelook: "none",
    classnoneapp: "block",
    buttontext: "Zobacz Fakture"
  }
  componentDidMount = () =>{
    this.setState({
      percentagevat1: 0,
    })
  }
  amountchange = () =>{

    const amount = this.state.amount
    const pricenetto = parseFloat(this.state.pricenetto)
    const topay = this.topay

    let totalnetto = parseFloat(amount) * parseFloat(pricenetto) + "zł"


    totalnetto = parseFloat(totalnetto)
    
    this.setState({
      totalnetto:Math.round(totalnetto * 100) / 100 + "zł",
    },()=>{
      topay()
    })
  }
  
  topay = () => {
    let topay = parseFloat(this.state.totalnetto) * parseFloat(this.state.percentagevat1)/100 + parseFloat(this.state.totalnetto)
    let vatamount = parseFloat(this.state.totalnetto) * parseFloat(this.state.percentagevat1)/100
  
    this.setState({
      topay:  Math.round(topay * 100) / 100 + "zł",
      vat: Math.round(vatamount * 100) / 100 +"zł"
    })
    
  }
  handleChange = (e) => {
    const name = e.target.name
    let value  = e.target.value
    const amountchange = this.amountchange

    name === "pricenetto"?this.setState({[name]: Math.round(value * 100) / 100 },() =>{amountchange()}):this.setState({[name]: value},() =>{amountchange()})
  }
  changenone = () =>{
    this.state.classnonelook === "none"? this.setState({classnonelook: "block"}) : this.setState({classnonelook: "none"})
    this.state.classnoneapp === "block"? this.setState({classnoneapp: "none"}) : this.setState({classnoneapp: "block"})
    this.state.buttontext === "Zobacz Fakture"? this.setState({buttontext: "Powrot"}) : this.setState({buttontext: "Zobacz Fakture"})
  }
  
  render() {
    return (
      <div>
        <div className={this.state.classnoneapp}>
          <MainPage
              state = {this.state}
              vat = {this.state.vat}
              percentagevat1 = {this.state.percentagevat1}
              topay = {this.state.topay}
              totalnetto={this.state.totalnetto}
              value={this.state.value}
              change={this.handleChange}/>
        </div>
        <button onClick={this.changenone.bind(this)} className="positionfixed btn btn-succes">{this.state.buttontext}</button>
        <div className={this.state.classnonelook}>
          <Look 
              state={this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
