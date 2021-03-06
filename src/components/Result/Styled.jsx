import styled from 'styled-components'

const ResultStyle = styled.div`

    margin-left: 35px;


  .title-result{
    justify-content: center;
  }
  .container-result{
    justify-content:center;  
    display: flex;
    flex-direction: row;
    max-width: 550px;
    height: 150px;
    flex-wrap: wrap;
    

  div {
    display: flex;
    wrap: wrap;

    flex-direction: column;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    justify-content: center;;
    border-radius: 3px;
    width: 150px;
    height: 50px;
    background-color: #F4F4F4;
    margin-right: 30px;
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.26); 
    box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.26);
  }
}



`

export default ResultStyle
