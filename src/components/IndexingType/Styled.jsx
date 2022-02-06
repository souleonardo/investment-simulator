import styled from 'styled-components'

const SimulatorStyle = styled.div`

h3{
    color: #fff;
  }

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

  .check-buttons {
    display: flex;
    justify-content: center;
    text-align: center;
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
      padding: 10px;
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
