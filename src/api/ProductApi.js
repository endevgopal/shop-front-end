import { useState, useEffect } from 'react';
import axios from 'axios';
function ProductApi() {
  const [products, setProducts] = useState([]);
  const [callback, setCallBack] = useState('false');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [result, setResult] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `https://acdc-api21.herokuapp.com/api/products?limit=${
          page * 4
        }&${category}&${sort}&title[regex]=${search}`
      );
      setProducts(res.data.products);
      setResult(res.data.result);
      console.log(res.data.result);
    };
    getProduct();
  }, [callback, page, sort, search, category]);

  return {
    products: [products, setProducts],
    callback: [callback, setCallBack],
    category: [category, setCategory],
    sort: [sort, setSort],
    page: [page, setPage],
    result: [result, setResult],
    search: [search, setSearch],
  };
}

export default ProductApi;
