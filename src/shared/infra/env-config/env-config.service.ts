import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private readonly configService: ConfigService) { }
  NodeEnv(): string {
    return String(this.configService.get<string>('NODE_ENV'))
  }

  ServerPort(): number {
    return Number(this.configService.get<number>('PORT'))
  }
}
