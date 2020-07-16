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
            createdAt: new Date(product.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default ProductService;
