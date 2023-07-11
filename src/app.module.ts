import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, '../database.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    TweetsModule,
  ],
})
export class AppModule {}
