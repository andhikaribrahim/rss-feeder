import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

/* Controllers */
import { RSSController } from '@controllers/RSSController';

/* Services */
import { RSSService } from '@services/RSS';
import { CronService } from '@services/Scheduler';

import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, RSSController],
  providers: [AppService, RSSService, CronService],
})
export class AppModule {}
