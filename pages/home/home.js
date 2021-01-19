import React,{useEffect} from 'react'
import {View,StyleSheet} from 'react-native'
import Header from '../../components/table/table'

const Home=(props)=>{
    let { navigation } = props;

    const Styles=StyleSheet.create({
        Container:{
            width:"100%",
            height:"100%"
        }
    })

    return(
        <View style={Styles.Container}>
            <Header navigation={navigation} />
        </View>
    )
} 
export default Home;