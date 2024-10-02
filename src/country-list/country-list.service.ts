import { Injectable } from '@nestjs/common';
import { CountryListDto } from './dto/country-list.dto';
import { HttpService } from '@nestjs/axios';
import { map, Observable, catchError, of } from 'rxjs';
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
    return this.httpService.get(this.apiUrl).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Error fetching available countries:', error);
        return of([]);
      }),
    );
  }

  getCountryInfo(country: string): Observable<CountryInfoDto[]> {
    return this.httpService.get(`${this.infoUrl}/${country}`).pipe(
      map((response) => {
        return response.data;
      }),
      catchError((error) => {
        console.error(`Error fetching info for country ${country}:`, error);
        return of([]);
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
        catchError((error) => {
          console.error(
            `Error fetching population data for country ${country}:`,
            error,
          );
          return of([]);
        }),
      );
  }

  getCountryFlag(country: string): Observable<any[]> {
    return this.httpService
      .get(`${this.populationURL}/countries/flag/images`)
      .pipe(
        map((response) => {
          return this.treatFlagData(response.data.data, country);
        }),
        catchError((error) => {
          console.error(`Error fetching flag for country ${country}:`, error);
          return of([]);
        }),
      );
  }

  treatFlagData(data: any[], country: string) {
    const result = data.find((value) => value.name == country);
    return result?.flag || null;
  }

  treatPopulationData(popData: any[], country: string) {
    const result = popData.find((value) => value.country == country);
    return result || null;
  }
}
