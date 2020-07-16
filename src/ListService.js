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
            ...list,
            createdAt: new Date(list.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  //Create list
  static insertlist(list) {
    return axios.post(url, {
      list,
    });
  }

  //delete list
  static deletelist(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default ListService;
