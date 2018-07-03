import React, { Component } from 'react';

class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="g-menu">
                <ul className="menu-left">
                    { this.props.data.menuLeft.map( item =>  <li key={item.toString()}><span>{item}</span></li>)}
                </ul>
                <ul className="menu-right">
                    { this.props.data.menuRight.map( item =>  <li key={item.toString()}><span>{item}</span></li>)}
                </ul>
            </div>
        )
    }
}

export default Menu;