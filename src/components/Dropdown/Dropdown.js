import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'
import { MenuItems } from '../MenuItem/MenuItem';



export class Dropdown extends Component {
 state = {
  click: false
 }

 handleClick = () => {
  this.setState({ click: !this.state.click })
 }


 render() {
  const { click } = this.state;

  return (
   <>
    <ul onClick={this.handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
     {MenuItems.map((item, index) => (
      <li key={index}>
       <Link className={item.name} to={item.path} onClick={() => this.setState({ click: false })}>
        <span className='item-title'>{item.title} </span>
       </Link>
      </li>
     ))}
    </ul>
   </>
  )
 }
}

export default Dropdown

