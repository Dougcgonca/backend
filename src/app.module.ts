import { Module } from '@nestjs/common';
import { CountryListController } from './country-list/country-list.controller';
import { CountryListService } from './country-list/country-list.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CountryListController],
  providers: [CountryListService],
})
export class AppModule {}
