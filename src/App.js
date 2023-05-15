import { GlobalStyles } from "./styles";
import Header from "./Header";
import MainImage from "./MainImage";
import Profile from "./Profile";
import Portfolio from "./Portfolio";



function App() {
  return (
    <div>
      {/*css 리셋 */}
      <GlobalStyles/>

      {/*메뉴*/}
      <Header/>

      {/*메인이미지 */}
      <MainImage/>

      {/*프로파일 */}
      <Profile/>

      <Portfolio/>
    </div>
  );
}

export default App;
