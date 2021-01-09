import { Component, OnInit } from '@angular/core';
import { FloatLabel } from "../float-label/float-label.component";
import * as localStorage from 'nativescript-localstorage';
import { AuthServiceService } from '../auth/auth-service.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-profile-update',
  moduleId: module.id,
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  public name ;
  public email ;
  public mobile ;
  public password = null ;
  public address = null ;



   public getname ;
   public getemail ;
   public getmobile ;
   public getpassword ;
   public getAddress : String = 'nitish' ;


   public _setname : String = 'NITISH';

  constructor(public Authservices : AuthServiceService , public Router  : RouterExtensions) { 

console.log(   localStorage.getItem('user'));

  }


  ngOnInit() {
  const user = JSON.parse(localStorage.getItem('user'));
   this.getname = String(user.name).charAt(0).toUpperCase() + String(user.name).slice(1) ;
   this.getemail = String(user.email);
   this.getmobile = Number(user.mobile);
   this.getpassword = user.password
   this.getAddress = user.address


  }





  submit(){
    const user1 = JSON.parse(localStorage.getItem('user'));


   
    const user = {
      name : this.name,
      id  : user1.id,
      address : this.address ,
    }

    this.Authservices.UpdateProfile(user).subscribe((data)=>{
      if(data.message == true){
        console.log(data);
        this.Router.backToPreviousPage();
      }else{
        console.log(data);
      }
    })   

  }

  update(){
    this.Router.navigate(['updatepassword'] , {clearHistory : false});
  }




}
