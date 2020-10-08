import styled from 'styled-components';

export const TeamHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #b38a4b;
  }

  h2 {
    font-size: 1.25rem;
    margin-top: 20px;
  }
`;

export const TeamContent = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  dl {
    display: flex;
    flex-direction: column;
    align-items: center;

    dt {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 1.5rem;

        color: #b38a4b;
      }

      h4 {
        margin-top: 30px;

        font-size: 1.25rem;
        font-weight: bold;
      }
    }

    dd {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 0.85rem;

      margin-top: 30px;

      & span {
        margin-top: 10px;
      }
    }
  }
`;

export const TeamImage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: auto;

  margin-top: 30px;

  & img {
    width: 100%;
    height: auto;
  }
`;
