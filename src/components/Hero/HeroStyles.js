import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 70%;

  @media ${props => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding-top: 5px;

    margin: 0 auto;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  @media ${props => props.theme.breakpoints.lg} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
