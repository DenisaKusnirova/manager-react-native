import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, Button } from './common'
import employeeForm from './EmployeeForm'
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButonPress() {
        const { name, phone, shift } = this.props

        this.props.employeeCreate({ name, phone, shift : shift || 'Monday' })
    }

    render () {        
        return (
            <Card>
                <EmployeeForm  {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm

    return { name, phone, shift }
}

export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeCreate
})(EmployeeCreate)