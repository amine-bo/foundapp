import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { Observable, of } from 'rxjs';
import { PlaceSummary } from 'wft-geodb-angular-client/lib/model/place-summary.model';
import { GeoDbService } from 'wft-geodb-angular-client';
import { GeoResponse } from 'wft-geodb-angular-client/lib/model/geo-response.model';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CompleteSearchCityService implements AutoCompleteService {
  private MIN_CITY_POPULATION = 25000;
  filtered: string[];

  constructor(private geoDbService: GeoDbService) {

  }
  getResults(keyword: string) {
    this.filtered = [];
    let cityNamePrefix = keyword;
    let citiesObservable: Observable<PlaceSummary[]> = of([]);

    if (cityNamePrefix && cityNamePrefix.length >= 2) {

      citiesObservable = this.geoDbService.findPlaces({
        namePrefix: cityNamePrefix,
        minPopulation: this.MIN_CITY_POPULATION,
        types: ['CITY'],
        sortDirectives: ['-population'],
        limit: 5,
        offset: 0
      })
        .pipe(
          map(
            (response: GeoResponse<PlaceSummary[]>) => {
              return response.data;
            },

            (error: any) => console.log(error)
          )
        );
      citiesObservable.subscribe(data => {
        data.forEach(element => {
          this.filtered.push(this.getCityDisplayName(element));
        });
      });
      return this.filtered;
    }
  }

  getCityDisplayName(city: PlaceSummary) {

    if (!city) {
      return null;
    }

    let name = city.name;

    if (city.region) {
      name += ', ' + city.region;
    }

    name += ', ' + city.country;

    return name;
  }
}
