import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  >img {
    background: no-repeat;
   }
`

export const ContentInput = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media(min-width: 780px) {
    width: 50%; 
  }

  @media (min-width: 600px) and (max-width: 1025px) {

    >Input {
      margin: 40px;
      gap: 10px;
      width: 20px;
      height: 20px;
    }
  
    label {
      font-size: 18px;
    }
  }

  >form>header>h1 {
    color: #ffffff;
    padding: 5px;
    width: 50%;
    margin: 50px 0 40px 2.1em;
    background-color: #FF0000;
    font-size: 40px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
  }

  >form>header>h3 {
    margin-bottom: 5px;
    font-size: 30px;
  }

  >form>header>p {
    font-size: 20px;
    margin-bottom: 12px;
  }
`

export const Form = styled.form`

  >.inputs>div>Input {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`

 export const CheckBoxAndPass = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 `

export const CheckboxFild = styled.div`

 >label {
  margin-left: 10px;
  text-align: center;
 }

 input {
  width: 15px;
  height: 15px;
  border: 1px solid #FF0000;
  cursor: pointer;
 }

 input:checked {
  accent-color: #FF0000;
}
`

export const LineIconForgotPass = styled.div`

  >p {
    margin-top: 18px;
  }

  >img {
    margin: 4px 30px 12px 4px;
  }
`

export const Links = styled.div`

  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer; 

  <span>Link {
      font-size: 16px;
  }
`

