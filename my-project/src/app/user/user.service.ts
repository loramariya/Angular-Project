import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | null>(null)
  private user$ = this.user$$.asObservable(); 
  USER_KEY = '[user]';
  user: UserForAuth | null = null;
  userSubscription: Subscription | null = null;

  get isLogged(): boolean {
    return!!this.user;
  };

  constructor(private http: HttpClient) { 
    const savedUser = localStorage.getItem(this.USER_KEY);
    if(savedUser){
      this.user$$.next(JSON.parse(savedUser));
    }
    
    this.userSubscription= this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password:string){
    return this.http
    .post<UserForAuth>('/api/login', {email, password})
    .pipe(tap((user) => this.user$$.next(user)));
  };

  register(username:string, email: string, password:string, confirmPassword:string){
    return this.http
    .post<UserForAuth>('/api/register', {username, email, password, confirmPassword})
    .pipe(tap((user) => this.user$$.next(user)));
  };

  

  logout(){
    return this.http.post('/api/logout', {})
    .pipe(tap((user) => this.user$$.next(null)));
  };

  getProfile(){
   return this.http.get<UserForAuth>('/api/users/profile')
    .pipe(tap((user) => this.user$$.next(user)));
  }
  
}
