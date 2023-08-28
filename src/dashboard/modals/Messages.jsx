import React, { useState } from 'react'
import styles from './Messages.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const Messages = ({active, click}) => {

  const [messageDetails, setMessageDetails] = useState({
    email:'',
    topic: '',
    message: ''
  })

  const [isMessageSent, setIsMessageSent] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handleInputChange = e => {
    setMessageDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')

    try {
      const response = await axios.post('http://localhost:8000/api/messages', messageDetails, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(response.status === 201) {
        setIsMessageSent(true)
        setTimeout(() => {
          setIsMessageSent(false)
        }, 3000)
        setMessageDetails({
          email:'',
          topic: '',
          message: ''
        })
      }
    } catch (error) {
      console.error(error);
      setMessageError(false)
    }
  }
    
  return (
    <div className={styles.main}>
        <div className={styles.background} onClick={click}>
        </div>
        <section className={`${styles.Messages} ${active ? styles.active : ''}`}>
            <button className={styles.cancel} onClick={click}><CloseIcon className={styles.icon}/></button>
            <h1>Email Us for any Enquiries</h1>
            <div>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Get in touch</legend>
                <div>
                  <input type="email" name="email" id="" placeholder='example@gmail.com' onChange={handleInputChange}/>
                </div>
                <div>
                  <input type="text" name='topic' placeholder='Enter topic' onChange={handleInputChange}/>
                </div>
                <div>
                  <textarea name="message" id="" cols="30" rows="10" onChange={handleInputChange}></textarea>
                </div>
                <div>
                  <button>Send</button>
                </div>
                {
                isMessageSent && (
                <div>
                  <p style={{border: '1px solid green' ,padding: '10px 20px', borderRadius: '5px', color: "green", textAlign: 'center'}}>Message Sent</p>
                </div>)
                }
                {
                messageError && (
                <div>
                  <p style={{backgroundColor: 'red', padding: '10px 20px', borderRadius: '5px', color: "#fff", textAlign: 'center'}}>Unable to send message</p>
                </div>)
                }

                </fieldset>
              </form>
            </div>
        </section>
    </div>
  )
}

export default Messages;