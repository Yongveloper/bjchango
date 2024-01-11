import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  max-width: ${({ theme }) => theme.device.mobile};
  position: fixed;
  height: 57px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Logo = styled.img``;
