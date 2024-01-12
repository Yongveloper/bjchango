import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  max-width: ${({ theme }) => theme.device.mobile};
  position: fixed;
  top: 0;
  height: 57px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Logo = styled.img``;
