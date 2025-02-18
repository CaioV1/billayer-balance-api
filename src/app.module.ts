import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AccountService } from './account/account.service';

@Module({
  imports: [AccountModule],
  controllers: [AppController],
  providers: [AppService, AccountService],
})
export class AppModule {}
