import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    FirstName: false,
    LastName: false,
  }

  showFirstName = () => {
    this.setState(prevState => ({FirstName: !prevState.FirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({LastName: !prevState.LastName}))
  }

  render() {
    const {FirstName, LastName} = this.state
    return (
      <div className="bg-con">
        <h1 className="heading">Show/Hide</h1>
        <div className="con">
          <div className="name-con">
            <button className="btn" onClick={this.showFirstName} type="button">
              Show/Hide Firstname
            </button>
            {FirstName && <p className="card-name">Joe</p>}
          </div>
          <div className="name-con">
            <button type="button" className="btn" onClick={this.showLastName}>
              Show/Hide Lastname
            </button>
            {LastName && <p className="card-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
