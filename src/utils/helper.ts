const getQueryParams = <T extends object>(obj: T) => {
  return Object.keys(obj)
    .reduce((prev: string[], key) => {
      return [
        ...prev,
        `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`,
      ]
    }, [])
    .join('&')
}

export { getQueryParams }
