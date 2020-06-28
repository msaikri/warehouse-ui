import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TyreService {

  constructor() { }

  printToConsole(arg)
  {
    console.log(arg);
  }
}
