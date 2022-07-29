import React from 'react'
import styled from 'styled-components'
import Leftside from './Leftside'
import RightSide from './RightSide'
import Main from "./Main"
const Home = (props) => {
  return (
    <Container>
          <br />
          <br />
         <br />
          <LayOut>
              <Leftside/>
                <Main/>
              <RightSide/>
        </LayOut>
         
          
      </Container>
  )
}

export default Home
const Container = styled.div`
max-width: 1128px;
    margin: 0 auto;

`
const LayOut = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: min-max(0, 5fr ) minmax(0, 12fr)  minmax(300px,7fr );
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`