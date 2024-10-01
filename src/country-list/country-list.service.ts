import { Injectable } from '@nestjs/common';
import { CountryListDto } from './dto/country-list.dto';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { CountryInfoDto } from './dto/specific-country.dto';

@Injectable()
export class CountryListService {
  private apiUrl: string;
  private infoUrl: string;
  private populationURL: string;

  constructor(private readonly httpService: HttpService) {
    this.apiUrl = process.env.API_URL;
    this.infoUrl = process.env.INFO_URL;
    this.populationURL = process.env.POPULATION_URL;
  }

  getAvailableCountries(): Observable<CountryListDto[]> {
    return this.httpService
      .get(this.apiUrl)
      .pipe(map((response) => response.data));
  }

  getCountryInfo(country: string): Observable<CountryInfoDto[]> {
    console.log(this.infoUrl);
    return this.httpService.get(`${this.infoUrl}/${country}`).pipe(
      map((response) => {
        return response.data;
      }),
    );
  }

  getPopulationData(country: string): Observable<any[]> {
    return this.httpService
      .get(`${this.populationURL}/countries/population`)
      .pipe(
        map((response) => {
          return this.treatPopulationData(response.data.data, country);
        }),
      );
  }

  getCountryFlag(country: string): Observable<any[]> {
    return this.httpService
      .get(`${this.populationURL}/countries/flag/images`)
      .pipe(
        map((response) => {
          console.log(this.populationURL);
          console.log(response);
          return this.treatFlagData(response.data.data, country);
        }),
      );
  }

  treatFlagData(data: any[], country: string) {
    const result = data.find((value) => value.name == country);
    return result.flag;
  }

  treatPopulationData(popData: any[], country: string) {
    const result = popData.find((value) => value.country == country);
    return result;
  }
}
