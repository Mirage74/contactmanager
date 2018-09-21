import {GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT} from './types'
import axios from 'axios'
import pathServer from "../Components/backendpath"

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
}

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(pathServer + `users/${id}`)
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  }
}

export const addContact = contact => async dispatch => {
  const res = await axios.post(
    pathServer + 'users',
    contact
  )
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  })
}

export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    pathServer + `users/${contact.id}`,
    contact
  )
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  })
}
