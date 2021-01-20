import { Controller, Get, Query, Param, Req, Res, Headers } from '@nestjs/common';

// 文档：https://docs.nestjs.com/openapi/operations

@Controller()
export class AppController {
  constructor() { }

  @Get()
  getDefaultContent(): Record<string, string | Record<string, string | number>> {
    return {
      version: '0.0.1'
    }
  }
}
