import { create } from 'zustand';

export type TToastType = 'error' | 'success' | 'warning' | 'loading';

interface IToastifyParameters {
    duration: number;
    message: string;
    type: TToastType;
}

interface IToastStore {
    data: IToastifyParameters;
    toastify: (newData: IToastifyParameters) => void;
}

export const useToastStore = create<IToastStore>()((set) => ({
    data: { duration: 3000, message: '', type: 'success' },
    toastify: (newData) => set(() => ({ data: { ...newData } })),
}));
