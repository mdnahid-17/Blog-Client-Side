import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import useAuth from './useAuth'


export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})
const useAxiosSecure = () => {
  const {logOutUser} =useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res
      },
      async error => {
        console.log('error tracked in the interceptor', error.response)
        if (error.response.status === 401 || error.response.status === 403) {
          await logOutUser()
          navigate('/login')
        }
        return Promise.reject(error)
      }
    )
  }, [logOutUser,navigate])

  return axiosSecure
}

export default useAxiosSecure