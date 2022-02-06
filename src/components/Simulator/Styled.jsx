import styled from 'styled-components'

const SimulatorStyle = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: center;



   .title-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
      font-size: 10px;
      font-weight: 700;
    }
  }

  

  .check-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
      border-radius: 5px;


    #bruto{
      margin: 0;
      font-size: 10px;
      width: 100%;
      box-sizing: border-box;
      border: 0.5px solid #000;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px 0px 0px 5px;

      &:hover{
      font-size: 11px;
      padding: 9px
    }



   }
    #liquido{
      margin: 0;
      font-size: 10px;
      width: 100%;
      box-sizing: border-box;
      border: 0.5px solid #000;
      padding: 10px;
      cursor: pointer;
      border-radius: 0px 5px 5px 0px;

      &:hover{
      font-size: 11px;
      padding: 9px;
    }
}

}

  form {
      display: flex;
      flex-direction: column;

    label{
      font-size: 10px;
      margin-top: 10px;
    }

    input{
      margin-top: 10px;
      margin-bottom: 5px;
      border: none;
      border-bottom: 0.5px solid grey; 
    }


    button{
      font-weight: 800;
      justify-content: center;
      padding: 8px;
      background-color: none;
      margin-top: 15px;
      border-radius: 5px;
      border: 1px solid #000;

      &:hover{
        background-color: #fff;
        transition: 0.5s;
        cursor: pointer;
      }

    }
  }
`

export default SimulatorStyle
