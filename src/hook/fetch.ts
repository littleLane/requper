export default function() {
  const originFetch = window.fetch

  window.fetch = function(input: string | Request, configs = {}) {
    return new Promise((resolve, reject) => {
      originFetch(input, configs)
        .then((response: Response) => {
          resolve(response)
        })
        .catch((error: Error) => {
          reject(error)
        })
    })
  }
}
