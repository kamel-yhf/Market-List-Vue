import axios from "axios";

const url = "http://localhost:5000/products/";

/* eslint-disable no-async-promise-executor */

class ProductService {
  // get product
  static getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((product) => ({
            ...product,
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //Create product
  static createProduct(product) {
    return axios
      .post(url, product)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //delete product
  static deleteProduct(id) {
    return axios.delete(`${url}${id}`);
  }

  //update product
  static updateProduct(id, product) {
    return axios
      .put(`${url}${id}`, product)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ProductService;
