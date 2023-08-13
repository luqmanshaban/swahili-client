import React, { useContext, useEffect, useState } from 'react';
import styles from './DetailsComponent.module.scss';
import { AdminContext } from '../../../stores/Admin';

const DetailsComponent = () => {
    const [active, setActive] = useState(false)
    const [details, setDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        region: '',
        address: '',
    });
    const { adminDetails, getAdminDetails } = useContext(AdminContext)



    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
        setActive(true)
        console.log(details);
    }

    useEffect(() => {
        getAdminDetails()
    },[])

    return (
        <div className={styles.DetailsComponent}>
            <form>
                <section>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstname"
                            value={adminDetails.firstname}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastname"
                            value={adminDetails.lastname}
                            onChange={handleChange}
                        />
                    </div>
                </section>

                <section>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={adminDetails.phone}
                            onChange={handleChange}
                            placeholder='+254. . . '
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={adminDetails.email}
                            onChange={handleChange}
                            placeholder='email@example.com'
                        />
                    </div>
                </section>

                <section>
                    <div>
                        <label htmlFor="region">Region:</label>
                        <input
                            type="text"
                            id="region"
                            name="region"
                            value={adminDetails.region}
                            onChange={handleChange}
                            placeholder='i.e Runda'
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={adminDetails.address}
                            onChange={handleChange}
                            placeholder='Runda Drive'
                        />
                    </div>
                </section>
            </form>
            <section className={styles.btn}>
              <button onClick={handleChange} disabled={!active} className={`${active ? styles.active : ''}`}>Update</button>
              {active && (<button>Cancel</button>)}
            </section>
        </div>
    );
}

export default DetailsComponent;
