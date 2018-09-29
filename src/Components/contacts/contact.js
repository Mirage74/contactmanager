import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteContact} from '../../Actions/contactactions'

class Contact extends Component {
state = {
  showContactInfo: false
}

onDeleteClick = MyID => {
  this.props.deleteContact(MyID);
}

  render() {
    //const {id, _id, name, email, phone} = this.props.contact
    const {_id, name, email, phone} = this.props.contact
    const {showContactInfo} = this.state

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
            onClick={this.onDeleteClick.bind(this, _id)}
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
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}


export default connect(
  null,
  {deleteContact}
)(Contact)
