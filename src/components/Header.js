import styled from "styled-components";
import React from 'react'
import { useState } from "react";
const Header = (props) => {
  const [user1,setUser1] = useState(false)
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="./images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search"/>
          </div>
          <SearchIcon>
            <img src="./images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="./images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="./images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="./images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="./images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="./images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
        
            <User onClick={()=> setUser1(!user1) }>
              <a>
                <img src="./images/mypics.jpg" alt="" />
                <Me>
                  <span>Me</span>
                <img src="./images/down-icon.svg" alt="" />
                </Me>
                
              </a>
              

            </User>
            {user1 &&   <SignOut>
                <div className="sign-out">
                  <img src="./images/mypics.jpg" alt="" />
                  <div>
                    <h2>Peter Adedokun</h2>
                    <p>Frontend Developer</p> 
                  </div>
              </div>
              <div>
                 <a href="" className="profile">View Profile</a> 

              </div>
                <div className="account">
                  <h4>Account</h4>
                  <p>Try Prenuim for Free</p>
                <a href="">Setting</a>
                 <br/>
                <a href="">Help</a>
                <br/>
                  <a href="">Language</a>
                </div>
                <div>
                  <h4>Manage</h4>
                <a href="">Post & Activity</a>
                <br/>
                <a href="">Jobs Posting Account</a>
                <br />
                <div onClick={() => props.signOut()}>
                  <a>Sign Out</a>

                </div>
                </div>
              </SignOut>}
           
            <Work>
              <a>
                <img src="./images/nav-work.svg" alt="" />
                <span>Work
                  <img src="./images/down-icon.svg" alt="" />
                </span>
                  </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
}


export default Header

const Container = styled.div`
  background: white;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`
const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`
const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div{
    max-width: 280px;
    input{
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0,0,0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s;
`
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px){
      position: fixed;
      left: 0;
      bottom: 0;
      background: white;
      width: 100%;
  }
`
const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;
.active{
  span:after{
    content: "";
    transform: scaleX(1);
    border-bottom: 2px solid var(--white, #fff);
    bottom: 0;
    left: 0;
    position: absolute;
    transition: transform 0.2s ease-in-out;
    width: 100%;
    border-color: rgba(0,0,0,0.9);
  }
}

`
const NavList = styled.li`
display: flex;
align-items: center;
a{
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction:  column;
  font-size: 12px;
  font-weight: 400;
  justify-content: center;
  line-height: 2.0;
  min-height: 52px;
  min-width: 80px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  span{
    color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px){
    min-width: 70px;
  }
}
 &:hover,
  &:active{
    a{
      span{
        color: rgba(0,0,0,0.9);
      }
    }
  }
`
const User = styled(NavList)`
    a > svg{
      width: 24px;
      border-radius: 50%;
    }
    a > img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span{
       display: flex;
       align-items: center;
    }
`
const Work = styled(User)`
  border-left: 1px solid rgba(0,0,0,0.08);


`
const SignOut = styled.div`
  position: absolute;
  top: 69px;
  right: 330px;
  line-height: 30px;
  width: 230px;
  height: 399px;
  margin-top: 10px;
  margin:0;
  padding: 0;
  background-color: #FFF;
  box-shadow: 0 0.75rem 1rem rgb(189 197 209 / 30%);
  padding-left: 18px;  
  padding-right: 18px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

.sign-out{
  display: flex;
  margin-top: 10px;
  img{
    width: 55px;
    height: 55px;
    border-radius: 100%;
  margin-right: 17px;

  }   
}
  a{
  text-decoration: none;
  color: rgba(0,0,0,0.6);
  font-size: 15px;
  &:hover{
    text-decoration: underline;
  }
 }
  .profile{
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    border: 2px solid #0a66c2;
    color: #0a66c2;
    margin: 10px 0;
  }
  .account{
    /* display: none; */
    border-top: 1px solid rgba(0,0,0,0.6);
    border-bottom: 1px solid rgba(0,0,0,0.6);
  }
`

const Me = styled.div`
  display: flex;
`