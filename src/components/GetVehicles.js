import React, {Component} from 'react'
import axios from 'axios'

class GetVehicles extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <button className="btn-sp btn" onClick={this.props.getVehicles}>
            Get All Vehicles
          </button>
    )}
}

export default GetVehicles