import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "hr@senwellsys.com" && pwd =="12345"){
localStorage.setItem('username',"admin");
return true;
}
else{
  return false;
}
  }

}


