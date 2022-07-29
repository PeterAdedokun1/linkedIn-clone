import styled from "styled-components";
import React from 'react'
import { useState } from "react"


const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image,the file is a ${typeof image}`);
      return;
    }

    setShareImage(image)
  }
  const reset = (e) => {
    setEditorText("");
    props.handleClick(e)
  }
  return (
    <>
      {
        props.showModal === "open" && 
        <Container>
          <Content>
            <Header>
              <p>Create a post</p>
                <button onClick={(e)=> reset(e)}>
                  <img src="./images/photo-close.svg" alt="" />
                </button>
            </Header>
            <ShareContent>
              <UserInfo>
                <img src="./images/mypics.jpg" alt="" />
                <span>Peter Adedokun</span>
              </UserInfo>
              <Editor>
                <textarea
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}/>
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif,
                       image/jpeg ,
                        image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file" >
                        Select an image to share
                    </label>
                    </p>
                    {shareImage && <img src={URL.createObjectURL(shareImage)} />}
                   
                  </UploadImage>

              </Editor>
          
            </ShareContent>
            <ShareCreation>
              <AttachAsset>
                <AssetButton>
                  <img src="./images/post-photo.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="./images/post-video.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="./images/photo-doc.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="./images/photo-del.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="./images/photo-set.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="./images/photo-pie.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="./images/photo-menu.svg" alt="" />
                </AssetButton>
                <AnyOne>
                  <img src="./images/photo-chat.svg" alt="" />
                  <p>Anyone</p>
                </AnyOne>
              </AttachAsset>
              <Post disabled={!editorText ? true:false}>
                Post
              </Post>
            </ShareCreation>
          </Content>
        </Container>
      }
    </>
  )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0,0, 0,0.8);

`
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  height: 400px;
  background: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`
const Header = styled.div`
  display: block;
  padding: 16px 26px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0,0,00.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button{
    height: 40px;
     width: 40px;
     min-width: auto;
     color: rgba(0,0,0,0.15);
     border: none;
     background-color: white;
     cursor: pointer;
    svg,img{
      pointer-events: none;

    }
  }
`
const ShareContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg, img{
      width: 48px;
      height: 48px;
      background-clip: content-box;
      border: 2px solid transparent;
      border-radius: 50%;
  }
  span{
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;

  }
`
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;

`
const AssetButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0,0,0,0.5);
  margin-left: 10px;
  cursor: pointer;
   
`

const AttachAsset = styled.div`
   display: flex;
  align-items: center;
  padding-right:  8px;
${AssetButton}{
  width: 30px;
}
`
const AnyOne = styled.div`
display: flex;
margin-left: 15px;
/* justify-content: space-around; */
`
const Post = styled.div`
  display: flex;
  align-items: center;
  background-color:#00000014;
  background-color: #0a66c2;
  padding: 5px 25px;
  border-radius: 20px;
  cursor: pointer;
  background: ${(props) => (props.disabled ? "#00000014" : "0a66c2")};




`
const Editor = styled.div`

  padding: 12px 24px;
  textarea{
      width: 100%;
      min-height: 120px;
      resize: none;
      border: none;
      outline: none;
  }
input{
  width: 100%;
  height: 35px;
  font-size: 16px;
  margin-bottom: 20px;
  font-size: 16px;
}
   
`
const UploadImage = styled.div`

  text-align: center;
  img{
    width: 100%;
  }

`


export default PostModal