import { StyleSheet, Text } from 'react-native';
import SafeAreaViewUniversal from '@/components/SafeAreaViewUniversal/SafeAreaViewUniversal';
import { Link } from 'expo-router';

export default function Address() {
    return (
        <SafeAreaViewUniversal style={styles.container}>
            <Link href='/'>
                <Text style={styles.text}>Address page</Text>
            </Link>
        </SafeAreaViewUniversal>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        rowGap: 16,
    },
    text: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'RobotoFlex',
    },
});
