import React, { useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import axios from 'axios';
import nullImg from '../../../assets/images/null.png';
import Delete from '@mui/icons-material/Delete';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [menuCheckboxes, setMenuCheckboxes] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const [deleteMenu, setDeleteMenu] = useState(false)
  

  const handleCheckboxChange = (menuId) => {
    setMenuCheckboxes((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
    setDeleteMenu(!deleteMenu)
  };

  const toggleSelectAll = () => {
    const updatedCheckboxes = {};
    if (!selectAll) {
      menus.forEach((menu) => {
        updatedCheckboxes[menu.id] = true;
      });
    }
    setMenuCheckboxes(updatedCheckboxes);
    setSelectAll(!selectAll);
    setDeleteMenu(!deleteMenu)
  };

  const getAllMenus = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/menus', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMenus(response.data.menus);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  useEffect(() => {
    getAllMenus();
  }, []);

  return (
    <div className={styles.MenuComponent}>
      <header>
        <h1>Menu</h1>
        {deleteMenu && (<span>
          <Delete />
        </span>)
        }
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu, index) => (
              <tr key={menu.id}>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={menu.img || nullImg} alt={menu.name} />
                </td>
                <td>{menu.name}</td>
                <td>{menu.price}</td>
                <td>{menu.category}</td>
                <td style={{ textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={menuCheckboxes[menu.id] || false}
                    onChange={() => handleCheckboxChange(menu.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Menu;
