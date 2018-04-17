import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {  catchError ,map ,tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BaseService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:5002';  // URL to web api


 
  
  // getHeroes():Observable<Hero[]>{
  //   this.messageService.add('HeroService: Fetched Heros');
  //   // return of(HEROES); //emiting array of heros
  //   return this.http.get<Hero[]>(this.baseUrl)
      
  // }



  // getHero(id:number):Observable<Hero>{
  //   const url =`${this.baseUrl}/${id}`;
    
  //   // return of(HEROES.find(hero=>hero.id==id));
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_=> this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>('getHero id=${id}'))
  //   )
  // }

  // updateHero(hero:Hero) :Observable<any>{
  //   return this.http.put(this.baseUrl,hero,httpOptions).pipe(
  //     tap(_=>this.log(`updated hero id ${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   )
  // }

  /** POST: add a new hero to the server */
  addProject(project): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/projects', project, httpOptions)
  };
  addUser(user): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/users', user, httpOptions)
  }
  addTask(task): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/tasks', task, httpOptions)
  }
  login(user):Observable<any>{
    console.log("inside service get login");
    return this.http.get<any>(this.baseUrl+'/login/'+user.email+'/'+user.password)
  }
 
}

