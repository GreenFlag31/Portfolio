import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveLinkService {
  currentPageIsActive = new Subject();

  constructor() {}
}
