/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef,  useState } from 'react';
import './Reservation.module.scss';

//MUI
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//MUI STYLING
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyref1: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2),
        color: ' black',
  
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',

        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
            backgroundColor: ' #e78d26',
            color: 'white',
            '&:hover': {
                color: ' #e78d26',
                backgroundColor: 'white'
            }
        },
    },
  }))
  

function Reservation() {
  const formRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const formClass = inView ? 'form-in-view' : '';

    const classes = useStyles()
    const [numPeople, setNumPeople] = useState(10);

    const [user, setUser] = useState( {
        firstname : '',
        lastname: '',
        email: '',
        phone: '',

    });

    const handleChange = (e) => {
        setUser( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        
    };

    const handleSubmit = () => {
      console.log(user);
    }
  return (
    <div >

     <form className={`${classes.root} ${formClass}`}>
      
      <TextField style={{color: ' #e78d26'}}
         label='First Name'
         variant='filled'
         type='text'
         name='firstname'
         required
         inputProps={{maxLength: 15, minLength: 3}}
         onChange={handleChange}
      />
      
      <TextField 
         label='Last Name'
         variant='filled'
         type='text'
         name='lastname'
         required
      //    value={numPeople}
         inputProps={{maxLength: 15, minLength: 3}}
         onChange={handleChange}
      />
      <TextField 
         label='Email'
         variant='filled'
         type='email'
         name='email'
         required
         inputProps={{maxLength: 35, minLength: 10}}
         onChange={handleChange}
      />
      
      <TextField 
         label='Phone'
         variant='filled'
         type='tel'
         name='phone'
         required
         inputProps={{maxLength: 15, minLength: 5}}
         onChange={handleChange}
      />
      <TextField  style={{color: ' #e78d26'}}
      id="people"
      label="Number of People"
      type="range"
      inputProps={{
        min: 1,
        max: 10,
        onChange: (e) => {
          setNumPeople(parseInt(e.target.value));
        },
      }}
      value={numPeople}
      />
      <span>{numPeople}</span>
      
      
      
      <Button onSubmit={handleSubmit} type='submit' variant='contained' color='primary'>
          Book
      </Button>
    </form>

  </div>
      
  )
}

export default Reservation;
