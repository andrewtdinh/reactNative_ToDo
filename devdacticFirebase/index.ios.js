var React = require('react-native');
var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} = React;

var Firebase = require('firebase');

class devdacticFirebase extends Component {
  // Your App Code
  constructor(props) {
    super(props);
    var myFirebaseRef = new Firebase('https://.firebaseio.com');

    myFirebaseRef.set({
      title: "Hello World!",
      author: "Simon",
      location: {
        city: "Muenster",
        state: "Germany",
        zip: 48155
      }
    });
  }
}

var styles = StyleSheet.create({
  // Your App Style
});

AppRegistry.registerComponent('devdacticFirebase', () => devdacticFirebase);
