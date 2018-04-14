import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(url){
  	return {'token':'dummyToken',name:'sandeep'};
  }

}
