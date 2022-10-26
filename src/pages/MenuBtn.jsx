import React from 'react';
import { Link } from 'react-router-dom';
import Menu from "../assets/images/MenuBtn.png"

const MenuBtn = () => {
  return (
    <>
        <Link to="/">
            <div className="overflow-hidden flex justify-end items-end mx-40">
                <img className='overflow-hidden h-12 w-12 my-4' src={Menu} alt="Menu Button" />
            </div>
        </Link>
    </>
  )
}

export default MenuBtn