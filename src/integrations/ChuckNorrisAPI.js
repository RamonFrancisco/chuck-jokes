class ChuckNorrisAPI {

  static fetchCategories = () =>
    new Promise((resolve, reject) => {

      fetch('https://api.chucknorris.io/jokes/categories', {
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
    })
}

export default ChuckNorrisAPI
