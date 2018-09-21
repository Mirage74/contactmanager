import {GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT} from '../actions/types'
import axios from 'axios'
import pathServer from "../Components/backendpath"

const initialState = async () => {
  axios.defaults.baseURL = pathServer + 'users'
  return await axios.get()
}

export default function (state = initialState, action)
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload
        )
      }

    case ADD_CONTACT:
      return {
        ...state,
        contacts : [action.payload, ...state.contacts]
        )
      }

  }

  


