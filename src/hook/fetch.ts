const fetchHook = (): void => {
  const originFetch = window.fetch

  window.fetch = (input: string | Request, configs = {}): Promise<Response> => {
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

export default fetchHook
