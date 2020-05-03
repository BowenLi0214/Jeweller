import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/img/Cart.png'
import './TitleBar.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Titlebar: React.FC = (props: any, state: any) => {
    return (
        <div className='titlebar'>
            <Link to='/followed'>
                <ArrowBackIcon />
            </Link>
            <Link to='/'>
                <div className='title'>shop</div>
            </Link>
            <Link to='/favourite'>
                <img src={cart} className='cart'></img>
            </Link>
        </div>
    )
}

export default Titlebar