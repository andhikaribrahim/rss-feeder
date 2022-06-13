import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { RSSService } from '@services/RSS';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  constructor(private readonly rssService: RSSService) {}

  /*
    TODO: Create a table to handle rss logs and to compare new vs old,
    replace the old ones when finished fetching using cron
  */

  @Cron(CronExpression.EVERY_5_MINUTES, {
    name: 'test',
    timeZone: 'Asia/Jakarta',
  })
  async handleCron() {
    this.logger.debug(await this.rssService.getRSS());
  }
}
