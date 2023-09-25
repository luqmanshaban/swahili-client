import React, { useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import axios from 'axios';
import nullImg from '../../../assets/images/null.png';
import Delete from '@mui/icons-material/Delete';


const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [deleteMenu, setDeleteMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null); 
  const [addMenuClicked, setAddMenuClicked] = useState(false)
  const [newMenu, setNewMenu] = useState({
    name: "",
    price: null,
    category: ''
  })
  const handleChange = (e) => {
    setNewMenu( prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
    
  };



  const handleSelectedMenu = (menu) => {
    setSelectedMenu(menu);
  };

  const deleteSelectedMenu = (menu) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${menu.name}"?`);
  
    if (confirmDelete) {
      setDeleteMenu(menu);
      try {
        const token = localStorage.getItem('token');
        axios
          .delete(`http://localhost:8000/api/admin/menus/${menu.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(`Error deleting ${menu.name}:`, error);
          });
      } catch (error) {
        console.error(`Error deleting ${menu.name}:`, error);
      }
    }
  };
  

  const getAllMenus = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/menus/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMenus(response.data.menus);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const handleEditMenu = async (e) => {
    e.preventDefault();
    // Create a new object without 'id' and 'image'
    const { id, img, ...menuWithoutIdAndImage } = selectedMenu;
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8000/api/admin/menus/${selectedMenu.id}`,
        menuWithoutIdAndImage, // Send the object without 'id' and 'image'
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error('Error updating menu:', error);
    }
  };
  
  const handleAddMenuBtnClick = () => setAddMenuClicked(true)

  const handleAddMenu = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.post(
        `http://localhost:8000/api/menus/`,
        newMenu,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log(response);
    } catch (error) {
      console.error('Error adding menu:', error);
    }
  };
  

  useEffect(() => {
    getAllMenus();
  }, []);

  // Edit form JSX
  const editForm = selectedMenu && (
    <div className={styles.editForm}>
  <h2>Edit {selectedMenu.name}</h2>
  <form onSubmit={handleEditMenu}>
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={selectedMenu.name}
      onChange={(e) => setSelectedMenu({ ...selectedMenu, name: e.target.value })}
      required
    />
    <label htmlFor="price">Price:</label>
    <input
      type="text"
      id="price"
      name="price"
      value={selectedMenu.price}
      onChange={(e) => setSelectedMenu({ ...selectedMenu, price: e.target.value })}
      required
    />
    <label htmlFor="category">Category:</label>
    <select
      id="category"
      name="category"
      required
      value={selectedMenu.category}
      onChange={(e) => setSelectedMenu({ ...selectedMenu, category: e.target.value })}
    >
      <option value="meals">Meals</option>
      <option value="snacks">Snacks</option>
      <option value="shawarma">Shawarma</option>
      <option value="drinks">Drinks</option>
    </select>

    <button type="submit" id={styles.save}>Save</button>
    <button type="button" id={styles.cancel}>Cancel</button>
  </form>
</div>

  );

  const addMenu = (
    <form className={styles.addMenu} onSubmit={handleAddMenu} >
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="" required onChange={handleChange}/>
      <label htmlFor="price">Price</label>
      <input type="text" name='price' required onChange={handleChange}/>
      <label htmlFor="category">Category</label>
      <select
      id="category"
      name="category"
      required
      onChange={handleChange}
    >
      <option value="meals">Meals</option>
      <option value="snacks">Snacks</option>
      <option value="shawarma">Shawarma</option>
      <option value="drinks">Drinks</option>
    </select>
      <button type="submit" id={styles.save}>Add</button>
      <button onClick={() => setAddMenuClicked(!addMenuClicked)} type="button" id={styles.cancel}>cancel</button>
    </form>
  )

  return (
    <div className={styles.MenuComponent}>
      <header style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>Menu</h1>
        <button onClick={handleAddMenuBtnClick} style={{padding: "10px", borderRadius: "5px", backgroundColor:"green", fontSize:"17px", color: "#fff"}}>Add Menu</button>
        {deleteMenu && (
          <span>
            <Delete />
          </span>
        )}
      </header>
      <main>
        {editForm}
        {addMenuClicked && addMenu}
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
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
                  <button onClick={() => handleSelectedMenu(menu)}>edit</button>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={() => deleteSelectedMenu(menu)}>Delete</button>
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
