import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import psBadge from '../assets/Badge_PS.svg'
import asBadge from '../assets/Badge_AS.svg'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7%;
  padding: 0 .5rem;
  a {
      text-decoration: none;
      color: black;
  }
  .logo {
      display: flex;
      align-items: center;
      height: 100%;
  }
  .logo img{
      width: 40px;
      height: 40px;
      margin-right: 1rem;
  }
  .logo span{
    font-family: 'Sacramento', cursive;
    font-size: 2rem;
    align-self: flex-end;
  } 
  .apps {
      display: flex;      
  } 
  .apps img {
      height: 30px;
      margin-left: 1rem;
  }
`

export default () => {
    return (
        <Header>            
            <Link to="/" className="logo">
                <img src="/images/ICON_APP.png" alt="ahimsa logo" />  
                <span>Ahimsa</span>
            </Link>            
            <div className="apps">
                <img src={psBadge} alt="Google PlayStore" />
                <img src={asBadge} alt="Apple App Store" />
            </div>
        </Header>
    )
}
