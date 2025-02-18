import { Injectable } from '@nestjs/common';
import { Account } from './model/account.interface';
import { CreateAccountDto } from './model/create-account.dto';
import { randomUUID } from 'crypto';
import { UpdateAccountDto } from './model/update-account.dto';

@Injectable()
export class AccountService {
  private listAccounts: Account[] = [];

  public insert(createAccountDto: CreateAccountDto): Account {
    const newAccount = { id_account: randomUUID(), ...createAccountDto };
    this.listAccounts.push(newAccount);
    return newAccount;
  }

  public findAll(): Account[] {
    return this.listAccounts;
  }

  public findOne(id: string): Account | undefined {
    return this.listAccounts.find(account => account.id_account === id);
  }

  public updateOne(account: Account, updateAccountDto: UpdateAccountDto): Account {
    return Object.assign(account, updateAccountDto);
  }

  public removeOne(id: string): void {
    this.listAccounts = this.listAccounts.filter(account => account.id_account !== id);
  }
}
