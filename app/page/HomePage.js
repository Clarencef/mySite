import React,{Component} from 'react';
import Button from 'components/Button/Button';
// import firebase from '../data';

// var db = firebase.database();

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hi, guys'
    };
    this.testclick = this.testclick.bind(this);
  }

  componentDidMount() {
    // firebase.database().ref().child('test').child("title").once('value', snap => {
    //   this.setState({
    //     title: snap.val()
    //   });
    // });
  }

  testclick() {
    // firebase.database().ref('test/').set({
    //   title: "go set"
    // });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button type="" onClick={this.testclick}></button>
        <Button
          buttonType="normal"
          href="javascript:void(0)"
          customClass="home"
          />
      </div>  
    );
  }
}

export default HomePage;

