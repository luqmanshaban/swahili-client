import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'; // Import useRef
import CameraIcon from '@mui/icons-material/CameraAlt';
import userImage from '../../assets/avatar.jpeg';
import styles from './CustomerProfilePic.module.scss';
import { CustomerContext } from '../../stores/Customer';

const CustomerProfilePic = () => {
  const [image, setImage] = useState(null);
  const [active, setActive] = useState(false)
  
  const fileInputRef = useRef(null); 
  const { customerDetails, profilePic, getProfilePicture } = useContext(CustomerContext)

  const handleFileInput = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0], e.target.files[0].name);
    setActive(true)
    setImage(formData);
  }

  const handleSave = async() => {
    const token = localStorage.getItem('token')
    await axios.post('http://localhost:8000/api/customer-profile-pictures', image, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log(response);
    })
  }
  const openFileInput = () => {
    // Trigger a click on the file input
    fileInputRef.current.click();
  };

  useEffect(() => {
    getProfilePicture()
  },[])

  return (
    <div className={styles.CustomerProfilePic}>
      <figure>
        <img src={profilePic || userImage} alt="profile" /> 
        <CameraIcon id={styles.icon} onClick={openFileInput} /> {/* Attach the onClick event */}
        <input
          type="file"
          ref={fileInputRef} // Attach the ref to the file input
          style={{ display: 'none' }} // Hide the file input
          onChange={handleFileInput}
        />
      </figure>
      <hr className={styles.hr}/>
      <div className={styles.customerDetails}>
        <h1>{customerDetails.firstname} {customerDetails.lastname}</h1>
        <h1>{customerDetails.email}</h1>
      </div>
      <button className={`${active ? styles.active : ''}`} disabled={!active} onClick={handleSave}>update</button>
    </div>
  );
}

export default CustomerProfilePic;
