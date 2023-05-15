import styled from "styled-components"

const Container =styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 64px 0;
`

const InnerContainer = styled.div`
    width: 1000px;
`

const BoxTitle = styled.div`
    font-size: 32px;
    font-weight: 600px;
`
const BoxSubTitle = styled.div`
    font-size: 24px;
    color: rgba(0,0,0,0.7);
    padding: 12px 0;
`

const ImageContents = styled.div`
    margin: 16px 0;
    padding : 64px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 350px;
    background: rgba(0,0,0,0.3);
    background-image: url("https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg");
    background-size: cover;
    border-radius: 20px;
`
const ContentsText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const ContentsButton = styled.div`
    width: 200px;
    height: 40px;
    background: red;
    color: white;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Portfolio (){
    return (
        <Container>
            <InnerContainer>
                <div>
                    <BoxTitle>온 • 오프라인 언제 어디서든</BoxTitle>
                    <BoxSubTitle>간편하고 빠르게 매매/임대차 정보와 투자 인사이트를 받아보세요.</BoxSubTitle>
                </div>
                { Array(3).fill("").map((_,i) => (
                <ImageContents>
                    <ContentsText>
                        <div>카카오 비즈 채널</div>
                        <div>선별된 스마트한 핵심 투자 정보를 받아보세요</div>
                        <div>
                            <div>주기적으로 업데이트 되는 공실률 정보</div>
                            <div>최근 시세 정보에 기반한 투자 인사이트</div>
                            <div>시시각각 변동되는 정부 정책과 규제 소식</div>
                        </div>
                    </ContentsText>
                        <ButtonContainer>
                            <ContentsButton>채널 바로가기</ContentsButton>
                        </ButtonContainer>
                </ImageContents>
                ))}
            </InnerContainer>
        </Container>
 
    )
}