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
  @media (max-width: 450px) {
    .apps img {
        height: 25px;
        margin-left: 1rem;
    }
  }
  @media (max-width: 400px) {
    .apps img {
        height: 20px;
        margin-left: 1rem;
    }
  }
  @media (max-width: 350px) {
    .apps img {
        height: 17px;
        margin-left: 1rem;
    }
  }
  @media (max-height: 700px) {
    .logo span{
        font-size: 1.7rem;
    }
    .logo img{
      width: 35px;
      height: 35px;
      margin-right: 0.6rem;
    } 
  }
  @media (max-height: 600px) {
    .logo span{
        font-size: 1.5rem;
    } 
  }
  @media (max-height: 420px) {
    .logo span{
        font-size: 1rem;
    } 
    .logo img{
      width: 25px;
      height: 25px;
    }
    .apps img {
        height: 15px;
        margin-left: 1rem;
    }
  }
  @media (max-height: 350px) {
    .logo span{
        font-size: .8rem;
    } 
    .logo img{
      width: 20px;
      height: 20px;
    }
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
