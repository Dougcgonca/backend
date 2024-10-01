import { Controller, Get, Param } from '@nestjs/common';
import { CountryListService } from './country-list.service';
import { CountryInfoDto } from './dto/specific-country.dto';
import { firstValueFrom } from 'rxjs';
import { CountryPopulationDto } from './dto/country-population.dto';

@Controller('countries')
export class CountryListController {
  constructor(private countryListService: CountryListService) {}

  @Get()
  async getCountryList(): Promise<any> {
    return this.countryListService.getAvailableCountries();
  }

  @Get('/:country')
  async getCountryInfo(
    @Param('country') country: string,
  ): Promise<CountryInfoDto[]> {
    return firstValueFrom(this.countryListService.getCountryInfo(country));
  }

  @Get('population/:country')
  async getPopulationInfo(
    @Param('country') country: string,
  ): Promise<CountryPopulationDto[]> {
    return firstValueFrom(this.countryListService.getPopulationData(country));
  }

  @Get('flag/:country')
  async getCountryFlag(
    @Param('country') country: string,
  ): Promise<CountryInfoDto[]> {
    return firstValueFrom(this.countryListService.getCountryFlag(country));
  }
}
