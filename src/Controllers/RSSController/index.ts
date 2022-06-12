import { Controller, Get } from '@nestjs/common';
import { RSSService } from '@services/RSS';

import { RSSResults } from '~types/RSS';

@Controller('rss')
export class RSSController {
  constructor(private readonly rssService: RSSService) {}

  @Get()
  getHello(): Promise<RSSResults> {
    return this.rssService.getRSS();
  }
}
