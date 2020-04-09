/* Custom fetch api function */
  export const fetchData = async (url, response) => {
    try {
      const req = await(await fetch(url)).json()
      return response(req)
    } catch (error) {
      console.log(error)
    }
  }
/* Custom fetch api function */

/* Object contain JsonPlaceholder API infos */
  export const JsonPlaceholderApi = {
    url: 'https://jsonplaceholder.typicode.com/',
    paths: ['posts','comments','albums','photos','todos','users']
  }
/* Object contain JsonPlaceholder API infos */
