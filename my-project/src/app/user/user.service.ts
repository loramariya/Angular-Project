import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean {
    return!!this.user;
  };

  constructor() { 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = null; 
    }
  }

  login(){
    this.user ={
      username: 'testUser',
      email: 'test@email.com',
      password: 'test',
      id: '123',
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  };

  logout(){
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  };
  
}
