import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

/* Controllers */
import { RSSController } from '@controllers/RSSController';

/* Services */
import { RSSService } from '@services/RSS';

import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController, RSSController],
  providers: [AppService, RSSService],
})
export class AppModule {}
