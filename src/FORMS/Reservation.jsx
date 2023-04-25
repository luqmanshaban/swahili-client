/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './Reservation.module.scss';

//MUI
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate()


    const classes = useStyles()
    const [numberOfPeople, setNumberOfPeople] = useState(4);

    const [booking, setBooking] = useState( {
        firstname : '',
        lastname: '',
        email: '',
        phone: '',
        date: '',
        numberOfPeople,
        time: '',

    });

    const handleChange = (e) => {
        setBooking( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
    
     
      try {
        setTimeout(() => {
          navigate('/dashboard');
        }, 4000);
        await axios.post('http://localhost:4000/api/v1/bookings/', booking).then((response) => {
          console.log(response);
          setBooking({
            firstname : '',
            lastname: '',
            email: '',
            phone: '',
            date: '',
            numberOfPeople,
            time: '',
            
          });
          console.log(booking);
          // setShowSuccessMessage(true);
          if(response.status === 200){
            alert('booking created')
          }
        });
      } catch (error) {
        console.log(error);
      }
    
      
    };

  return (
    <div >

     <form className={`${classes.root} `} onSubmit={handleSubmit}>
      
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
      <TextField
      label='date'
      variant="filled"
      placeholder='Date'
      type='date'
      name='date'
      required
      onChange={handleChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
      <TextField  style={{color: ' #e78d26'}}
      id="people"
      label="Number of People"
      type="range"
      value={numberOfPeople}
      inputProps={{
        min: 1,
        max: 10,
        onChange: (e) => {
          setNumberOfPeople(parseInt(e.target.value));
        },
      }}
      // value={numPeople}
      />
      <span>{numberOfPeople}</span>

      <TextField
      label="Time"
      name='time'
      required
      onChange={handleChange}
      variant="outlined"
      fullWidth
      placeholder="24hr format"
    />
      
      
      
      <Button  type='submit' variant='contained' color='primary'>
          Book
      </Button>
    </form>

  </div>
      
  )
}

export default Reservation;
