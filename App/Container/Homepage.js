import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import GeneralAction from '../Redux/GeneralRedux'


const Homepage = () => {
    const dispatch = useDispatch()
    const generalData = useSelector(state => state.general)
    useEffect(() => {
        // dispatch(GeneralAction.generalRequest())
    }, [])
    console.log('ini ya general data', generalData)
    return (
        <View style={{ backgroundColor: 'red', flex: 1 }}>
            <Text>Homepage</Text>
        </View>
    )
}

export default Homepage