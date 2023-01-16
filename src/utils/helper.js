const getQueryParams = (obj) => {
  return Object.keys(obj)
    .reduce((prev, key) => {
      return [...prev, `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`]
    }, [])
    .join('&')
}

export { getQueryParams }
