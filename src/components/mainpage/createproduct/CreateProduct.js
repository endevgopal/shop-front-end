import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import './createproduct.css';
import Loader from '../utils/loader/Loader';
const initialState = {
  product_id: '',
  title: '',
  description: '',
  price: '',
  content: '',
  category: '',
  _id: '',
};
function CreateProduct() {
  const state = useContext(GlobalState);
  const history = useHistory();
  const params = useParams();
  const [product, setProduct] = useState(initialState);
  const [categories] = state.categoriesApi.category;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAdmin] = state.userApi.isAdmin;
  const [token] = state.token;
  const [products] = state.ProductApi.products;
  const [callback, setCallBack] = state.ProductApi.callback;
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) {
          setProduct(product);
          setImages(product.images);
          setEdit(true);
        }
      });
    } else {
      setEdit(false);
      setProduct(initialState);
      setImages(false);
    }
  }, [params.id, products]);

  const styleImg = {
    display: images ? 'block' : 'none',
  };

  const imgUpload = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return toast.error('You are not an Admin');
      const file = e.target.files[0];

      if (!file) return toast.error('File not exist');

      if (file.size > 1024 * 1024) return toast.error('Size too large!');

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        return toast.error('Only JPEG, PNG files are allowed!');

      let formDate = new FormData();
      formDate.append('file', file);

      setLoading(true);

      const res = await axios.post('https://acdc-api21.herokuapp.com/api/upload', formDate, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token,
        },
      });
      setLoading(false);

      setImages(res.data);
    } catch (e) {
      toast.error(e);
    }
  };

  const deleteImg = async (public_id) => {
    try {
      if (!isAdmin) return toast.error('You are not an Admin');

      await axios.post(
        'https://acdc-api21.herokuapp.com/api/destroy',
        { public_id: public_id },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setImages(false);
    } catch (e) {
      toast.error(e);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return toast.error('You are not an Admin');
      if (images === false) return toast.error('Upload Image');
      if (edit) {
        setLoading(true);
        await axios.put(
          `https://acdc-api21.herokuapp.com/api/products/${product._id}`,
          { ...product, images },
          {
            headers: {
              Authorization: token,
            },
          }
        );
      } else {
        setLoading(true);
        await axios.post(
          'https://acdc-api21.herokuapp.com/api/products',
          { ...product, images },
          {
            headers: {
              Authorization: token,
            },
          }
        );
      }

      setImages(false);
      setCallBack(!callback);
      setLoading(false);
      setProduct(initialState);
      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="create_product">
          <div className="upload">
            <input type="file" name="file" id="file_up" onChange={imgUpload} />
            <div className="file_img" style={styleImg}>
              <img src={images.url} alt="" />
              <span onClick={() => deleteImg(images.public_id)}>X</span>
            </div>
          </div>

          <form onSubmit={formSubmit}>
            <div className="row">
              <label htmlFor="product_id">Product_id</label>
              <input
                type="text"
                name="product_id"
                id="product_id"
                value={product.product_id}
                required
                onChange={handleChangeInput}
                disabled={edit}
                // onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="row">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={product.title}
                required
                onChange={handleChangeInput}
                // onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="row">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                value={product.price}
                required
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                rows="5"
                value={product.description}
                required
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                name="content"
                id="content"
                rows="7"
                value={product.content}
                required
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="categories">Categories</label>
              <select
                name="category"
                id="category"
                value={product.category}
                required
                onChange={handleChangeInput}
              >
                <option value="">Please select a category</option>
                {categories.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">{edit ? 'Update' : 'Save'}</button>
          </form>
        </div>
      )}
    </>
  );
}

export default CreateProduct;
