import styled from 'styled-components'



const SimulatorStyle = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  background-color: white;
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

  .check-buttons input{
    display: flex;
    display: none;
    justify-content: space-between;
    text-align: center;
    border: 0.5px solid #000;
    padding: 10px;
    border-radius: 5px;
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
      padding: 10px;
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
