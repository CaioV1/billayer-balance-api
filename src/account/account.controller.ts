import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Injectable, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Account } from './model/account.interface';
import { AccountService } from './account.service';
import { CreateAccountDto } from './model/create-account.dto';
import { UpdateAccountDto } from './model/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService){}

  @Post()
  public insertAccount(@Body() createAccountDto: CreateAccountDto): Account {
    return this.accountService.insert(createAccountDto);
  }

  @Get()
  public findAll(): Account[] {
    return this.accountService.findAll();
  }

  @Get('/:id')
  public findOne(@Param('id') idAccount: string): Account {
    return this.findOneOrFail(idAccount);
  }

  @Put()
  public updateOne(@Body() updateAccountDto: UpdateAccountDto): Account {
    const account = this.findOneOrFail(updateAccountDto.id_account);
    const newAccount = this.accountService.updateOne(account, updateAccountDto);
    return newAccount;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public removeOne(@Param('id') idAccount: string): void {
    this.findOneOrFail(idAccount);
    this.accountService.removeOne(idAccount);
  }

  private findOneOrFail(id: string): Account {
    const account = this.accountService.findOne(id);
    if(!account) throw new NotFoundException();
    return account;
  }
}
