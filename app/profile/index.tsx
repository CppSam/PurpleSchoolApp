import { StyleSheet, Text } from 'react-native';
import SafeAreaViewUniversal from '@/components/SafeAreaViewUniversal/SafeAreaViewUniversal';
import { Link } from 'expo-router';
import { useAtom } from 'jotai';
import { profileAtom } from '@/entites/user/model/user.state';

export default function Profile() {
    const [profileState, setProfileState] = useAtom(profileAtom);

    return (
        <SafeAreaViewUniversal style={styles.container}>
            <Link href='/'>
                <Text style={styles.text}>Profile</Text>
            </Link>
            <Text style={styles.text}>{profileState.profile.name}</Text>
            <Text style={styles.text}>{profileState.profile.surname}</Text>
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
