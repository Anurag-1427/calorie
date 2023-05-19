import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-around'
    },
    profileText: {
        alignSelf: 'center', 
        fontFamily: 'Signika-Regular'
    },
    logoutBtn: {
        borderWidth: 1,
        borderColor: 'black',
        width: '70%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 24,
    },
    logoutBtnText: {
        padding: 15, 
        fontFamily: 'Signika-Regular'
    },
})

export {styles}