import React from 'react';
import "./mainpage.css"
import FirstLine from "./Lines/Firstline"
import SecondLine from "./Lines/SecondLine"
import ThirdLine from "./Lines/ThirdLine"
import FourthLine from "./Lines/FourthLine"
import FifthLine from './Lines/Fifthline';
import SixthLine from './Lines/Sixthline';
import SeventhLine from './Lines/Seventhline';
import EithLine from './Lines/Eithline';


class MainPage extends React.Component {
    render(){
        return (
            <div className="MainPage container-fluid">
                <FirstLine 
                    numberofinvoice={this.props.state.numberofinvoice}
                    value={this.props.value} 
                    change={this.props.change}/>
                <SecondLine 
                    value={this.props.value} 
                    change={this.props.change}
                />
                <ThirdLine 
                    value={this.props.value} 
                    change={this.props.change}
                />
                <FourthLine />
                <FifthLine 
                    vat = {this.props.vat}
                    percentagevat1 = {this.props.percentagevat1}
                    topay={this.props.topay}
                    totalnetto={this.props.totalnetto}
                    value={this.props.value} 
                    change={this.props.change}
                />
                <SixthLine 
                    value={this.props.value} 
                    change={this.props.change}
                />
                <SeventhLine
                    value={this.props.value} 
                    change={this.props.change}
                />
                <EithLine 
                    value={this.props.value} 
                    change={this.props.change}                
                />
            </div>
        );
    }
}
  export default MainPage;