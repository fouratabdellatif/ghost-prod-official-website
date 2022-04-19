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
  background-color: #eeeeee;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: 2px solid #eeeeee;
  border-bottom: solid 2px #000000;
  padding: 14px;
  color: #949494;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

::placeholder {
  color: #949494;
  text-transform: uppercase;
}
`;

export const TextArea = styled.textarea`
height: 120px;
  background-color: #eeeeee;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: 2px solid #eeeeee;
  border-bottom: solid 2px #000000;
  padding: 14px;
  color: #949494;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  ::placeholder {
    color: #949494;
  text-transform: uppercase;
  }
`;