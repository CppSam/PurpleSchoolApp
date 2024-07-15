import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform, StatusBar } from 'react-native';
import introImg from '@/assets/images/intro.png';
import { FirstButton } from '@/components/Buttons/FirstButton';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
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
        <SafeAreaView style={styles.container}>
            <Image source={introImg} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.description}>
                    <Text style={styles.title}>Один из самых вкусных кофе во вселенной!</Text>
                    <Text style={styles.subtext}>
                        Свежие зёрна, настоящая арабика и бережная обжарка
                    </Text>
                </View>
                <FirstButton title='Начать' containerStyle={styles.button} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    content: { flexGrow: 1, alignItems: 'center', justifyContent: 'space-around', gap: 16 },
    description: {
        gap: 16,
    },
    image: {
        backgroundColor: 'red',
        resizeMode: 'cover',
        height: '60%',
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: 34,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtext: {
        color: 'gray',
        fontSize: 14,
        textAlign: 'center',
    },
    button: {
        alignSelf: 'center',
        width: 200,
    },
});
