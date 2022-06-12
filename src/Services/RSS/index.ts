import { Injectable } from '@nestjs/common';
import Parser from 'rss-parser';

import { RSSResults } from '~types/RSS';

/*
  TODO: create scheduler/cron to fetch rss and store to compare
  feeds between old vs new. If there's a diff, then send new message to telegram.
*/

@Injectable()
export class RSSService {
  getHello(): string {
    return 'Hello RSS Service';
  }

  async getRSS(): Promise<RSSResults> {
    const parser: Parser<RSSResults> = new Parser();

    const results = await parser.parseURL(
      'https://www.upwork.com/ab/feed/jobs/rss?q=react+OR+reactjs+OR+%22react+js%22+OR+nextjs&proposals=0-4%2C5-9&sort=recency&paging=0%3B10&api_params=1&securityToken=34640ccc432db674d6e267a5c7b0bf1613ca01320a2df9b33823a1cec81fc3c6ea5c802a10a96b13b15f7ebcff0334033e95b73f139c6a6d69b3e49bf1251e5c&userUid=688917283309817856&orgUid=688917283309817858',
    );

    return results;
  }
}
