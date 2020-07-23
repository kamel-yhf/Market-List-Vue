import axios from "axios";

const url = "http://localhost:5000/lists/";

/* eslint-disable no-async-promise-executor */

class ListService {
  // get lists
  static getLists() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((list) => ({
            ...list
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //Create list
  static createList(list) {
    return axios
      .post(url, list)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //delete list
  static deletelist(id) {
    return axios.delete(`${url}${id}`);
  }

  //update list
  static updateList(id, list) {
    return axios
      .put(`${url}${id}`, list)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getOneList(id) {
    return axios.get(`${url}${id}`).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
  }
}

export default ListService;
