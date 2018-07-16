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
    
    e.target.topicName.value = ''
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
        <ul className='topicsContainer'>
        {
          this.state.topics.map(topic => (
            <Link to={`/${topic.name}`} key={topic.id}>
              <li>
                <h1>{topic.name}</h1>
              </li>
            </Link>)
          )
          
        }
        </ul>
      
      </Fragment>
    )
  }
}

export default Home