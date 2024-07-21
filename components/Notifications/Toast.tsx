import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { TToastType, useToastStore } from './ToastStore';
import Constants from 'expo-constants';

const animatedValue = new Animated.Value(-100);

export const Toast = () => {
    const data = useToastStore((state) => state.data);

    const [isShown, setIsShown] = useState<boolean>(false);
    const isMountRef = useRef(true);

    const viewStyles = {
        ...getStyleByToastType(data.type),
        transform: [{ translateY: animatedValue }],
    };

    const handleLayout = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (isMountRef.current) {
            isMountRef.current = false;
        } else {
            setIsShown(true);
            timeoutId = setTimeout(() => {
                Animated.timing(animatedValue, {
                    toValue: -100,
                    duration: 200,
                    useNativeDriver: true,
                }).start(() => setIsShown(false));
            }, data.duration);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [data]);

    return isShown ? (
        <Animated.View style={viewStyles} onLayout={handleLayout}>
            <Text style={styles.text}>{data.message}</Text>
        </Animated.View>
    ) : null;
};

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        backgroundColor: '#eb3434',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 16,
    },
    loading: {
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        backgroundColor: '#bababa',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 16,
    },
    success: {
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        backgroundColor: '#42f572',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 16,
    },
    warning: {
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        backgroundColor: '#f5ef42',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 16,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'RobotoFlex',
    },
});

const getStyleByToastType = (type: TToastType) => {
    switch (type) {
        case 'error':
            return styles.error;
        case 'loading':
            return styles.loading;
        case 'success':
            return styles.success;
        case 'warning':
            return styles.warning;
    }
};
