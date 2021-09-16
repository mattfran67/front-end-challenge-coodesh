import { useCallback, useEffect, useState } from "react"
import { api } from "api"

export const useApiCall = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    api().then(res => {
      setData(res)
      setLoading(false)
    }).catch(e => {
      console.log(e)
      setError(true)
    })
  }, [])

  const fetchData = useCallback((filter, page = 1) => {
    const query = page !== 1
      ? { page, ...filter}
      : { page: 1, ...filter }

    setLoading(true)
    api(query).then(res => {
      let filterResponse
      if (filter.gender) {
        filterResponse = res.filter(result => {
          return result.gender === filter.gender
        })
      } 

      const result = filterResponse || res
      
      if (page === 1) {
        setData(result)
      } else {
        setData(prevState => [...prevState, ...result])
      }

      setLoading(false)
    }).catch(e => {
      console.log(e)
      setError(true)
    })
  }, [])

  return { data, loading, error, fetchData }
} 