import React from 'react'

export default (props) => {
  return (
    <div>
      <br/><br/><br/>
      <h5 className= "display-6">This React-Redux app use REST server, written in KoaJS (NodeJS).</h5>
      <h5 className= "display-6">Data store in MongoDB database. You can get all users list there:</h5>
      <a href="https://koa-rest-mongo.herokuapp.com/users">koa-rest-mongo.herokuapp.com/users</a>

      <h3 className= "display-6"> Server's code available there: </h3>
      <a href="https://github.com/Mirage74/contactmanager/blob/master/koaRest.zip">download koaRest.zip</a>

      <br/><br/><br/>
      <h5 className= "display-6">This app available on 2 pages, Try do changes on one page and then refresh another:</h5>
      <a href="http://www.balex.byethost17.com">balex.byethost17.com</a><br/>
      <a href="https://mirage74.github.io/contactmanager">mirage74.github.io/contactmanager</a>

      <br/><br/><br/>
      <h5 className= "display-5">By Alex Babrouski</h5>
      <h5 className= "display-5">e-mail:
        <a href="mailto:balexvicx@gmail.com">balexvicx@gmail.com</a>
      </h5>
      <h5 className= "display-5">phone: +48733195061</h5>

    </div>
  )
}