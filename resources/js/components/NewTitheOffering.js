import axios from 'axios'
import React, { Component } from 'react'

class NewTitheOffering extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mtn_momo_number: '',
      destination_momo_number: '',
      tithe_date:'',
      amount: 0,
      errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
  }

  handleFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewProject (event) {
    event.preventDefault()

    const { history } = this.props

    const momo_send = {
      mtn_momo_number: this.state.mtn_momo_number,
      destination_momo_number: this.state.description,
      tithe_date: this.state.tithe_date,
      amount: this.state.amount
    }

    axios.post('/api/offering_tithe', momo_send)
      .then(response => {
        // redirect to the homepage
        history.push('/')

      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      )
    }
  }

  render () {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>Send Offering or Tithe</div>
              <div className='card-body'>
                <form onSubmit={this.handleCreateNewProject}>
                  <div className='form-group'>
                    <label htmlFor='mtn_momo_number'>Your MOMO Phone Number</label>
                    <input
                      id='mtn_momo_number'
                      type='text'
                      className={`form-control ${this.hasErrorFor('mtn_momo_number') ? 'is-invalid' : ''}`}
                      name='mtn_momo_number'
                      value={this.state.mtn_momo_number}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('mtn_momo_number')}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='destination_momo_number'>Tithe Destination MOMO number</label>
                    <input
                      id='destination_momo_number'
                      className={`form-control ${this.hasErrorFor('destination_momo_number') ? 'is-invalid' : ''}`}
                      name='destination_momo_number'
                      value={this.state.destination_momo_number}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='amount'>Amount</label>
                    <input
                      id='amount'
                      type='number'
                      className={`form-control ${this.hasErrorFor('amount') ? 'is-invalid' : ''}`}
                      name='amount'
                      value={this.state.amount}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('description')}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='tithe_date'>Date</label>
                    <input
                      id='tithe_date'
                      className={`form-control ${this.hasErrorFor('tithe_date') ? 'is-invalid' : ''} tithe_date`}
                      name='tithe_date'
                      value={this.state.tithe_date}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <button className='btn btn-primary'>Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTitheOffering