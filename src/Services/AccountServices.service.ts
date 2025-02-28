// import { AxiosService } from '../AxiosSetup';
import { EP_URL } from "../Common/Endpoint";
import {
  IGetAccountDataEntity,
  IUpsertAccountDataEntity,
  IGetUserDataEntity,
  IGetSchoolsListEntity,
  IGetSchoolsByIDsEntity,
  IUpsertUserDetailsDataEntity,
  IDeleteUserDataEntity,
  IUpsertSchoolDataEntity,
  IGetStudentsDataEntity,
} from "../Modules/MasterData/MasterDataUtils";
import { PostMethod, common } from "../Common/AxiosSetup";

//Account

export const GetAccoutDataService = async (
  GetAccoutDataEntity: IGetAccountDataEntity,
  setContext: any
) => {
  return await PostMethod(
    EP_URL,
    "MasterData/GetAccountList",
    GetAccoutDataEntity,
    setContext
  );
};

export const UpserAccoutDataService = async (
  UpsertAccountDataEntity: IUpsertAccountDataEntity,
  setContext: any
) => {
  return await PostMethod(
    EP_URL,
    "MasterData/UpsertAccountDetails",
    UpsertAccountDataEntity,
    setContext
  );
};

//User
export const GetAccoutDropdownService = async (
  GetAccoutDataEntity: IGetAccountDataEntity
) => {
  return await common(EP_URL, "MasterData/GetAccountList", GetAccoutDataEntity);
};

export const GetUserTypesService = async () => {
  return await common(EP_URL, "MasterData/GetUserTypes", "");
};

export const GetSchoolsDropdownService = async (GetSchoolsListEntity: any) => {
  return await common(
    EP_URL,
    "MasterData/GetSchoolsList",
    GetSchoolsListEntity
  );
};

export const GetSchoolsByIDsService = async (
  GetSchoolsByIDsEntity: IGetSchoolsByIDsEntity
) => {
  return await common(
    EP_URL,
    "MasterData/GetSchoolsByIDs",
    GetSchoolsByIDsEntity
  );
};

export const GetUserDataService = async (
  GetUserDataEntity: IGetUserDataEntity,
  setContext: any
) => {
  return await PostMethod(
    EP_URL,
    "MasterData/GetUsersList",
    GetUserDataEntity,
    setContext
  );
};

export const UpsertUserDataService = async (
  UpsertUserDetailsDataEntity: IUpsertUserDetailsDataEntity,
  setContext: any
) => {
  return await PostMethod(
    EP_URL,
    "MasterData/UpsertUserDetails",
    UpsertUserDetailsDataEntity,
    setContext
  );
};

export const DeleteUserDataService = async (
  DeleteUserDataEntity: IDeleteUserDataEntity,
  setContext: any
) => {
  return await PostMethod(
    EP_URL,
    "MasterData/DeleteUserDetails",
    DeleteUserDataEntity,
    setContext
  );
};

export const UpsertSchoolDataService = async (
  UpsertSchoolDataEntity: IUpsertSchoolDataEntity,
  setContext: any
) => {
  return await PostMethod(
    EP_URL,
    "MasterData/UpsertSchoolDetails",
    UpsertSchoolDataEntity,
    setContext
  );
};

export const GetStudentsDataService = async (
  GetStudentsDataEntity: IGetStudentsDataEntity,
  setContext: any
) => {
  return await PostMethod(
    EP_URL,
    "MasterData/GetStudentDetails",
    GetStudentsDataEntity,
    setContext
  );
};
