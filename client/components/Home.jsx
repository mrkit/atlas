import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Home extends Component  {
  state = {
    topics: []
  }
  
  componentDidMount(){
    axios.get('/api/topics')
    .then(res => res.data)
    .then(topics =>this.setState({ topics }))
    .catch(err => console.log(`Axios GET /topics error ${err.message}`));
  }

  handleSubmit = e => {
    e.preventDefault();
    
    
  }
  
  render(){
    const { topics } = this.state;
    const { handleSubmit } = this;
    
    return (
      <Fragment> 
        <form onSubmit={handleSubmit}>
          <input type='topic' placeholder='Add topic...' autoFocus/>
          <button>Submit</button>
        </form>
        <ul className='topics'>
        {
          this.state.topics.map(topic => <li key={topic.id}><h1>{topic.name}</h1></li>)
        }
        </ul>
      
      </Fragment>
    )
  }
}

export default Home