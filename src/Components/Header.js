import { StyleSheet, View, Text } from "react-native";
import Constants from 'expo-constants';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>My To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        zIndex: 5
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
        color: '#141414'
    }
})