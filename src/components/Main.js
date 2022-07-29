import React from 'react'
import styled from 'styled-components';
import PostModal from "./PostModal"
import { useState } from 'react';
const Main = () => {
  const [showModal, SetShowModal] = useState("close");
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        SetShowModal("close")
        break;
      case "close":
        SetShowModal("open");
        break;
      default:
        SetShowModal("close");
        break;
    }
  }
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="./images/mypics.jpg" alt="" />  
          <button onClick={handleClick} className="btn">Start a post</button>
      </div>
      <div>
        <button>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match-1" width="24"  height="24" focusable="false">
  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
</svg>
          <span>Photo</span>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match-2" width="24" height="24" focusable="false">
  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
</svg>
          <span>Video</span>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match-3" width="24" height="24" focusable="false">
  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
</svg>
          <span>Jobs</span>
        </button>
        <button>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match-4" width="24" height="24" focusable="false">
  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
</svg>
          <span>Write article</span>
        </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="./images/mypics.jpg" alt="" />
              <div>
                  <span>Peter Adedokun</span>
                  <span>Frontend Developer| React Developer</span>
                  <span>1mo</span>
              </div>
            </a>
            <button>
              <img src="./images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>
            My Facebook Homepage clone Built with Reactjs, Material UI and Firebase
            <br />
            
          </Description>
          <SharedImg>
            <a>
              <img src="./images/facebook.png" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>


            <li>
              <button>
                <img src="./images/like.svg" alt="" />
                <img src="./images/love.svg" alt="" />
                  <img src="./images/reaction.svg" alt="" />
                  <span>40</span>
              </button>
            </li>
            <li>
              <a href="">24 comments</a>
            </li>
              
          </SocialCounts> 

          <SocialActions>

          <button>
            <img src="/images/thumb.svg" alt="" />
            <span>Like</span>
          </button>
           <button>
            <img src="/images/comment.svg" alt="" />
            <span>Comment</span>
          </button>
           <button>
            <img src="/images/share.svg" alt="" />
            <span>Share</span>
          </button>
           <button>
            <img src="/images/send.svg" alt="" />
            <span>Send</span>
            </button>
          </SocialActions>
            
          
        </Article>
        <Article>
          <SharedActor>
            <a>
              <img src="./images/mypics.jpg" alt="" />
              <div>
                  <span>Peter Adedokun</span>
                  <span>Frontend Developer| React Developer</span>
                  <span>2mo</span>
              </div>
            </a>
            <button>
              <img src="./images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>
           My Portfolio built with ReactJs and Styled components😎😎
            <br />
            
          </Description>
          <SharedImg>
            <a>
              <img src="./images/port.png" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>


            <li>
              <button>
                <img src="./images/like.svg" alt="" />
                <img src="./images/love.svg" alt="" />
                  <img src="./images/reaction.svg" alt="" />
                  <span>60</span>
              </button>
            </li>
            <li>
              <a href="">60 comments</a>
            </li>
              
          </SocialCounts> 

          <SocialActions>

          <button>
            <img src="/images/thumb.svg" alt="" />
            <span>Like</span>
          </button>
           <button>
            <img src="/images/comment.svg" alt="" />
            <span>Comment</span>
          </button>
           <button>
            <img src="/images/share.svg" alt="" />
            <span>Share</span>
          </button>
           <button>
            <img src="/images/send.svg" alt="" />
            <span>Send</span>
            </button>
          </SocialActions>
            
          
        </Article>
      </div>
      <PostModal showModal={showModal } handleClick={handleClick} />

    </Container>
  )
}

export default Main

const Container = styled.div`
grid-area: main;
`

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  /* border-radius: 5%; */
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15% ), 0 0 0 rgb(0 0 0 /20%);
`
const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    width: 550px;
    color: #958b7b;
    margin: 0 0  8px;
    background-color: white;
    border-radius: 12px;
    div{
      button{
          outline: none;
          color: rgba(0,0,0,0.6);
          font-size: 14px;
          min-height: 48px;
          line-height: 1.5;
         background: transparent;
         border: none;
         display: flex;
         align-items: center;
         font-weight: 600;
         cursor: pointer;
      }
      &:first-child{
        display: flex;
        align-items: center;
        padding: 8px 16px 0px 16px;
        img{
          width: 48px;
          height: 48px;
          border-radius: 100%;
          margin-right: 8px;
        }
        button{
          margin: 4px 0;
          flex-grow: 1;
          border-radius: 35px;
          padding-left: 16px;
          border: 2px solid rgb(0,0,0,0.15);
          background-color: white;
          text-align: left;
        }
      }
       &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;
            button{
              svg{
                margin: 0 4px 0 -2px;
              }
              span{
                 color: #00000099;
              }
            }    
       }
   }

    @media (max-width: 768px){
      width: 100%;
    }
  `
  
const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
    border-radius: 12px;


  `

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img{
      width: 48px;
      height: 48px;
      border-radius: 100%;
    }
    & > div{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span{
        text-align: left;
         &:first-child{
            font-size: 14px;
            font-weight: 700;
            color: rgba(0,0,0,1);
         }
          &:nth-child(n+1){
              font-size: 12px;
              color: rgba(0,0,0,0.6);

          }
      }
    }
  }
  button{
    /* position: absolute; */
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: -29px;
  }
`
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rba(0,0,0,0.9);
  font-size: 14px;
  text-align: left;
`
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background: #f9fafb;

  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

`
const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    justify-content: space-between;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 2px solid #e9e5df;
    list-style: none;
    li{
      margin-right:  5px;
      font-size: 12px;

      button{
        display: flex;
        border: none;
        background: white;
      }
      span{
          color: rba(0,0,0,0.6);
      }
      a{
        text-decoration: none;
        &:hover{
          color: blue;
          text-decoration: underline;
        }
      }
    }
`
const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button{
    display: inline-flex;
    align-items: center;
    padding: 8px;
    background-color: white;
   color: rba(0,0,0,0.6);
   border: none ;
   cursor: pointer;
     font-weight: 400;
   
  }
`