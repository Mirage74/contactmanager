import React, {Component} from 'react'

class Test extends Component {

  state = {
    title: '',
    body: ''
  }
  componentDidMount() {
    console.log('Test C Did M')
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }))
  }


  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("nextProps : ", nextProps)
  //   console.log("prevState : ", prevState)
  //   console.log("getDer")
  //
  //   return {
  //     test_1: "Something"
  //   }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate")
  //   return 777;
  // }
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('C Did Update')
  //   console.log('prevProps : ', prevProps)
  //   console.log('prevState : ', prevState)
  //   console.log('snapshot : ', snapshot)
  // }

  render() {
    const {title, body} = this.state
    return (
      <div>
        <h1>{title}</h1>
          <p>{body}</p>
      </div>
    )
  }
}

export  default Test