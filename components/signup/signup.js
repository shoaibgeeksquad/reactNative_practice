import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn';

const Signup = (props) => {
    let { navigation } = props;
    return (
        <View style={{ padding : 10 }}>
            <Text>SignUp Page</Text>
            <View >
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text style={tailwind('bg-black text-white p-3 mt-2')}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Signup;