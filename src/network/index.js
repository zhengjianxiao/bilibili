import axios from 'axios'

//直接return instance就是返回一个promise

  
    const http = axios.create({
      baseURL: 'http://112.74.99.5:3000/web/api',
      timeout: 5000
    })
  export default http