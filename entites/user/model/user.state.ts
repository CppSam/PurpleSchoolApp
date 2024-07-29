import { atom } from 'jotai';
import { User } from './user.model';

export interface UserState {
    profile: User;
    loading: boolean;
    error: string;
}

export const profileAtom = atom<UserState>({
    profile: {
        id: '0',
        name: 'Sam',
        surname: 'Krysmkiy',
        icon: '',
    },
    loading: false,
    error: '',
});
