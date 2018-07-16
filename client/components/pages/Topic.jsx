import React, { Component } from 'react';
import axios from 'axios';

class Topic extends Component {
	state = {
      topicName: this.props.match.params.topic,
      content: {}
	}
    
    componentDidMount(){
      const { topicName } = this.state;
      
      axios.get(`/api/topics/${topicName}`)
      .then(res => res.data)
      .then(topic => console.log('This is the topic', topic))
      .catch(err => console.log(`Axios GET :topic Error ${err.message}`));
    }

	render (){
      console.log('Props', this.props)
      const { topicName } = this.state;
		return(
			<div className='topic'>
				<h1>{topicName}</h1>
				<section>
                  <aside>
                    <ul>
                      
                    </ul>
                  </aside>
                  <article>
                    <h2></h2>
                    <div>
                      <div></div>
                      <textarea className="editor"></textarea>
                    </div>
                  </article>
				</section>
			</div>
		)
	}
}

export default Topic;