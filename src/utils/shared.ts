let userInfo = '박영인' as string;

export const getUserInfo = () => {
 return userInfo;
}
export const setUserInfo = (value: string) => {
    userInfo = value;
}