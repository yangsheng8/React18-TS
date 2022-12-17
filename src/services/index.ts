import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './config/index'
const ysRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      return config
    }
  }
})
export default ysRequest
