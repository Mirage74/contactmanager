import React, { Component } from 'react'
import Contact from './contact'
import  {connect} from 'react-redux'
import PropTypes from 'prop-types'
//import axios from 'axios'
//import pathServer from "../backendpath"
import {getContacts} from '../../Actions/contactactions'



class Contacts extends Component {

  // state = {
  //   contacts: []
  // }

  // async componentDidMount() {
  //   axios.defaults.baseURL = pathServer + 'users'
  //   const res = await axios.get()
  //   this.setState({contacts: res.data})
  // }

 componentDidMount() {
   this.props.getContacts()
   //this.mapDispatchToProps
   }


render() {
  const {contacts} = this.props
  //const {contacts} = this.state

  return (
    <React.Fragment>
      <h1 className="display-4 mb-2">
      <span className="text-danger">
      Contact
        </span>List
          </h1>
            {contacts.map(cnt => (
              <Contact
                key = {cnt._id}
                contact= {cnt}
              />
            ))}
    </React.Fragment>
    )
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const  mapStateToProps = (state) => ({
  contacts: state.contact.contacts
})


export default connect(mapStateToProps, {getContacts}) (Contacts)
//export default Contacts