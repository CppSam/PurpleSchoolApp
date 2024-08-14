import SafeAreaViewUniversal from '@/components/SafeAreaViewUniversal/SafeAreaViewUniversal';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const UnmatchedRoute = () => {
    return (
        <SafeAreaViewUniversal style={styles.container}>
            <Link href='/'>
                <Text style={styles.text}>Не нашли, вернуться на главную!</Text>
            </Link>
        </SafeAreaViewUniversal>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'RobotoFlex',
    },
});

export default UnmatchedRoute;
