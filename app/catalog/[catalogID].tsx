import { StyleSheet, Text } from 'react-native';
import SafeAreaViewUniversal from '@/components/SafeAreaViewUniversal/SafeAreaViewUniversal';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Catalog() {
    const { catalogID } = useLocalSearchParams();

    return (
        <SafeAreaViewUniversal style={styles.container}>
            <Link href='/catalog'>
                <Text style={styles.text}>Catalog Card – {catalogID}</Text>
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
    },
    text: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'RobotoFlex',
    },
});
