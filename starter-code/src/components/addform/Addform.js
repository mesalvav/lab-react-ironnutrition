import React, {Component} from 'react';

class Addform extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return(

      <div className="modal is-clipped">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"/>
            </div>
          </div>
        </div>
        <button  className="modal-close is-large" aria-label="close" ></button>
      </div>

    )
  }

}

export default Addform;