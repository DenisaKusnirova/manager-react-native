import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App