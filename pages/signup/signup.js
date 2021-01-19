import React from 'react'
import SignupComponent from '../../components/signup/signup'

const SignUp = (props) => {
    let { navigation } = props;
    return (
        <>
            <SignupComponent navigation={navigation}/>
        </>
    )
}
export default SignUp;          