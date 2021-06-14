import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { GlobalState } from '../../../GlobalState';
import './category.css';

function Category() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesApi.category;
  const [token] = state.token;
  const addCat = state.categoriesApi.addCategory;
  const [category, setCategory] = useState('');
  const [onEdit, setOnEdit] = useState(false);
  const [id, setId] = useState(false);
  const newCate = async (e) => {
    e.preventDefault();
    if (category === '') {
      toast.error('Enter Category');
    }

    if (onEdit) {
      const res = await axios.put(
        `https://acdc-api21.herokuapp.com/api/category/${id}`,
        { name: category },
        {
          headers: { Authorization: token },
        }
      );
      toast.success(res.data.msg);
      setCategory('');
    } else {
      addCat(category);
      setCategory('');
    }
  };

  const deleteCategory = async (id) => {
    const res = await axios.delete(`/api/category/${id}`, {
      headers: { Authorization: token },
    });
    toast.success(res.data.msg);
  };

  const editCategory = (id, name) => {
    setId(id);
    setCategory(name);
    setOnEdit(true);
  };
  return (
    <div className="category">
      <form onSubmit={newCate}>
        <label htmlFor="category"> Category</label>
        <input
          type="text"
          name="category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">{onEdit ? 'Update' : 'Save'}</button>
      </form>
      <div className="col">
        {categories.map((category) => (
          <div className="row" key={category._id}>
            <p>{category.name}</p>
            <div>
              <button onClick={() => editCategory(category._id, category.name)}>
                Edit
              </button>
              <button onClick={() => deleteCategory(category._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
