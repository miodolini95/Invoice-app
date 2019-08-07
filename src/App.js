import React, { Component } from 'react';
import MainPage from "./components/mainpage";
import Look from './Look';
import Menu from './Menu';
import List from './List/invoicelist';
import './App.css';

class App extends Component {
  state = {
    value: '',
    startobj: {},
    object: {},
    name: '',
    firstLine: {typeofdocument: '', numberofinvoice: '', dateofmake: ''},
    secondline: {languages: '', secondlanguages:'', placeofonvoice:'',dateofsell:''},
    thirdline: {name1:'', nip1:'',street1:'',city1:'',code1:'',sign1:'',
                name2:'', nip2:'',street2:'',city2:'',code2:'',sign2:''},
    fifthline: {nameofsell:'', typeofsell:'', amount:0, pricenetto:0, totalnetto:0,topay:0,percentagevat1:0,percentagevattext1:0,vat:0},
    sixthline: {state: '', amountpayed:'',dateofpay:'',paycomment:'' },
    seventhline: {paymantway:'', paymantday:'',account:''},
    eightline: {feedback:'', name:''},
    id : 0,
    look : React.createRef(),
    invoicelist : new Array(),
    classnonelist: "none",
    classnonelook: "none",
    classnoneapp: "block",
    buttontext: "Zobacz Fakture",
  }

  pushtolist = () =>{
    let invoicelist = this.state.invoicelist
    let object = this.state.object
    let id = this.state.id
    this.setState({
        id: id + 1,
        object: this.state,
    },()=>{invoicelist.push(this.state.object)});
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

  showlist = () =>{
    this.setState({
      classnonelist: "block",
      classnonelook: "none",
      classnoneapp: "none"
    })
  }

  showapp = () =>{
    this.setState({
      classnonelist: "none",
      classnonelook: "none",
      classnoneapp: "block"
    })
  }

  showlook = () =>{
    this.setState({
      classnonelist: "none",
      classnonelook: "block",
      classnoneapp: "none"
    })
  }

  generate = () => {
    this.state.look.current.generateinlook();
  };
  
  render() {
    return (
      <div>
        <div className={this.state.classnonelist}>
          <List 
            object={this.state.object}
            list ={this.state.invoicelist}
          />
        </div>
        <div className={this.state.classnoneapp}>
          <MainPage
              state = {this.state}
              vat = {this.state.vat}
              percentagevat1 = {this.state.percentagevat1}
              topay = {this.state.topay}
              totalnetto={this.state.totalnetto}
              value={this.state.value}
              change={this.handleChange}
              generate={this.generate}/>
        </div>
          <div className={this.state.classnonelook}>
            <Look 
                ref={this.state.look}
                state={this.state}
            />
          </div>
          <Menu 
              showlook = {this.showlook}
              showapp = {this.showapp}
              showlist = {this.showlist}
              pushtolist = {this.pushtolist}
              buttontext={this.state.buttontext}
          />
      </div>
    );
  }
}

export default App;
