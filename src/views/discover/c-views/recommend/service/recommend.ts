import ysRequest from '@/services'
export function getAnything() {
  return ysRequest.get({
    url: '/json'
  })
}
