import axios from "axios";

const url = "http://localhost:5000/markets/";

/* eslint-disable no-async-promise-executor */

class MarketService {
  // get market
  static getMarkets() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((market) => ({
            ...market,
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //Create market
  static createMarket(market) {
    return axios
      .post(url, market)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //delete market
  static deleteMarket(id) {
    return axios.delete(`${url}${id}`);
  }

  //update market
  static updateMarket(id, market) {
    return axios
      .put(`${url}${id}`, market)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default MarketService;
