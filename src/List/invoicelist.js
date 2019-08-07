import React from 'react';
import "./list.css"

class List extends React.Component {
    

    render(){
      const list = this.props.list;
      const listItems = list.map((object) =>
        <li className="item row" key={object.id}>
          <div className="listid col-lg-1">{object.id}</div>
          <div className="col-lg-3">{object.name}</div>
          <div className="col-lg-3">{object.topay}</div>
          <div className="col-lg-3">{object.dateofmake}</div>
        </li>)

        return(
            <div className="listcontainer">
                <ul className="list">{listItems}</ul>
            </div>
        );
    }
}
  export default List;