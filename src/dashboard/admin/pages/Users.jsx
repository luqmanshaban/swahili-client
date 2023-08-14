import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../../stores/Admin';
import styles from './Users.module.scss';
import userImg from '../../../assets/avatar.jpeg'

const Users = () => {
  const { getUsers, users } = useContext(AdminContext);

  useEffect(() => {
    getUsers();
  }, []);

  // Create a state to track the checked status for each user
  const [userCheckboxes, setUserCheckboxes] = useState({});

  const handleCheckboxChange = (userId) => {
    setUserCheckboxes(prevState => ({
      ...prevState,
      [userId]: !prevState[userId] 
    }));
    console.log(userCheckboxes);
  };

  return (
    <div className={styles.usersComponent}>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user.id}>
              <td style={{textAlign: 'center'}}>{index + 1}</td>
              <td style={{display: 'flex', justifyContent: 'center'}}>
                <img src={user.image || userImg} alt={user.name} />
              </td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.roles[0]}</td>
              <td style={{textAlign: 'center'}}>
                <input
                  type="checkbox"
                  checked={userCheckboxes[user.id] || false}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
