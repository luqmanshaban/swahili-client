import React, { useContext, useEffect, useState } from 'react';
import styles from './DetailsComponent.module.scss';
import { CustomerContext } from '../../../stores/Customer';

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
    const { customerDetails, getCustomerDetails } = useContext(CustomerContext)



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
        getCustomerDetails()
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
                            value={customerDetails.firstname}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastname"
                            value={customerDetails.lastname}
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
                            value={customerDetails.phone}
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
                            value={customerDetails.email}
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
                            value={customerDetails.region}
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
                            value={customerDetails.address}
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
