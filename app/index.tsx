import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar, Animated } from 'react-native';
import introImg from '@/assets/images/intro.png';
import { FirstButton } from '@/components/Buttons/FirstButton';
import { Toast } from '@/components/Notifications/Toast';
import { useToastStore } from '@/components/Notifications/ToastStore';
import { router } from 'expo-router';
import { ICredentials, login } from '@/api/fakeApi';

const animatedValue = new Animated.Value(-50);
const opacityValue = animatedValue.interpolate({
    inputRange: [-50, 0],
    outputRange: [0, 1],
});

const initCredentials: ICredentials = {
    login: '',
    password: '',
};

export default function RootLayout() {
    const toastify = useToastStore((state) => state.toastify);

    const [credentials] = useState<ICredentials>(initCredentials);
    const [loading, setLoading] = useState<boolean>(false);

    const handlePressButton = () => {
        setLoading(true);
        toastify({ duration: 3000, type: 'success', message: 'Проверка связи!xxx' });
        login(credentials)
            .then(() => {
                router.navigate('/catalog');
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    };

    const viewStyles = {
        ...styles.description,
        transform: [{ translateY: animatedValue }],
        opacity: opacityValue,
    };

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={introImg} style={styles.image} />
            <View style={styles.content}>
                <Animated.View style={viewStyles}>
                    <Text style={styles.title}>Один из самых вкусных кофе во вселенной!</Text>
                    <Text style={styles.subtext}>
                        Свежие зёрна, настоящая арабика и бережная обжарка
                    </Text>
                </Animated.View>
                <FirstButton
                    title='Начать'
                    containerStyle={styles.button}
                    onPress={handlePressButton}
                    isLoading={loading}
                />
            </View>
            <Toast />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: 'relative',
    },
    content: { flexGrow: 1, alignItems: 'center', justifyContent: 'space-around', gap: 16 },
    description: {
        gap: 16,
    },
    image: {
        backgroundColor: 'black',
        resizeMode: 'cover',
        height: '60%',
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: 34,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'RobotoFlex',
    },
    subtext: {
        color: 'gray',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'RobotoFlex',
    },
    button: {
        alignSelf: 'center',
        width: 200,
    },
});
