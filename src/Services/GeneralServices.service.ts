import { EP_URL } from "../Common/Endpoint";
import { loginMethod } from "../Common/AxiosSetup";

export const CheckValidUserService = async (LoginEntity: any) => {
  return await loginMethod(EP_URL, "Identity/Login", LoginEntity);
};
