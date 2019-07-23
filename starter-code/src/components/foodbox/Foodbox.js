import React, {Component} from 'react';

class Foodbox extends Component {
  
  constructor(props){
      super(props)
      this.state = {}
  }

  render() {


    return (

      <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.theimage} alt=""/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.thename}</strong> <br />
          <small>{this.props.thecalories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            // value={this.props.thequantity}
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>


    )// end of return
  }// end of render
}// end of class

export default Foodbox;

