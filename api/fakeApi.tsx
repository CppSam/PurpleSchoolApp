export interface ICredentials {
    login: string;
    password: string;
}

export const login = (credentials: ICredentials) => {
    return new Promise((res) => setTimeout(res, 1500));
};
