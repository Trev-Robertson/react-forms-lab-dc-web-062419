import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  updateTweetValue = (event) =>{
    this.setState({
        value: event.target.value
      })
  }

  charactersLeft = () => {
    return this.props.maxChars -this.state.value.length
  }

  render() {
 
    return (
      <div>
        <p><strong>Your message:</strong></p>
        <textarea type="text" name="message" id="message" value={this.state.value} onChange={(event) => this.updateTweetValue(event)} />
        <p>{this.charactersLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
