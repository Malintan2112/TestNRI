import React from 'react'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'
import Colors from '../Constants/Colors'
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window')


/**
 *
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.dir
 * 
 *
 */
export default Header = ({ dir, title }) => {
    // const navigation = useNavigation()
    return (
        <TouchableOpacity style={localStyles.containerBack} onPress={() => {
            // navigation.pop()
        }}>
            <Animatable.View animation={'slideInRight'} style={localStyles.containerBackRow}>
                <View style={localStyles.btnBack} >
                    <Icon name="chevron-left" style={localStyles.iconChevronBack} />
                </View>
                <View style={localStyles.containerBackRowHalfRight}>
                    <Text style={localStyles.dirText} numberOfLines={1}>{dir ? dir : 'Search Page'}</Text>
                    <Text style={localStyles.titleText}>{title}</Text>
                </View>
            </Animatable.View>
        </TouchableOpacity>
    )
}

const localStyles = StyleSheet.create({
    defaultBackground: {
        backgroundColor: Colors.WHITE_COLOR,
        height: '100%',
        width: '100%'
    },
    containerBack: {
        width: '100%',
        backgroundColor: Colors.WHITE_COLOR,
        paddingVertical: 10
    },
    containerBackRow: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    btnBack: {
        width: 45,
        elevation: 5,
        height: 45,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.WHITE_COLOR
    },
    iconChevronBack: {
        fontSize: 15,
        color: Colors.BLACK_COLOR,
        marginRight: 5,
    },
    containerBackRowHalfRight: {
        width: width * 0.8,
        marginLeft: 10
    },
    dirText: {
        fontSize: 12,
        color: Colors.BLACK_COLOR,
        fontWeight: "800",
        width: '70%'
    },
    titleText: {
        fontSize: 20,
        color: Colors.BLACK_COLOR,
        fontWeight: "bold",
        marginTop: -5
    }
})