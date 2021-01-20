import { Controller, Get, Query, Param, Req, Res, Headers } from '@nestjs/common';
import { ApiHeader, ApiQuery, ApiTags } from '@nestjs/swagger';

// 文档：https://docs.nestjs.com/openapi/operations

@Controller()
@ApiTags('Configuration')
export class ConfigurationController {
    constructor() { }

    @Get('/api/configuration')
    @ApiHeader({
        name: 'x-platform-id',
        description: '所属平台'
    })
    @ApiHeader({
        name: 'x-fingerprint-id',
        description: '所属平台'
    })
    getConfiguration(@Query() query, @Headers() headers) {
        return {
            message: 'this is content'
        }
    }
}
