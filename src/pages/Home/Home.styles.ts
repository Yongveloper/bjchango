import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
