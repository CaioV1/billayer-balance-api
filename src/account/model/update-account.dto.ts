import { Account } from "./account.interface";

export class UpdateAccountDto implements Account {
  id_account: string;
  name: string;
}