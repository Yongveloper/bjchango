import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.device.mobile};
  bottom: 0;
  height: 170px;
  padding: 22px;
  border-radius: 20px 20px 0px 0px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);

  .order-info-container {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      font-size: 18px;
    }
  }

  button {
    width: 301px;
    height: 47.919px;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
  }
`;
