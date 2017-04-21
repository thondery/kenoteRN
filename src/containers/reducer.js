import { createReducer, statusToError, getStatusError } from 'http-services'
import * as types from './constant'
import config from '../config'

const initState = {
  isWelcome: true,
  initialPending: false,
  initialError: -1,
  initialMessage: null,
  useAuth: null
}

const ACTION_HANDLERS = {
  [types.ROOT_INTO_APPLICATION]: (state, action) => {
    return {
      ...state,
      isWelcome: false
    }
  },
  [types.ROOT_INITIAL_BEGIN]: (state, action) => {
    return {
      ...state,
      initialPending: true,
      initialError: -1,
      initialMessage: null,
      isWelcome: false
    }
  },
  [types.ROOT_INITIAL_SUCCESS]: (state, action) => {
    let { payload } = action
    let { data, status, system } = payload
    return {
      ...state,
      ...statusToError(payload, 'initialError', 'initialMessage'),
      initialPending: false,
      useAuth: data ? data.user : null,
      isWelcome: !(system && system.version === config.version)
    }
  },
  [types.ROOT_INITIAL_FAILURE]: (state, action) => {
    let { error } = action
    let status = getStatusError(error)
    return {
      ...state,
      ...statusToError({status}, 'initialError', 'initialMessage'),
      initialPending: false
    }
  },
}

export default (state = initState, action) => createReducer(state, action, ACTION_HANDLERS)