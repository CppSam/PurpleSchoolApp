import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

const RootLayout = () => {
    const [loaded] = useFonts({
        AbrilFatface: require('../assets/fonts/AbrilFatface-Regular.ttf'),
        RobotoFlex: require('../assets/fonts/RobotoFlex-Regular.ttf'),
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <StatusBar style='light' />
            <Stack
                screenOptions={{
                    statusBarColor: 'black',
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: 'black',
                    },
                }}
            >
                <Stack.Screen name='index' />
                <Stack.Screen name='catalog/index' />
                <Stack.Screen
                    name='catalog/[catalogID]'
                    options={{
                        title: 'testInnerFolder',
                        presentation: 'modal',
                    }}
                />
                <Stack.Screen name='address' />
                <Stack.Screen name='cart' />
                <Stack.Screen name='catalog' />
            </Stack>
        </>
    );
};

export default RootLayout;
