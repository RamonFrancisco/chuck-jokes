import ENDPOINT_CHUCK_API from '../defaults/Endpoint'

class ChuckNorrisAPI {

  static fetchCategories = () =>
    new Promise((resolve, reject) => {

      fetch(`${ENDPOINT_CHUCK_API}jokes/categories`, {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
            res
              .json()
              .then(resolve)
              .catch(reject)
          } else {
            reject()
          }
        })
        .catch(reject)
    });

  static fetchRandomJoke = ({ categoryName }) =>
    new Promise((resolve, reject) => {

      fetch(`${ENDPOINT_CHUCK_API}jokes/random?category=${categoryName}`, {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
            res
              .json()
              .then(resolve)
              .catch(reject)
          } else {
            reject()
          }
        })
        .catch(reject)
    });
}

export default ChuckNorrisAPI
