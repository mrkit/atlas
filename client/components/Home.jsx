import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const topicName = e.target.topicName.value;
    axios.post('/api/topics',{ name: topicName })
    .then(res => res.data)
    .then(topic => this.setState({ topics: [...this.state.topics, topic] }))
    .catch(err => console.log(`Axios POST /topics error ${err.message}`));
  }
  
  render(){
    const { topics } = this.state;
    const { handleSubmit } = this;
    
    return (
      <Fragment> 
        <form onSubmit={handleSubmit}>
          <input type='text' name='topicName' placeholder='Add topic...' autoFocus/>
          <button>Submit</button>
        </form>
        <ul className='topics'>
        {
          this.state.topics.map(topic => (
            <li key={topic.id}>
              <h1><Link to='/{topic.name}'>{topic.name}</Link></h1>
            </li>)
          )
          
        }
        </ul>
      
      </Fragment>
    )
  }
}

export default Home