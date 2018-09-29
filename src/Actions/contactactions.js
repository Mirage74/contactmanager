import {GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT} from './types'
import pathServer from "../Components/backendpath"
import axios from 'axios'


export const getContacts = () => async dispatch => {
  axios.defaults.baseURL = pathServer + 'users'
  const res = await axios.get()
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  })
}

export const getContact = id => async dispatch => {
  const res = await axios.get(
    pathServer + `users/${id}`
  )
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  })
  return(res.data)
}

export const deleteContact = id => async dispatch => {
  await axios.delete(pathServer + `users/${id}`)
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  })
}

export const addContact = contact => async dispatch => {
  //console.log("contact: ", contact)

  const configAx = {
    data: contact
  }
  const res = await axios.post(
    pathServer + 'users',
    configAx
  )
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  })
}

export const updateContact = contact => async dispatch => {
  //console.log("update, contact", contact)
  const configAx = {
    method: 'put',
    data: contact
  }
  const res = await axios.put(
    pathServer + `users/${contact._id}`,
    configAx
  )
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  })
}
