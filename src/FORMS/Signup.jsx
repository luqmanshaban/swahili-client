import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//mui
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
//
import { useNavigate } from 'react-router-dom';
import styles from'./Signup.module.css'
import Navbar from '../components/Landing/Navbar';
import Loading from '../components/Loading';

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
    margin: '20px 0',
    // width: '50%'
}


function Signup() {
    const navigate = useNavigate();
  
    const classes = useStyles();
  
    const [signedUp, setSignedUp] = useState(false);
    const [isLoading, setIsLoading] = useState(null);
  
    const [user, setUser] = useState({
      firstname: '',
      lastname: '',
      email: '',
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
     setIsLoading(true)
     
      try {
        setTimeout(() => {
          navigate('/login');
        }, 4000);
        await axios.post('http://127.0.0.1:8000/api/signup', user).then((response) => {
          setUser({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            
          });
          if(response.status === 200){
            alert('User created')
          }
        });
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false); 
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
      <Navbar />
      <form className={`${classes.root} ${styles.form}`} onSubmit={handleSubmit}>

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
          label='Create Password'
          variant='filled'
          name='password'
          type='password'
          required
          inputProps={{ maxLength: 25, minLength: 6 }}
          onChange={handleChange}
        />
      
        <button className={styles.signupBtn} type='submit' variant='contained' color='primary'>
          Sign Up
        </button>
        {isLoading && <Loading />}

      
        <div style={style}>
         <p>Already A member ?</p>
         <Link to='/login' style={{fontSize: '16px', textDecoration: 'underline', fontWeight: 'bold'}}>
         Login
         </Link>
      </div>
      </form>
      
     

      </>

    );
  
    // Conditionally render the content
    return <div>
      {content}
     
      </div>;
  }
  
  

export default Signup;