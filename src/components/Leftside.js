import React from 'react'
import styled from 'styled-components'
const Leftside = () => {
  return (
      <Container>
          <ArtCard>
              <UserInfo>
                  <CardBackGroud/>
                      <Photo />
                  <About>
                      <div className='Frontend'>
                          <h2>Peter Adedokun</h2>
                          <p>Frontend Developer</p>
                      </div>
                      <div>
                          <div className='profile'>
                              <p>Who's viewed your profile</p>
                              <a href="">500</a>
                          </div>
                          <div className='post'>
                              <p>Impressions of your post</p>
                              <a href="">900</a>
                          </div>
                      </div>
                      <div className='access'>
                          <p>Access  exclusive tools & insight</p>
                          <h5>Get hired Faster,Try Prenium free</h5>
                      </div>
                      <div className='item'>
                          <p>My items</p>
                      </div>
                        </About>
              </UserInfo>
          </ArtCard>
          <Group>
              <div className='group'>
              <a href="">Groups</a>
              <div className='event'>
                <a href="">Events</a>
                <img src="./images/plus-icon.svg" alt="" />
              </div>
              <div className='hashtags'>
              <a href="">Followed Hastags</a>
              </div>
                  <p>Discover more</p>
                  </div>
          </Group>
    </Container>
  )
}

export default Leftside


const ArtCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
width: 230px;
border-radius: 5px;
transition: box-shadow 84ms;
position: relative;
border: none;
box-shadow:  0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
     @media (max-width: 768px){
        width: 100%;
     }
`

const Container = styled.div`
grid-area: leftside;
`
const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`
const CardBackGroud = styled.div`
    background: url("./images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`
const Photo = styled.div`
    box-shadow: none;
    background: url("./images/mypics.jpg");
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-position: center;
    background-size: 60%;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 100%;
`
const About = styled.div`
line-height: 1.9;

.Frontend p{
    font-size: 14px;
    color: rgba(0,0,0,0.6);
}
.profile{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(0,0,0,0.6);
    margin-top: 15px;
    line-height: 2.5;
}
.profile p,a{
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
}
.profile a{
    color: blue;
    text-decoration: none;
}
.post{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.6);
}
.post p,a{
    font-size: 13px;
    font-weight: 700;
    color: rgba(0,0,0,0.6);
    text-decoration: none;
}
.post a{
        color: #2929e3;


    text-decoration: none;
}
.access{
    margin-top: 10px;
    text-align: left;
    font-size: 13px;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    border-bottom: 1px solid rgba(0,0,0,0.6);
}
.item{
    text-align: start;
    font-size: 13px;
    font-weight: 700;

}
`

const Group = styled.div`
background-color: #fff;
width: 230px;
border-radius: 5px;
line-height: 2.6;

box-shadow:  0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
@media (max-width: 768px){
        width: 100%;
     }

a{
    text-decoration: none;
    font-size: 13px;
    color: #2929e3;
    font-weight: 600;
}
.event{
    display: flex;
    justify-content: space-between;
}
.hashtags{
    border-bottom: 1px solid rgba(0,0,0,0.6);

}
.group{
    margin: 8px;
}
p{
    text-align: center;
    color: rgba(0,0,0,0.6);
    font-weight: 600;
}
`
