import styled from 'styled-components';

export const ModalDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: auto;
  top: 30vh; // SignInModal is
  left: 30vw; // centered on the
  width: 40vw; // viewport at any
  height: 40vh; // screen size
  text-align: center;
  background-color: navy;
  color: white;
`;

export const XButton = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1px 5px;
  margin: 3px 3px;
  font-size: 0.5rem;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  background-color: white;
  color: black;
  :hover {
    cursor: pointer;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalInput = styled.input`
  width: 50%;
  margin: auto;
  color: black;
`;

export const ModalSubmit = styled.button`
  width: 20%;
  color: black;
  background-color: white;
  margin-top: 5vh;
`;
