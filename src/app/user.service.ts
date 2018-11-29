import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  public username;

  constructor() {
    this.isUserLoggedIn =false;
   }
   setUserLoggedIn(){
     this.isUserLoggedIn = true;
     this.username = this.username;
   }

   getUserLogedIn(){
     return this.isUserLoggedIn;
   }
}
