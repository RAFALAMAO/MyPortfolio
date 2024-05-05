import styled from 'styled-components';

export const Button = styled.div`
  /* Mobil */
  @media screen and (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    font-size: 5rem;
    z-index: 1;
    color: rgb(42, 76, 147);
  }

  /* PC */
  @media screen and (min-width: 1300px) {
    position: fixed;
    left: 90%;
    bottom: 40px;
    height: 40px;
    font-size: 4rem;
    z-index: 1;
    color: rgb(42, 76, 147);
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
