import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class MessageService {

    constructor(private router: Router) { }
    private newUser = new BehaviorSubject<any>({
    Message: '',
  });

  setNewUserInfo(user: any) {
    this.newUser.next(user);
    this.router.navigate(['/feedback']);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }

}