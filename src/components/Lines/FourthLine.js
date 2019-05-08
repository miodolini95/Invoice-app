import React from 'react';
import "./linesStyles/lines.css";

const Fourthline = () => {
      return (
        <div className="FourthLine labeltextlabel Line row">
            <div className="col-lg-4 labelbig">
                <span>Nazwa towaru lub usługi</span>
            </div>
            <div className="col-lg-1 label">
                <span>Jm.</span>
            </div>
            <div className="col-lg-1 label">
                <span>Ilość</span>
            </div>
            <div className="col-lg-1 label">
                <span>Cena netto</span>
            </div>
            <div className="col-lg-1 label">
                <span>Wartość netto</span>
            </div>
            <div className="col-lg-1 label">
                <span>Stawka Vat</span>
            </div>
            <div className="col-lg-1 label">
                <span>Kwota Vat</span>
            </div>
            <div className="col-lg-1 label">
                <span>Wartość brutto</span>
            </div>
        </div>
      );
  }
  export default Fourthline;