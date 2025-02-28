export const ILoginData = {
  LoginUserID: 1,
  LoginUserName: "",
  LoginAccountID: 1,
  LoginUserTypeID: 1,
  Spin: false,
  Permissions: {
    IsAdmin: false,
    IsUser: true,
    IsStudent: false,
  },
};
export interface ILoginDataDTO {
  LoginUserID: number;
  LoginUserName: string;
  LoginAccountID: number;
  LoginUserTypeID: number;
  Spin: boolean;
  Permissions: {
    IsAdmin: boolean;
    IsUser: boolean;
    IsStudent: boolean;
  };
}
