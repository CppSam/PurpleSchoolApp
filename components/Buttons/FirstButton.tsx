import { ButtonProps, Pressable, PressableProps, StyleSheet, Text } from 'react-native';

export interface FirstButtonProps extends PressableProps {
    title: string;
    containerStyle?: any;
    textStyle?: any;
}

export const FirstButton = (props: FirstButtonProps) => {
    const { title, containerStyle, textStyle } = props;

    return (
        <Pressable style={{ ...styles.buttonContainer, ...containerStyle }} {...props}>
            <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
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
    },
});
