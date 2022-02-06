import styled from "styled-components";

const GlobalStyle = styled.html`
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: sans-serif;
  background-color: #eee;
  height:90vh;

  input[type="radio"]{
    display:none;
    position: relative;
  }

  input[type="radio"]:checked + label{
    background-color: #ED8F52;
    color: #fff;

  }

  }

    input:focus, select:focus {

    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-bottom: 0.5px solid grey; 
} 

  input{
    background-color: #eee;
  }





`

export default GlobalStyle
