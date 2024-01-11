import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.device.mobile};
  height: 100vh;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.white};
`;
