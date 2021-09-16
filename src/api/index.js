import axios from "axios"

export const api = (filter = { nat: '', page: 1 }) => {
  return new Promise(async (resolve, reject) => {
    const params = {
      ...filter,
      results: 50,
      seed: 'abc'
    };

    try {
      const { data } = await axios.get(
        'https://randomuser.me/api/',
        { params }
      );
    
      const { results } = data;
      resolve(results);

    } catch(e) {
      reject(`An error has occurred: ${e}`)
    }
  })
}