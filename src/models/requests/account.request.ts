import { RoleName } from '~/constants/enum';

export interface createAccountReq {
  user_name: string;
  role_name: RoleName;
  birthday: Date;
  phone_number: string;
  email: string;
}

export interface updateAccountReq {
  user_name: string;
  role_name: RoleName;
  birthday: Date;
  phone_number: string;
  email: string;
}
