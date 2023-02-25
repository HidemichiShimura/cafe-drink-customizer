const getQueryParams = (obj: any) => {
  return Object.keys(obj)
    // @ts-expect-error TS(2769): No overload matches this call.
    .reduce((prev, key) => {
      return [
        ...prev,
        `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`,
      ]
    }, [])
    // @ts-expect-error TS(2339): Property 'join' does not exist on type 'string'.
    .join('&')
}

export { getQueryParams }
