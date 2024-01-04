import { useState } from 'react';
import { styled } from 'styled-components'
import Button from './Buttons';
import Input from './Input';
//React components should always start with a camel case letter. 
const ControlledContainer =
  styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
//with the white space, we tell the styled components to capture the child component whereas if we dont put the space after ampersand as shown below, then it indicates to point out at the same button. 
// const Button = styled.button`. we can comment this code and paste it into another jsx file as we are working on how to re use the components. 

// padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover{
//   background-color: #f0920e;}
// `


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlledContainer>    
          <Input
          label="Email"
            type="email"
            //className={`label ${emailNotValid?'invalid':''}`}
            // style={{
            //   backgroundColor:emailNotValid?'#f87171':'#d1d5db'
            // }}
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />     
        
          {/* Adding css styles dynamically using inline css.*/}
          {/* Here the conditional statement works because under the hood, react creates a label html tag and forwards all the props to the label tag. Along with the css declared in the label styled component, react also passes this prop to that element and hence it will be reflected here in the component,
          Added dynamic class to the Label component
          */}
          {/* <Lable className={`label ${emailNotValid ? '$invalid' : ''}`}>Password</Lable> */}

          
          <Input
          label="Password"
            type="password"
            // className={passwordNotValid ? '$invalid' : undefined}
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        
      </ControlledContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
