import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCLyu6IdkDtZsBeADD2xCV_-SjkSG2Lzas",
            authDomain: "manager-50627.firebaseapp.com",
            databaseURL: "https://manager-50627.firebaseio.com",
            projectId: "manager-50627",
            storageBucket: "manager-50627.appspot.com",
            messagingSenderId: "188094954957"
          }
          firebase.initializeApp(config)
    }

    render() {
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        )
    }
}

export default App