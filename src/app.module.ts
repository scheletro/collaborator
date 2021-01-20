import { Module } from '@nestjs/common';

import { RedisModule } from 'nestjs-redis';


import { AppController } from './controllers/app';
import { ConfigurationController } from './controllers/configuration';

import { CacheService } from './services/cache.service';

import { AppGateway } from './app.gateway';

@Module({
  imports: [
    RedisModule.register({
      name: 'cache',
      url: 'redis://localhost:6380'
    })
  ],
  controllers: [AppController, ConfigurationController],
  providers: [
    AppGateway,
    CacheService
  ],
})
export class AppModule { }
