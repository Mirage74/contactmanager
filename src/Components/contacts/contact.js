import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Consumer} from '../../context'
import axios from 'axios'
import pathServer from "../backendpath"


class Contact extends Component {
state = {
  showContactInfo: false
}
onDeleteClick = async  (idD, dispatch) => {

   await axios.delete(pathServer + 'users/' + this.props.contact._id)
    dispatch({type : 'DELETE_CONTACT', payload : this.props.contact._id})


}

  render() {
    //const {id, name, email, phone} = this.props.contact
    const {id, _id, name, email, phone} = this.props.contact
    const {showContactInfo} = this.state
    //console.log(this.props.children)

    return (
      <Consumer>
        {value => {
        const {dispatch} = value


          return (
            <div className="card card-body mb-3">
              <h4 align="left">
                {name}{' '}
                <i
                  onClick={() => this.setState(
                    {showContactInfo: !this.state.showContactInfo}
                  )}
                  className="fas fa-sort-down"
                  style = {{cursor: 'pointer'}}
                />
                <i className="fas fa-times"
                   style = {{cursor: 'pointer', float: 'right', color: 'red'}}
                   onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

              <Link to = {`contact/edit/${_id}`}>
                <i
                  className="fas fa-pencil-alt"
                  style = {{cursor : 'pointer', float : 'right', color : 'black', marginRight: '1rem'}}
                >
                </i>
              </Link>

              </h4>
              {showContactInfo ?
                (<ul className="list-group">
                  <li align="left" className="list-group-item">{email}</li>
                  <li align="left" className="list-group-item">{phone}</li>
                </ul>) : null}

            </div>
          )
        }}
      </Consumer>

    )
  }
}



export default Contact