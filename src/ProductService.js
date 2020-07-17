import axios from "axios";

const url = "http://localhost:5000/products/";

/* eslint-disable no-async-promise-executor */

class ProductService {
  // get lists
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

  //Create list
  static createProduct(product) {
    return axios.post(url, 
      product);
  }
}

export default ProductService;
