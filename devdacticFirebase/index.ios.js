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
    var myFirebaseRef = new Firebase('https://glaring-inferno-4479.firebaseio.com/');

    this.itemsRef = myFirebaseRef.child('items');

    // myFirebaseRef.set({
    //   title: "Hello World!",
    //   author: "Simon",
    //   location: {
    //     city: "Muenster",
    //     state: "Germany",
    //     zip: 48155
    //   }
    // });
    this.state = {
      newTodo: '',
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };

    this.items = [];
  }

  componentDidMount() {
    // When a todo is added
    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
    });

    // When a todo is removed
    this.itemsRef.on('child_removed', (dataSnapshot) => {
      this.items = this.items.filter((x) => x.id !== dataSnapshot.key());
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
    });
  }
}

var styles = StyleSheet.create({
  // Your App Style
});

AppRegistry.registerComponent('devdacticFirebase', () => devdacticFirebase);
