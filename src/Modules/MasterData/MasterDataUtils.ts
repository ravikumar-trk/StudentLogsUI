//Account
export interface IAccountRecords {
    AccountID: number;
    AccountName: string,
    AccountCode: string,
    CreatedOn:string,
    CreatedBy: string,
    UpdatedOn: string,
    UpdatedBy: string,
    IsActive:any,
    IsDelete:any
}

export const InitialEditAccountData : IAccountRecords = {
    AccountID: 0,
    AccountName: '',
    AccountCode: '',
    CreatedOn:'',
    CreatedBy: '',
    UpdatedOn: '',
    UpdatedBy: '',
    IsActive:1,
    IsDelete:0
}

export interface IGetAccountDataEntity  {
    isDropdown : number,
    accountID : number,
    prefix : string,
    loginUserID : number
    loginUserTypeID : number
}

export interface IUpsertAccountDataEntity {
  accountID : number,
  accountName : string,
  accountCode : string,
  IsActive : number
  loginUserID : number
}
//User 
export interface IAccountDropdownDataEntity  {
  AccountName : string,
  AccountID : number,
}
export const InitialAccountDropdownData =  {
  AccountName : '',
  AccountID : 0
}

export interface IUserTypesDropdownData {
  UserType ?: string,
  UserTypeID ?: number
}
export const InitialUserTypesDropdownData =  {
  UserType : '',
  UserTypeID : 0
}
export interface IGetUserDataEntity  {
  isDropdown : number,
  accountID : number,
  prefix : string,
  loginUserID : number
}
export interface IDeleteUserDataEntity  {
  UserID : number,
  LoginUserID : number
}

export interface IGetSchoolsByIDsEntity {
  accountID: number,
  schoolIDs: string
}
export interface IUserRecords {
    UserID: number;
    AccountID: number;
    AccountName: string;
    UserTypeID: number,
    UserType?: string,
    UserName: string,
    Mobile: string,
    EMail: string,
    Password:string,
    SchoolIDs: string,
    SchoolNames: string,
    CreatedOn: string,
    CreatedBy: string,
    UpdatedOn: string,
    UpdatedBy: string,
    IsActive:boolean,
    IsDelete:boolean
  }
  
  
export const InitialEditUserData:IUserRecords =  {
  UserID: 0,
  AccountID: 0,
  AccountName:'',
  UserTypeID: 0,
  UserType: '',
  UserName: '',
  Mobile: '',
  EMail: '',
  Password:'',
  SchoolIDs: '',
  SchoolNames: '',
  CreatedOn: '',
  CreatedBy: '',
  UpdatedOn: '',
  UpdatedBy: '',
  IsActive:true,
  IsDelete:false
}

//School
export interface IGetSchoolsListEntity {
  isDropdown: number,
  accountID: number,
  prefix: string
}
export interface ISchoolsDropdownData {
  SchoolID: number,
  SchoolName: string
}
export const InitialSchoolsDropdownData = {
  SchoolID: 0,
  SchoolName:''
}
export interface ISchoolRecrds {
    AccountID:number,
    AccountName:string,
    SchoolID: number,
    SchoolName: string,
    SchoolCode: string,
    Location: string,
    AddressLine1:string,
    AddressLine2:string,
    City:string,
    State:string,
    Country:string,
    ZipCode:string,
    IsActive:number
}
export const InitialEditSchoolData:ISchoolRecrds =  {
    AccountID:0,
    AccountName:'',
    SchoolID: 0,
    SchoolName: '',
    SchoolCode: '',
    Location: '',
    AddressLine1:'',
    AddressLine2:'',
    City:'',
    State:'',
    Country:'',
    ZipCode:'',
    IsActive:1
}

export interface IUpsertUserDetailsDataEntity {
    UserID : number
    UserName:string,
    AccountID : number
    UserTypeID : number
    EMail :string
    Password :string,
    SchoolIDs:string,
    IsActive : number
    LoginUserID  : number
    SchoolNames :string,
}

export interface IDeleteConfirmationDataModel { 
    display: boolean;
    DeleteMessageTitle: string;
    DeleteMessage: string;
}
export const  InitialDeleteConfirmationData : IDeleteConfirmationDataModel = { 
  display: false,
  DeleteMessageTitle: '',
  DeleteMessage: ''
}


export interface IUpsertSchoolDataEntity {
  SchoolID : number
  SchoolName :string
  SchoolCode : string
  AccountID : number
  ZipCode :string
  City :string,
  State:string,
  Country : string
  Address1  : string,
  Address2 :string,
  LoginUserID  : number
  IsActive : number
}

export interface IGetStudentsDataEntity {
  Prefix : string
  StudentID : number
	ClassID : number
	SchoolID : number
	AccountID : number
	IsDropdown : number
	LoginUserID : number
}

export interface IAddStudentsDataEntity {
  FirstName : string
  MiddleName : string
	LastName : string
	DOB : string
	AdmissionNo : string
	ClassID : number
	LoginUserID : number
}