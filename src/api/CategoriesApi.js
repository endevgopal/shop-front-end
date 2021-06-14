import { useEffect, useState } from 'react';
import axios from 'axios';

function CategoriesApi(token) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get( `https://acdc-api21.herokuapp.com/api/category`, {
        headers: { Authorization: token },
      });
      setCategories(res.data);
    };
    getCategory();
  });

  const addCat = async (category) => {
    await axios.post(
       `https://acdc-api21.herokuapp.com/api/category`,
      { name: category },
      {
        headers: { Authorization: token },
      }
    );
  };
  return {
    category: [categories, setCategories],
    addCategory: addCat,
  };
}

export default CategoriesApi;
