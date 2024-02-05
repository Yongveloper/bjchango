import { Link } from 'react-router-dom';
import * as S from './Home.styles';
import { ReactComponent as LogoImage } from 'images/logo-big.svg';

function Home() {
  return (
    <S.HomeContainer>
      <LogoImage data-testid="logo" />
      <Link to="/order">
        <button className="button">주문하러 가기</button>
      </Link>
    </S.HomeContainer>
  );
}

export default Home;
