import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  isLoading = new BehaviorSubject(false);
  isLoading$ = this.isLoading.asObservable();

  constructor() { }

  showLoader(){
    this.isLoading.next(true);
  }
  hideLoader(){
    this.isLoading.next(false);
  }
}
