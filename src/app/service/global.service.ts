import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isUserLogged: boolean = false;

  constructor() { }
}
