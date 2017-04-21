import { httpServices, createAction } from 'http-services'
import * as storageService from '../services/storage'
import * as types from './constant'
import config from '../config'

const { domain, apiPath, version } = config
const HttpServices = new httpServices(domain, apiPath)

// 进入APP
export function intoApp () {
  storageService.setItem('system', { version })
  return createAction(types.ROOT_INTO_APPLICATION, null)
}

// 初始化APP
export function initialApp () {
  return dispatch => {
    //storageService.clear()
    dispatch(createAction(types.ROOT_INITIAL_BEGIN, null))
    setTimeout( () => {
      return new Promise(async (resolve, reject) => {
        try {
          const system = await storageService.getItem('system')
          const auth = await storageService.getItem('auth')
          const accesstoken = auth && auth.accesskey || undefined
          const result = await HttpServices.POST(`/accesstoken`, { accesstoken })
          dispatch(createAction(types.ROOT_INITIAL_SUCCESS, { ...result, system }))
          resolve(result)
        } catch (error) {
          dispatch(createAction(types.ROOT_INITIAL_FAILURE, error))
          //reject(error)
        }
      })
    }, 500)
  }
}