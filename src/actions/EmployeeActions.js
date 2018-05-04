import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
 } from './types'

 // Add a new employee:
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

// Reset the from properties:
export const employeeCreate = ({ name, phone, shift}) => {
    // currently logged in user:
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE })
                Actions.pop({ type: 'reset' })
            })
    }
}

// Fetching the data:
export const emmployeesFetch = () => {
    const currentUser = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
            })
    }
}