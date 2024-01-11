import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.device.mobile};
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
