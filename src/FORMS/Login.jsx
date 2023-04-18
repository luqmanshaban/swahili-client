import React, {useState} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

//mui
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';



import styles from './Login.module.css'



//MUI STYLING
const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: theme.spacing(2),

      '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '300px'
      },
      '& .MuiButtonBase-root': {
          margin: theme.spacing(2),
          backgroundColor: "#e78d26",

      },
  },
 
}))

const style = {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    display: 'flex', 
    justifyContent:'center',
     alignItems: 'center', 
     gap: '20px',  
     padding: '  10px',
     borderRadius: '5px',
     marginTop: '20px'
 }
 

function Login() {
  const classes = useStyles();

  const navigate = useNavigate();
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wrongPass, setWrongPass] = useState(false)
  const [focused, setFocused] = useState(false);



  const [user, setUser] = useState( {
      email: '',
      password: ''
  })

  const handleChange = (e) => {
      setUser( prev => ({
          ...prev,
          [e.target.name]: e.target.value
      }))
      
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          await axios.post('http://localhost:4000/api/v1/login', user).then(response => {

          setTimeout(() => {
            navigate('/dashboard');
          }, 4000);
              console.log(response);
              const {token } = response.data;
              localStorage.setItem('authToken', token)
              setUser({
                  
                  email: '',
                  password: ''
              })
              console.log(user);
              setIsLoggedIn(true)
              
              

          })
      } catch (error) {
          console.log(error);
          setWrongPass(true)
          console.log(wrongPass);
      }
      

  }

  return (
    <div>
    <form className={classes.root} >

    
        <TextField 
           label='Email'
           variant='filled'
           type='text'
           name='email'
           required
           inputProps={{maxLength: 35, minLength: 5}}
           onChange={handleChange}
           focused={focused && user.username === ''} // <-- add focused prop
           InputLabelProps={{style: {color: focused ? 'green' : '#757575'}}} // <-- add inputLabel prop
           onFocus={() => setFocused(true)}
           onBlur={() => setFocused(false)}
        />

        <TextField 
           label='Password'
           variant='filled'
           name='password'
           type='password'
           required
           inputProps={{maxLength: 25, minLength: 6}}
           onChange={handleChange}
           focused={focused && user.username === ''} // <-- add focused prop
           InputLabelProps={{style: {color: focused ? 'green' : '#757575'}}} // <-- add inputLabel prop
           onFocus={() => setFocused(true)}
           onBlur={() => setFocused(false)}
        />


        <Button type='submit' variant='contained' color='primary'  onClick={handleSubmit}>
            Login
        </Button>
        <div style={style}>

         <p>Not a member ?</p>
         <Link to='/signup' style={{fontSize: '16px', textDecoration: 'underline', fontWeight: 'bold'}}>
         Sign Up
         </Link>
      </div>
    </form>

   {
    isLoggedIn && (
        <div className={styles.authorized}>
            <p>Logged in</p>
        </div>
        
     )
   }

   {
    wrongPass && (
        <div className={styles.unauthorized}>
            <p>Wrong Username or password</p>
        </div>
    )
   }
    


    </div>
  )
}

export default Login;