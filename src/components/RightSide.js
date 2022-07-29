import React from 'react'
import styled from 'styled-components'

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <div className='card-container'>
        <div className='news'>
          <h3>LinkedIn News</h3>
          <img src="./images/feed-icon.svg" alt="" />
        </div>
        <ul>
          <div>
          <li>Ecommerce feels inflation pinch</li>
            <span>1hr ago  	&#8226; 200 readers</span>
          </div>
          <div>
            <li>Best countries for working abroad</li>
              <span>1d ago 	&#8226; 4098 readers </span>
          </div>
          <div>
            <li>Banks face high attrition</li>
            <span>23h  	&#8226; 945 readers</span>
          </div>
          <div>
            <li>Age vs startup success debate</li>
            <span>1d ago 	&#8226; 346 readers</span>
            </div>
            <div>
            <li>Most indians make new home in US</li>
            <span>1d ago 	&#8226; 1850 readers</span>
            </div>
            
        </ul>
          </div>
      </FollowCard>
      <Ads>
        <h6>Ad</h6>
        
        <div className='img-ad'>
          <img src="./images/mypics.jpg" alt="" />
          <img src="./images/google.jpg" alt="" />
        </div>
        <p>Peter,explore jobs a <b>Google</b> that match your skills</p>
        <div className='jobs'> 
        <a href="">See jobs</a>


        </div>
      </Ads>
    </Container>
  )
}

export default RightSide
const Container = styled.div`
grid-area: rightside;

@media (max-width: 768px){
    display: none;
}
`
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 5px;
  position: relative;

  border: none;
  width: 290px;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15% ), 0 0 0 rgb(0 0 0 /20%);
  padding: 12px;
  text-align: start;
font-size: 14px;
.card-container{
  padding: 6px;
}
  .news{
    display: flex;
    justify-content: space-between;
  }
  ul div{
    margin-top:16px;
  }
  li{
    font-weight: 600;
    color: rgba(0,0,0,0.6);
  }
  span{
    font-size: 12px;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
  }
  
`
const Ads = styled.div`
  width: 300px;
  margin: 0;
  padding: 6px;
  border-radius: 5px;
  border: none;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15% ), 0 0 0 rgb(0 0 0 /20%);

  .img-ad{
    display: flex;
    justify-content: center;
    margin-top: 35px;
    }
  .img-ad img{
    width: 70px;
    height: 70px;
    margin: 15px;
    border-radius: 100%;
  }
   p{
      text-align: center;
      margin-bottom: 15px;
  }
  h6{
    text-align: end;
    font-weight: 500;
    margin-right: 8px;
  }
  .jobs{
    text-align: center;
    margin-bottom: 14px;
  }
  a{
    text-decoration: none;
    border: 1px solid blue;
    padding: 7px 23px;
    border-radius: 30px;
    color: blue;
    font-weight: 500;
  }
`