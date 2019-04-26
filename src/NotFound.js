import React, {Component} from 'react'

export default class NotFound extends Component{
  render(){
    return (
      <div className="main" role="main">
        <div className="wrapper">
          <header role="banner" className="banner">
            <h1 className="aboutHeader">Remindful</h1>
          </header>
          <section className='description'>
            <p>It looks like you're trying to reach a page that doesn't exist. Use the links above to get back on track.</p>
          </section>
        </div>
      </div>
    )
  }
}