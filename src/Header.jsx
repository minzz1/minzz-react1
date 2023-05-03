import styled from "styled-components";
import Logo from "./bts_logo.png"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #a29bfe
  `
const GlobalNav = styled.div`
width:1000px;
height: 80px;
display: fiex;
justify-content: space-between;
align-items: center;
`
const SmallNav = styled.div`
display: flex;
justify-content: space-between;
div {
  padding: 0 15px;
  cursor: pointer;
  &:hover{
    color: gray;
  }
}
`

export default function Header(){
    return (
        <div>
    <Container>
        <GlobalNav>
          <div>
            <img src={Logo} width="100px" alt="logo"/>
          </div>     
            <SmallNav>
            <div>업체소개</div>
            <div>포트폴리오</div>
            <div>사진</div>
            <div>게시판</div>
            <div>연락</div>
            </SmallNav>
          </GlobalNav>
      </Container>
        </div>
    )
}