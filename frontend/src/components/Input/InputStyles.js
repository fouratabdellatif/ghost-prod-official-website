import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100px;
  label {
      text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  display: flex;
  padding-left: 5px;
  border-radius: 0px;
  border: 2px solid #eeeeee;
  background-color: #eeeeee;
  border-bottom: 2px solid #949494;

  ::placeholder {
      color: #949494;
      font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
height: 120px;
width: 100%;
display: flex;
padding-left: 5px;
padding-top: 14px;
border-radius: 0px;
border: 2px solid #eeeeee;
background-color: #eeeeee;
border-bottom: 2px solid #949494;

::placeholder {
    color: #949494;
    font-size: 14px;
}
`;