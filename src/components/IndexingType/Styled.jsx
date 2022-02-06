import styled from 'styled-components'

const SimulatorStyle = styled.div`

h3{
    color: #eee;
  }

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

  .check-buttons2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    border-radius: 5px;

    #pre{
      width: 33%;
      font-size: 10px;
      box-sizing: border-box;
      border: 0.5px solid #000;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px 0px 0px 5px;
    }

    #pos{
      position: left;
      width: 33%;
      margin: 0px;
      font-size: 10px;
      box-sizing: border-box;
      border: 0.5px solid #000;
      padding: 10px;
      cursor: pointer;
    }

    #fixed{
      width: 33%;
      margin: 0;
      font-size: 10px;
      box-sizing: border-box;
      border: 0.5px solid #000;
      padding: 10px;
      cursor: pointer;
      border-radius: 0px 5px 5px 0px;
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
      margin-top: 9px;
      margin-bottom: 5px;
      border: none;
      border-bottom: 0.5px solid grey; 
    }


    button{
      font-weight: 800;
      justify-content: center;
      padding: 11px;
      background-color: #ed8f52;
      margin-top: 15px;
      border-radius: 5px;
      border: none;
      

      &:hover{
        background-color: #3DB77C;
        transition: 0.5s;
        color: #fff;
        cursor: pointer;
      }

    }
  }
`

export default SimulatorStyle
