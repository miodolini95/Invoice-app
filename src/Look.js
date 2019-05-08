import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './look.css';

class Look extends Component {

  lol = () =>{
    html2canvas(document.querySelector(".look"))
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      var pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [1500, 1000]
      })
      
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");  
    });
  }


  render() {
    return (
      <div className="look">
        <div className="headerlook">
          <div className="leftheader">
            <h2 onClick={this.lol}>Faktura</h2>
          </div>
          <div className="rightheader">
            <h2>numer: {this.props.state.numberofinvoice}</h2>
          </div>
        </div>
        <div className="sectionOne row">
          <div className="sectionOneLabel col-lg-12">
            <div className="sectionOneData">
              <h6>Miejsce wystawienia: <span className="fontbold">{this.props.state.placeofonvoice}</span></h6>
              <h6>Data wystawienia: <span className="fontbold">{this.props.state.dateofmake}</span></h6>
              <h6>Data sprzedaży: <span className="fontbold">{this.props.state.dateofsell}</span></h6>
            </div>
          </div>
        </div>
        <div className="sectionTwo row">
          <div className="SellerData1 col-lg-6">
            <h3>Sprzedawca</h3>
            <h6>{this.props.state.name1}</h6>
            <h6>{this.props.state.street1}</h6>
            <h6>{this.props.state.code1} {this.props.state.city1}</h6>
            <h6>NIP: {this.props.state.nip1}</h6>
          </div>
          <div className="BuyerData1 col-lg-5">
            <h3>Nabywca</h3>
            <h6>{this.props.state.name2}</h6>
            <h6>{this.props.state.street2}</h6>
            <h6>{this.props.state.code2} {this.props.state.city1}</h6>
            <h6>NIP: {this.props.state.nip2}</h6>
          </div>
        </div>
        <div className="SectionThree labeltextlabel Line1 row">
            <div className="col-lg-4 labelbig1">
                <span>Nazwa towaru lub usługi</span>
            </div>
            <div className="col-lg-1 label1">
                <span>Jm.</span>
            </div>
            <div className="col-lg-1 label1">
                <span>Ilość</span>
            </div>
            <div className="col-lg-1 label1">
                <span>Cena netto</span>
            </div>
            <div className="col-lg-1 label1">
                <span>Wartość netto</span>
            </div>
            <div className="col-lg-1 label1">
                <span>Stawka Vat</span>
            </div>
            <div className="col-lg-1 label1">
                <span>Kwota Vat</span>
            </div>
            <div className="col-lg-1 label1">
                <span>Wartość brutto</span>
            </div>
        </div>
        <div className="SectionFour labeltextlabel Linedata1 row">
            <div className="col-lg-4 labelbigtext1">
                <span>{this.props.state.nameofsell}</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.typeofsell}</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.amount}.szt</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.pricenetto}zł</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.totalnetto}</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.percentagevat1}%</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.vat}</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.topay}</span>
            </div>
        </div>
        <div className="Sectionfive labeltextlabel Linedata1 row">
            <div className="col-lg-5">
            </div>
            <div className="col-lg-1 labeltext1 fontbold">
                <span>Razem</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.pricenetto}</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span className="fontbold">{this.props.state.totalnetto}</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.percentagevat1}%</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.vat}</span>
            </div>
            <div className="col-lg-1 labeltext1 labelsmall">
                <span className="fontbold">{this.props.state.topay}</span>
            </div>
        </div>
        <div className="Sectionsix labeltextlabel Linedata1 row">
            <div className="col-lg-5">
            </div>
            <div className="col-lg-1 labeltext1 fontbold labelsmall">
                <span>W tym</span>
            </div>
            <div className="col-lg-1 labeltext1">
                <span>{this.props.state.pricenetto}</span>
            </div>
            <div className="col-lg-1 labeltext1 labelsmall">
                <span className="fontbold">{this.props.state.totalnetto}</span>
            </div>
            <div className="col-lg-1 labeltext1 labelsmall">
                <span>{this.props.state.percentagevat1}%</span>
            </div>
            <div className="col-lg-1 labeltext1 labelsmall">
                <span>{this.props.state.vat}</span>
            </div>
            <div className="col-lg-1 labelsmall labeltext1">
                <span className="fontbold">{this.props.state.topay}</span>
            </div>
        </div>
        <div className="Sectionseven row">
          <div className="col-lg-6">
            <h4 className="fontbold">Do zapłaty: {this.props.state.topay}</h4>
            <h6> Słownie: </h6>
            <h6> Sposób płatności: {this.props.state.paymantway}</h6>
            <h6> Termin płatności: {this.props.state.paymantday}</h6>
            <h6> Numer Konta: {this.props.state.account}</h6>
          </div>
        </div>
        <div className="Sectioneight row">
          <div className="col-lg-6 fontbold">
            <h3 className="center">{this.props.state.sign1}</h3>
            <div className="dotted"></div>
            <h6 className="center">Osoba upoważniona do wystawienia</h6>
          </div>
          <div className="col-lg-6">
            <h3 className="center">{this.props.state.sign2}</h3>
            <div className="dotted"></div>
            <h6 className="center">Osoba upoważniona do wystawienia</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Look;
