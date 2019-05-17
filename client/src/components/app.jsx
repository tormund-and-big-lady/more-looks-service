import React from 'react';
import axios from 'axios';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get()
  }

  get() {
    axios
      .get('/api/api')
      .then(data => this.setState({
        product: data.data
      }))
  }

  render() {
    return (
      <div>
        <List product={this.state.product}/>
        {/* <img src={this.state.product.imageurl} /> */}
      </div>
    )
  }
}

export default App;