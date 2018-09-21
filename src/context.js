import React, { Component } from 'react'
import axios from 'axios'
import pathServer from "./Components/backendpath"

console.log(pathServer)
const Context = React.createContext()

const reducer = (state, action) => {


  switch(action.type) {
    case 'DELETE_CONTACT':


return {

  contacts: state.contacts.filter(
    contact => contact._id !== action.payload
  )
}


    case 'ADD_CONTACT':

      //console.log("action.payload : ", action.payload)
      return {
        contacts : [action.payload, ...state.contacts]
      }

    case 'UPDATE_CONTACT':
      return {
        contacts : state.contacts.map(contact =>
        contact._id === action.payload._id ? (contact = action.payload) : contact)

      }

    default:
      return {
        state
      }
  }
}

export class Provider extends  Component {
  state = {
    contacts: [],
    dispatch : action => this.setState(state => reducer(state, action))

    }

async componentDidMount() {
  //console.log("this.props context : ", this.props)
    axios.defaults.baseURL = pathServer + 'users'
    const res = await axios
      .get()
    this.setState({contacts: res.data})

  }



  render() {
    //console.log("this.state : ", this.state)
    return (
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export  const Consumer = Context.Consumer
