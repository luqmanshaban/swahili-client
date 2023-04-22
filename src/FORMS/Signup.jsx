import React, {useState} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


//mui
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//

import { useNavigate } from 'react-router-dom';

import styles from'./Signup.module.css'
// import Navbar from '../components/Landing/Navbar';

//MUI STYLING
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '300px'
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
            backgroundColor: '#e78d26'
        },
    },
}))

// ###

const style = {
   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
   display: 'flex', 
   justifyContent:'center',
    alignItems: 'center', 
    gap: '20px',  
    padding: '10px',
    borderRadius: '10px',
    margin: '0 60px'
}


function Signup() {
    const navigate = useNavigate();
  
    const classes = useStyles();
  
    const [signedUp, setSignedUp] = useState(false);
    // const [passwordMatch, setPasswordMatch] = useState(true);
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const [user, setUser] = useState({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setUser((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Check if password and confirm password fields match
      // if (user.password !== user.cpassword) {
      //   setPasswordMatch(false);
      //   return;
      // }
    
      try {
        setTimeout(() => {
          navigate('/login');
        }, 4000);
        await axios.post('http://localhost:4000/api/v1/signup', user).then((response) => {
          console.log(response);
          setUser({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            
          });
          console.log(user);
          // setShowSuccessMessage(true);
          if(response.status === 200){
            alert('User created')
          }
        });
      } catch (error) {
        console.log(error);
      }
    
      setSignedUp(true);
      
    };
    
  
    // Define the content to be rendered
    const content = signedUp ? (

      <div className={styles.condition}>
        <p>Thank you {user.firstname} for signing Up</p>
      </div>

    ) : (
      <>
      {/* <Navbar /> */}
      <form className={classes.root} onSubmit={handleSubmit}>

        <TextField
        
          label='First Name'
          variant='filled'
          type='text'
          name='firstname'
          required
          inputProps={{ maxLength: 15, minLength: 3 }}
          onChange={handleChange}
          style={{marginTop: '150px'}}
        />

        <TextField
          label='Last Name'
          variant='filled'
          type='text'
          name='lastname'
          required
          inputProps={{ maxLength: 15, minLength: 3 }}
          onChange={handleChange}
        />

        <TextField
          label='Email'
          variant='filled'
          type='email'
          name='email'
          required
          inputProps={{ maxLength: 35, minLength: 8 }}
          onChange={handleChange}
        />

        <TextField
          label='Phone Number'
          variant='filled'
          type='tel'
          name='phone'
          required
          inputProps={{ maxLength: 15 }}
          onChange={handleChange}
        />
        
    
        <TextField
          label='Create Password'
          variant='filled'
          name='password'
          type='password'
          required
          inputProps={{ maxLength: 25, minLength: 6 }}
          onChange={handleChange}
        />
       
  
        {/* <TextField
          label='Confirm Password'
          variant='filled'
          name='cpassword'
          type='password'
          required
          inputProps={{ maxLength: 25, minLength: 6 }}
          onChange={handleChange}
        /> */}

      {/* {!passwordMatch && (
        <p style={{ color: "red" }}>Passwords don't match</p>
      )} */}
      {/* {showSuccessMessage && (
        <p style={{ color: "green" }}>Passwords match!</p>
      )}   */}
        <Button type='submit' variant='contained' color='primary'>
          Sign Up
        </Button>

      
      </form>
     

      </>

    );
  
    // Conditionally render the content
    return <div>
      {content}

      <div style={style}>
         <p>Already A member ?</p>
         <Link to='/login' style={{fontSize: '18px', textDecoration: 'underline', fontWeight: 'bold'}}>
         Login
         </Link>
      </div>
      
      
     
      </div>;
  }
  
  

export default Signup;