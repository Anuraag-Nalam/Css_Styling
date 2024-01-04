import logo from '../assets/logo.png';
//this styled components is a module which is used to overcome the difficulties faced when using css-modules or vanilla css
import { styled } from 'styled-components'
// Basically this module will give scoping to the css file and it will tell Vite to treat it differently. Header.module.css returns a javascript object which will be imported here and hence styles are applied dynamically and the classname is changed in the front end and it is displayed as follows->._anuraag_hoxq2_55
import classes from './Header.module.css';

const StyledHeader=styled.header`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    & img {
      object-fit: contain;
      margin-bottom: 2rem;
      width: 11rem;
      height: 11rem;
    }
    
    & h1 {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.4em;
      text-align: center;
      text-transform: uppercase;
      color: #9a3412;
      font-family: 'Pacifico', cursive;
      margin: 0;
    }
    
   & p {
      text-align: center;
      color: #a39191;
      margin: 0;
    }
    
    @media (min-width: 768px) {
      
        margin-bottom: 4rem;
      
    
      & h1 {
        font-size: 2.25rem;
      }
    }



`
export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* inline css is the styling as we want the effect to work only for a single p element. Here text-align is not a valid input for the js file and hence we use textAlign */}
      {/* <p style={{color:'red',textAlign:'left'}}>A community of artists and art-lovers.</p> 
      
      If we want anuraag class to be reflected only onto the para element, then we can import javascript object from the Header.Module.css file*/}

      <p className={classes.anuraag}>A community of artists and art-lovers.</p>

    </StyledHeader>
  );
}
