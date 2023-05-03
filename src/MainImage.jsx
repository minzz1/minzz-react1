import styled from "styled-components";

const ContainerImage = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
position: relative;
&::after{
  content: "";
  position: absolute;
  top: 0 ;
  left: 0 ;
  width: 100%;
  height: 100%;
  background-color : rgba(0, 0, 0, 0.3);
}
`;

const MainImages = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
`;

const MainTitle = styled.div`
position: absolute;
width:1000px;
font-weight: 900;
font-size: 90px;
transform: translate(-50%, -50%);
top: 50%;
left: 50%;
z-index:99;
`;

const SubTitle = styled.div`
font-size: 48px;
margin-top: 20px;
padding-left: 10px;
color: rgba(0,0,0,0.5)
`;

export default function MainImage(){
    return(
        <ContainerImage>
        <MainImages src="https://weverse-phinf.pstatic.net/MjAyMjEyMjdfMTgy/MDAxNjcyMTE4NjE4MTMz.Qr82UTzFiOL9aJOi2zKi5J55qg0djqS77z0Y8bgGTdkg.7TEX5AJiH_V9N9poXuWGQzPFYzMcHquMEvEE8vmOZNsg.JPEG/e891c940-af31-4074-b604-84700241f784.jpeg?type=e1920" alt="메인 이미지" />
          <MainTitle>방! 탄! 쮠 ! </MainTitle>
          <SubTitle>I LOVE ARMY</SubTitle>
        </ContainerImage>
    )
}