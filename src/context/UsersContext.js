import React, { createContext, useCallback, useRef } from "react"
import { useApiCall } from "hooks/useApiCall"

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const { error, loading, data, fetchData } = useApiCall()
  const page = useRef(1)
  const filter = useRef({})

  const changePage = () => {
    page.current++;
    fetchData(filter.current, page.current)
  }

  const fetchUsers = useCallback(filterParam => {
    page.current = 1;
    filter.current = filterParam;
    fetchData(filterParam);
  }, [fetchData])

  return (
    <UsersContext.Provider
      value={{
        error,
        loading,
        data,
        page,
        changePage,
        fetchUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}