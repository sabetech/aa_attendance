import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class OfferingTithesList extends Component {
      constructor () {
        super()
        this.state = {
          offeringtithes: []
        }
      }

      componentDidMount () {
        axios.get('/api/offering_tithes').then(response => {
        	console.log(response);
          this.setState({
            offeringtithes: response.data
          })
        })
      }

      render () {
        const { offeringtithes } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>All OfferingTithes</div>
                  <div className='card-body'>
                    <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                      Send Offering or Tithe
                    </Link>
                    <ul className='list-group list-group-flush'>
                      {offeringtithes.map(offeringtithe => (
                        <Link
                          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                          to={`/${offeringtithe.id}`}
                          key={offeringtithe.id}
                        >
                          {offeringtithe.name}
                          <span className='badge badge-primary badge-pill'>
                            // {project.tasks_count}
                          </span>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    export default OfferingTithesList