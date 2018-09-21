import React, { Component } from 'react'
import {Consumer} from '../../context'
import TextInputGroup from '../layout/textinputgroup'
import pathServer from "../backendpath"
import axios from 'axios'

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  async componentDidMount() {
    //console.log("this.props.match.params : ", this.props.match.params)
    const {_id} = this.props.match.params
    const res = await axios.get(pathServer + `users/${_id}`)
    const contact = res.data
    //console.log(contact)
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    })
  }

  onSubmit = async (dispatch, e) => {

    e.preventDefault()

    const {id, name, email, phone} = this.state

    //Check For Errors
    if (name === '') {
      this.setState({errors: {name: 'Name is required'}})
      return
    }
    if (email === '') {
      this.setState({errors: {email: 'Email is required'}})
      return
    }
    if (phone === '') {
      this.setState({errors: {phone: 'Phone is required'}})
      return
    }


  const {_id} = this.props.match.params

  const updContact = {
      id,
      name,
      email,
      phone
    }
    const configAx = {
      method: 'put',
      data: updContact
    }

    const res = await axios.put(pathServer + `users/${_id}`, configAx)
    //console.log("res edit : ", res.data)
    //console.log("res data id : ", res.data._id)

    dispatch({type: 'UPDATE_CONTACT', payload: res.data})



    //Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })

    this.props.history.push('/')
  }

  onChange = (e) => this.setState({ [e.target.name] : e.target.value})



  render() {
    const {name, email, phone, errors} = this.state
    return (
      <Consumer>
        {value =>{
          const {dispatch} = value
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input type="submit" value="Update Contact"
                         className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default EditContact