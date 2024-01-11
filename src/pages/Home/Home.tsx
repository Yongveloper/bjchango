import * as S from './Home.styles';
import LogoImage from 'images/logo-big.svg';

function Home() {
  return (
    <S.Container>
      <S.Image src={LogoImage} alt="logo" />
      <button className="button">주문하러가기</button>
    </S.Container>
  );
}

export default Home;
