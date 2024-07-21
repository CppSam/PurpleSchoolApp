import { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, ViewProps } from 'react-native';

interface ISafeAreaViewUniversalProps extends ViewProps {}

const SafeAreaViewUniversal = (props: ISafeAreaViewUniversalProps) => {
    const { children } = props;

    return (
        <SafeAreaView style={styles.component} {...props}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    component: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default SafeAreaViewUniversal;
