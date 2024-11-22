import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  dialog = new EventEmitter<any>;
  scroll = new EventEmitter<any>;

}
