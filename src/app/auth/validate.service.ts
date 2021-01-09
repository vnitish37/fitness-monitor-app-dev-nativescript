import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateInput(user){
    if(!user.name  || !user.email  || !user.password || !user.mobile){
      return false
    }else{
      return true
    }
  }


  loginValidation(user){
    if(!user.mobile || !user.password){
      return true
    }else{
      return false
    }
  }

  

  LoginpasswordValidation(user){
    if(user.password.length <=8){
      return true ;

    }else{
      return false ;
    }
  }


  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



  

  validatePassword(password){
    if(password.length < 8){
      return false
    }else{
      return true
    }
  }






}
