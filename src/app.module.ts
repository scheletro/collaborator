import { Module } from '@nestjs/common';
import { AppController } from './controllers/app';

import { ConfigurationController } from './controllers/configuration';

@Module({
  imports: [],
  controllers: [AppController, ConfigurationController],
  providers: [],
})
export class AppModule { }
