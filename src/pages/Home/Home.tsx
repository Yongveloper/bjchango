import { Link } from 'react-router-dom';
import * as S from './Home.styles';
import LogoImage from 'images/logo-big.svg';

function Home() {
  return (
    <S.Container>
      <S.Logo src={LogoImage} alt="logo" />
      <Link to="/order">
        <button className="button">주문하러 가기</button>
      </Link>
    </S.Container>
  );
}

export default Home;
