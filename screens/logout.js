import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
export default class Logout extends React.Component {
    componentDidMount(){
    firebase.auth().signOut();
    this.props.navigation.replace('Login')
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Logout Screen</Text>
        
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});