import React from 'react';

import styles from './Map.module.scss'



const Map = () => {
  return (
    <>
    <div  className={styles.map}>
        <iframe title='Swahili Plate Muindi Mbingu street location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.102702281845!2d36.784501388420594!3d-1.2824490605347323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d38b6dd997%3A0x8d7b3af566656f59!2sSwahili%20Plate!5e0!3m2!1sen!2ske!4v1681284314031!5m2!1sen!2ske" width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

       <iframe title='Swahili Plate Sarit Center location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.62759811124!2d36.76915148841481!3d-1.2612239644954077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17022dd1eb45%3A0xfad6cb90e90adfc9!2sSwahili%20Plate%20-%20Sarit%20Center!5e0!3m2!1sen!2ske!4v1681283466110!5m2!1sen!2ske" width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
   
  );
};

export default Map;
