import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class CacheService {
    constructor(private readonly redis: RedisService) { }

    get(key: string): Promise<string> {
        const client = this.redis.getClient('cache');
        return client.get(key);
    }

    set(key: string, value: string): Promise<"OK"> {
        const client = this.redis.getClient('cache');
        return client.set(key, value);
    }
}