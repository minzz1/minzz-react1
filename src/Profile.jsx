import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.2);
    display: fiex;
    justify-content: center;
    padding: 64px 0;
`

const InnerContainer = styled.div`
    width: 1000px;
    height: 200px;
    background: rgba(0,0,0,0.3)
`

const GridContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 30px, 0px, 30px, 30px;
`

const MainBox = styled.div`
    background: white;
    height: 400px;
   
    &:hover{
        background-color: red;
        color: white;
      }
`

const MainMenu = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Profile(){
    return (
        <Container>
            {/* 1000픽셀 중앙정렬*/}
            <InnerContainer>
                {/*그리드 */}
                <GridContainer>
                    <MainBox>
                        <MainMenu>
                            <div></div>
                            <div>임차인 입니다.</div>
                            <div><h1>허위매물 제로 ! </h1></div>
                            <div>
                                전수조사 기반 압도적<br/>
                                질과 양의 매물을 제공합니다.
                            </div>
                            <div>사무실 구하기</div>
                        </MainMenu>
                    </MainBox>
                    <MainBox>
                        <MainMenu>
                            <div></div>
                            <div>임대인입니다</div>
                            <div>공실걱정 제로 ! </div>
                            <div>
                                지식산업센터는 물론 국내외 기업 등 <br/>
                                수많은 임차인들에게 매물을 소개합니다.
                            </div>
                            <div>사무실 내놓기</div>
                        </MainMenu>
                    </MainBox>
                    <MainBox>
                        <MainMenu>
                            <div></div>
                            <div>중개인입니다</div>
                            <div>광고비 제로 ! </div>
                            <div>
                                지역상생협력을 최우선 가치로 여기고<br/>
                                매물과 임차 정보를 공유하고 지원합니다.
                            </div>
                            <div>공통 중개하기</div>
                        </MainMenu>
                    </MainBox>
                </GridContainer>
            </InnerContainer>
        </Container>
    )
}