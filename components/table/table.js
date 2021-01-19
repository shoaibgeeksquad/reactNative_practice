import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import tailwind from 'tailwind-rn';
import { useSelector, useDispatch } from "react-redux";
import { getUsersLists, DeleteUser } from '../../store/actions/getUsers'

const Header = (props) => {
    let { navigation } = props;
    const Styles = StyleSheet.create({
        Container: {
            width: "100%",
            height: "100%",
        },
        Logo: {
            fontSize: RFPercentage(3),
            color: "white",
            paddingTop: 35,
            paddingBottom: 35,
            textAlign: "center"
        },
    })

    const userList = useSelector(state => state.usersRecord);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsersLists(dispatch);
    }, [])

    // const [userList, setUserList] = useState(TableRecord);
    // const deleteRecord = (id) => {
    //     let data = userList && userList.length !== 0 && userList.filter(single => single.id !== id)
    //     setUserList(data);
    // }

    const searchRecord = (value) => {
        console.log("value", value);
        if (value) {
            let duplicateRecord = userList.users;
            let data = duplicateRecord.filter(single => single.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
            dispatch({
                type: "SET_USERS_DATA",
                payload: data
            })
        }
        else if (value.length === 0) {
            getUsersLists(dispatch);
        }
    }


    return (
        <View style={Styles.Container}>
            {/* logo */}
            <LinearGradient style={tailwind('h-full')} colors={["#000000", "#424242"]}>
                {/* heading */}
                <View>
                    <Text style={Styles.Logo}>Total Users Record</Text>
                </View>
                <View style={tailwind('flex-row justify-center')}>
                    <TextInput
                        onChangeText={value => searchRecord(value)}
                        placeholder="Search"
                        style={{ height: 40, borderColor: '#fff', borderBottomWidth: 1, padding: 5, width: "95%", backgroundColor: "#fff", borderRadius: 10 }} />

                </View>
                <View style={tailwind('px-3 py-1')}>
                    {/* table headings */}
                    <View style={tailwind('flex-row text-white py-3')}>
                        <Text style={tailwind('w-2/12 text-white')}>Sr.No</Text>
                        <Text style={tailwind('w-6/12 text-white')}>Name</Text>
                        <Text style={tailwind('w-4/12 text-white')}>Actions</Text>
                    </View>
                    {/* table body */}
                    {userList && userList.users && userList.users.length !== 0 ? userList.users.map((item, index) =>
                        <View style={tailwind('flex-row text-white py-1')} key={index}>
                            <Text style={tailwind('w-2/12 text-white')}>{index + 1}</Text>
                            <Text style={tailwind('w-6/12 text-white')}>{item.name}</Text>
                            {/* <Text style={tailwind('w-4/12 text-white')}>{item.address && item.address.city}</Text> */}
                            <Text style={tailwind('w-2/12 ')}><TouchableOpacity onPress={() => DeleteUser(dispatch, item.id)}><Text style={tailwind('w-3/12 text-white')}>Delete</Text></TouchableOpacity></Text>
                        </View>
                    ) :
                        <View style={tailwind('flex-row text-white py-1')}>
                            <Text style={tailwind('flex-1 text-white text-center py-2')}>No records</Text>
                        </View>
                    }
                </View>
                <View style={{ padding : 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={tailwind('bg-black text-white mt-2 p-3')}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}
export default Header;