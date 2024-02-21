// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(p => ({
        speed: p.speed + 10,
      }))
    }
  }

  ApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(p => ({
        speed: p.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <div>
          <h1>SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <p className="para1"> Speed is {speed}mph</p>
          <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button type="button" className="b1" onClick={this.Accelerate}>
              Accelerate
            </button>
            <button type="button" className="b2" onClick={this.ApplyBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
