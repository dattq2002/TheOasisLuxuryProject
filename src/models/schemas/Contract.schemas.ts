import { ObjectId } from 'mongodb';

interface ContractType {
  _id?: ObjectId;
  contract_name: string;
  insert_date?: Date;
  update_date?: Date;
  deflag?: boolean;
  user_id: ObjectId;
  url_image?: string;
  sign_contract?: boolean;
}

export default class Contract {
  _id?: ObjectId;
  contract_name: string;
  insert_date: Date;
  update_date: Date;
  deflag: boolean;
  user_id: ObjectId;
  url_image: string;
  sign_contract: boolean;
  constructor(contract: ContractType) {
    this._id = contract._id;
    this.contract_name = contract.contract_name;
    this.insert_date = contract.insert_date || new Date();
    this.update_date = contract.update_date || new Date();
    this.deflag = contract.deflag || false;
    this.user_id = contract.user_id;
    this.url_image = contract.url_image || '';
    this.sign_contract = contract.sign_contract || false;
  }
}
