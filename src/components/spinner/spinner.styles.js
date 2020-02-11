import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  position: relative;
  z-index: 999;
  height: 60vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  z-index: 999;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  margin-right: 40rem;
  @media only screen and (max-width: 1200px) {
    margin-right: 30rem;
  }
  @media only screen and (max-width: 650px) {
    margin-right: 0;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
