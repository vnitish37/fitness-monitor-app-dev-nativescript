import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { isDarkModeEnabled } from "nativescript-dark-mode";
import { addOnDarkModeChangedListener } from "nativescript-dark-mode";

import { isDarkModeSupported } from "nativescript-dark-mode";
import { Page } from 'tns-core-modules/ui/page/page';
import * as localStorage from 'nativescript-localstorage';
import {TapticEngine, TapticEngineNotificationType} from "nativescript-taptic-engine";
import { FingerprintAuth, BiometricIDAvailableResult } from "nativescript-fingerprint-auth";







@Component({
  selector: 'ns-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

private fingerprintAuth: FingerprintAuth;
public Gif : any = '';
public day : any = '' ;
public SecurityAuth ;
public UserData ;
public User_name ;


  constructor(private Router : RouterExtensions , private page :Page) { 
    this.fingerprintAuth = new FingerprintAuth();

  this.page.actionBarHidden = true ;
   
  }

  ngOnInit() {
    const supported: boolean = isDarkModeSupported();
    console.log(supported);
    const darkModeEnabled: boolean = isDarkModeEnabled();
    console.log(darkModeEnabled);

    this.fingerprintAuth.available().then((result: BiometricIDAvailableResult) => {
      console.log(`Biometric ID available? ${result.any}`);
      console.log(`Touch? ${result.touch}`);
      console.log(`Face? ${result.face}`);
      

      if(localStorage.getItem('id_token') == undefined){
        this.SecurityAuth = "with StayFit"
      }else{
        if(result.touch == true){
          this.SecurityAuth = "with finger print";
           }else if(result.face == true){
             this.SecurityAuth = "with Face ID ";
           }else{
             this.SecurityAuth == "with Oauth";
           }
      }

      if(result.touch != true || localStorage.getItem('id_token') == undefined){
        this.SecurityAuth = "move to signup"
      }else{
        this.SecurityAuth = "move to dashboard"
      }

      
    });



    var today = new Date();
    var curHr = today.getHours();

    if(darkModeEnabled == true){
         if (curHr < 12) {
          this.Gif = 'https://miro.medium.com/max/888/1*fTBgwlcT6waWOfbvoFVFgw.gif' ;
        } else if (curHr < 18) {
          this.Gif = 'https://miro.medium.com/max/888/1*cXLrgYcnkB3E2CgXQGxHSg.gif' ;
        } else {
          
          this.Gif = 'https://www.widen.com/hubfs/widen-the-participation-age/img/man-treadmill.gif' ;
        }
    }else{
      if (curHr < 12) {
        
        this.Gif = 'https://miro.medium.com/max/888/1*cXLrgYcnkB3E2CgXQGxHSg.gif' ;
      } else if (curHr < 18) {
        this.Gif = 'https://miro.medium.com/max/888/1*cXLrgYcnkB3E2CgXQGxHSg.gif' ;
      } else {
        this.Gif = 'https://miro.medium.com/max/888/1*fTBgwlcT6waWOfbvoFVFgw.gif' ;
      }
    }


    var today1 = new Date();
    var curHr1 = today.getHours();

 
   
    if(localStorage.getItem('id_token') == undefined){
      if (curHr1 < 12) {
        this.day = 'Good Morning Guest' ;
      } else if (curHr1 < 18) {
        this.day = 'Good Afternoon Guest' ;
      } else {
        this.day = 'Good Evening Guest' ;
      }
    }else{
      this.UserData = JSON.parse(localStorage.getItem('user'));
      this.User_name = String(this.UserData.name).slice(0 , 1).toUpperCase() + String(this.UserData.name).slice(1)
      console.log(this.User_name);
      if (curHr1 < 12) {
        this.day = `Good Morning ${this.User_name}` ;
      } else if (curHr1 < 18) {
        this.day = `Good Afternoon ${this.User_name}` ;
      } else {
        this.day = `Good Evening ${this.User_name}` ;
      }
    }

  }

  login(){
    let tapticEngine = new TapticEngine();
    tapticEngine.selection();
    if(localStorage.getItem('id_token') == undefined){
      this.Router.navigate(['/video'] , {clearHistory : true});
    }else{



      this.fingerprintAuth.available().then((result: BiometricIDAvailableResult) => {
        console.log(`Biometric ID available? ${result.any}`);
        console.log(`Touch? ${result.touch}`);
        console.log(`Face? ${result.face}`);

        if(result.touch != true){
          this.Router.navigate(['/dashboard'] , {clearHistory : true})
          setTimeout(()=>{
            alert("Fingerprint sensor not working")
          },400)
        }else{

          this.fingerprintAuth.verifyFingerprint(
            {
              title: 'Stayfit Auth', // optional title (used only on Android)
              message: 'Touch ID required to use stayfit', // optional (used on both platforms) - for FaceID on iOS see the notes about NSFaceIDUsageDescription
              authenticationValidityDuration: 10, // optional (used on Android, default 5)
              useCustomAndroidUI: false // set to true to use a different authentication screen (see below)
            })
            .then((enteredPassword?: string) => {
              if (enteredPassword === undefined) {
                console.log("Biometric ID OK")
                this.Router.navigate(['/dashboard'] , {clearHistory : true})
              } else {
                // compare enteredPassword to the one the user previously configured for your app (which is not the users system password!)
              }
            })
            .catch(err =>  alert("You finger print was invalid please try again later"));
          
        }
      });

     
     
    } 
  }


}
