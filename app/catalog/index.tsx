import { StyleSheet, Text } from 'react-native';
import SafeAreaViewUniversal from '@/components/SafeAreaViewUniversal/SafeAreaViewUniversal';
import { Link } from 'expo-router';

export default function Catalog() {
    return (
        <SafeAreaViewUniversal style={styles.container}>
            <Text style={styles.text}>Catalog page</Text>
            <Link href='/address'>
                <Text style={styles.text}>Address</Text>
            </Link>
            <Link href='/cart'>
                <Text style={styles.text}>Cart</Text>
            </Link>
            <Link href='/success'>
                <Text style={styles.text}>Success</Text>
            </Link>
            <Link href='/catalog/1'>
                <Text style={styles.text}>Card 1</Text>
            </Link>
            <Link href='/catalog/abc'>
                <Text style={styles.text}>Card abc</Text>
            </Link>
            <Link href='/catalog/+-+'>
                <Text style={styles.text}>Card +-+</Text>
            </Link>
            <Link href='/catalog/incorrect/dww'>
                <Text style={styles.text}>Incorrect</Text>
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
