import styled from 'styled-components';
import CenteredContainer from 'components/CenteredContainer';

export const HomeContainer = styled(CenteredContainer)`
  background-color: ${({ theme }) => theme.colors.black};
  gap: 41px;

  .button {
    width: 172px;
    height: 88px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    font-size: 25px;
  }
`;

export const Logo = styled.img``;
