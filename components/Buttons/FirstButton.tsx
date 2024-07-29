import {
    ActivityIndicator,
    Animated,
    GestureResponderEvent,
    Pressable,
    PressableProps,
    StyleSheet,
    Text,
} from 'react-native';

export interface FirstButtonProps extends PressableProps {
    title: string;
    containerStyle?: any;
    textStyle?: any;
    isLoading?: boolean;
}

const animatedValue = new Animated.Value(120);
const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 120],
    outputRange: ['#A76237', '#C67C4E'],
});

export const FirstButton = (props: FirstButtonProps) => {
    const { title, containerStyle, textStyle, onPressIn, onPressOut, isLoading } = props;

    const handlePressIn = (event: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
        onPressIn ? onPressIn(event) : null;
    };

    const handlePressOut = (event: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 120,
            duration: 200,
            useNativeDriver: true,
        }).start();
        onPressOut ? onPressOut(event) : null;
    };

    const containerStyles = { ...styles.buttonContainer, ...containerStyle, backgroundColor };

    const textStyles = { ...styles.buttonText, ...textStyle };

    return (
        <Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={containerStyles}>
                {isLoading ? (
                    <ActivityIndicator color='white' />
                ) : (
                    <Text style={textStyles}>{title}</Text>
                )}
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#C67C4E',
        padding: 16,
        borderRadius: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
        fontFamily: 'RobotoFlex',
    },
});
