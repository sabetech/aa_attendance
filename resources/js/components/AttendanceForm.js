import axios from 'axios'
import React, { Component } from 'react'
import Async, { makeAsyncSelect } from 'react-select/async';

class AttendanceForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      person_name: '',
      attendance_date: '',
      tv_or_internet:'',
      inputValue:'',
      errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
    
    const flow_source = {
        Tv: 'Tv', 
        Online: 'Online'
    }

}

  handleFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewProject (event) {
    event.preventDefault()

    const { history } = this.props

    const attendance = {
      person_name: this.state.person_name,
      
      attendance_date: this.state.attendance_date,
      tv_or_internet: this.state.tv_or_internet,
    }

    axios.post('/api/post_attendance', attendance)
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

  //const names = 

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
              <div className='card-header'>Attendance</div>
              <div className='card-body'>
                <form onSubmit={this.handleCreateNewProject}>
                  <div className='form-group'>
                    <label htmlFor='person_name'>Name</label>
                    <input
                      id='person_name'
                      type='text'
                      className={`form-control ${this.hasErrorFor('person_name') ? 'is-invalid' : ''}`}
                      name='person_name'
                      value={this.state.person_name}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('person_name')}
                  </div>

                  <div className='form-group'>
                    <pre>Name: "{this.state.inputValue}"</pre>
                    <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={this.handleInputChange}
                    />
                  </div>  

                  <div className='form-group'>
                    <label htmlFor='attendance_date'>Date</label>
                    <input
                      id='attendance_date'
                      className={`form-control ${this.hasErrorFor('attendance_date') ? 'is-invalid' : ''} attendance_date`}
                      name='attendance_date'
                      value={this.state.attendance_date}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='tv_or_online'>TV or Online</label>
                    <select name='tv_or_online' value={this.state.value} onChange={this.handleChange} className={`form-control`}>
                        <option value="Tv">TV</option>
                        <option value="Online">Online</option>
                    </select>
                  </div>
                  <button className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AttendanceForm