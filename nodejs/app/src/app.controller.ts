import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { StatusCodesList } from './common/constants/status-codes-list.constants';
import { CustomHttpException } from './common/exception/custom-http.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/error')
  error(): string {
    throw new CustomHttpException({
      code: StatusCodesList.OutOfStockError,
      error: true,
      message: 'error',
      statusCode: HttpStatus.BAD_REQUEST,
      args: { name: 'Phone' },
    });
  }
}
