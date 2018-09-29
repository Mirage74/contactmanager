import {GET_CONTACTS, GET_CONTACT, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT} from '../Actions/types'

const initialState =  {
  contacts: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:

      return {
        ...state,
        contacts: action.payload
      }

    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
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
      }

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact._id === action.payload._id
              ? (contact = action.payload)
              : contact
        )
      };

    default:
      return state

  }
}

  


