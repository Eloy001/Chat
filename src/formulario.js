import React from "react";

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert(' submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label><br></br>
                Comentarios: 
            <textarea placeholder="Escribe aqui" value={this.state.value} onChange={this.handleChange} />
          </label><br></br>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default EssayForm;
