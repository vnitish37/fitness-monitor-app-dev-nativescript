import { Component, OnInit } from '@angular/core';
import * as localStorage from 'nativescript-localstorage';
import { AuthServiceService } from '../auth/auth-service.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { CFAlertDialog,
  DialogOptions,
  CFAlertGravity,
  CFAlertActionAlignment,
  CFAlertActionStyle,
  CFAlertStyle } from 'nativescript-cfalert-dialog';
  import {TapticEngine, TapticEngineNotificationType} from "nativescript-taptic-engine";

@Component({
  selector: 'ns-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  public password = '';

  constructor(public Authservice : AuthServiceService , public Router : RouterExtensions) { }

  ngOnInit() {

    
    
  }


  submit(){
  const Localuser = JSON.parse(localStorage.getItem('user'));
  console.log(Localuser.id);
  const _id = Localuser.id
    const user = {
      id : _id ,
      password : this.password
    }

    if(!user.password){
      let tapticEngine = new TapticEngine();
      tapticEngine.notification({
        type: TapticEngineNotificationType.ERROR
      });
       let cfalertDialog = new CFAlertDialog();

    let options: DialogOptions = {
      // Options go here
      dialogStyle: CFAlertStyle.ALERT,
      title: "please provide new password",
      backgroundBlur : true
    }

   cfalertDialog.show(options); 
          }
          else{
      this.Authservice.UpdatePassword(user).subscribe((data)=>{
        if(data){
          console.log(user);
          console.log(data);
          alert(data.alert);
          setTimeout(() => {
            this.Router.backToPreviousPage();
          }, 2200);
         
        }
      })
    }

  
    
  }




}
