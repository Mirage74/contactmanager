import React, { Component } from 'react'
import Contact from './contact'
import {Consumer} from '../../context'

class Contacts extends Component {


  render() {
    return (
      <Consumer>

        {value => {
          const {contacts} = value
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">
                  Contact
                </span>List

              </h1>
              <script>
                console.log("fff")
              </script>
              {contacts.map(cnt => (
                <Contact
                  key = {cnt._id}
                  contact= {cnt}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Contacts