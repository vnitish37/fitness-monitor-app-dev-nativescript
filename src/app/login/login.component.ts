import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { ValidateService } from '../auth/validate.service';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
import { isDarkModeEnabled } from "nativescript-dark-mode";
import { AuthServiceService } from '../auth/auth-service.service';
import { EventData, Observable, fromObject } from 'tns-core-modules/data/observable';
import * as dialogs from "tns-core-modules/ui/dialogs";
import {TapticEngine, TapticEngineNotificationType} from "nativescript-taptic-engine";
import * as localStorage from 'nativescript-localstorage';



@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 _username : '' ;
 _password : '' ;
 _data : 'hello'
 public messagecolor  ;
 public viewmodel
 private feedback: Feedback;
  constructor(public Router : RouterExtensions , public page : Page , public Validation : ValidateService , public Authservice : AuthServiceService) { 
    this.page.actionBarHidden = true ;
    this.feedback = new Feedback();
    this.viewmodel = new Observable();
    this.viewmodel.set("items", []);
    
    
  }
  processing = false;
  ngOnInit() {
    const darkModeEnabled: boolean = isDarkModeEnabled();
    console.log(darkModeEnabled); 

    if( darkModeEnabled == true){
      this.messagecolor = '#facd07'
    }else{
      this.messagecolor = '#9ddd07'
    }

  }

  submit(){
    console.log(this._username);
    this.processing = true;

    const user = {
      mobile : this._username,
      password : this._password
    }

    if(this.Validation.loginValidation(user)){
      let tapticEngine = new TapticEngine();

      tapticEngine.notification({
     type: TapticEngineNotificationType.ERROR
      });
      this.feedback.error({
        title: "please fill username and password",
        titleColor: new Color("#222222"),
        position: FeedbackPosition.Bottom, 
        type: FeedbackType.Custom, 
        messageColor: new Color("#333333"),
        duration: 3000,
        backgroundColor : new Color(this.messagecolor),
        icon: "customicon", 
        android: {
          iconColor: new Color("#222222")   
        },
        onTap: () => console.log("showCustomIcon tapped"),
        onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
        onHide: () => console.log("showCustomIcon hidden")
      });
      this.processing = false ;
      
    }else if(user.password.length < 8){
      let tapticEngine = new TapticEngine();

   tapticEngine.notification({
  type: TapticEngineNotificationType.ERROR
   });
      this.feedback.error({
        title: "please enter 8 digit correct password",
        titleColor: new Color("#222222"),
        position: FeedbackPosition.Bottom, 
        type: FeedbackType.Custom, 
        messageColor: new Color("#333333"),
        duration: 3000,
        backgroundColor : new Color(this.messagecolor),
        icon: "customicon", 
        android: {
          iconColor: new Color("#222222")   
        },
        onTap: () => console.log("showCustomIcon tapped"),
        onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
        onHide: () => console.log("showCustomIcon hidden")
      });

      
      this.processing = false ;
    }else{

      try{

        fetch("http://49.207.179.227:8081/")
        .then((response) => response.json())
        .then((res) => {
            // console.log(res.slideshow.slides[1].items);
            this.viewmodel.set("items", res.status);
            console.log('working')
        }).catch((err) => {
          let tapticEngine = new TapticEngine();

        tapticEngine.notification({
      type: TapticEngineNotificationType.ERROR
      });
          const error = String("#NTL32");
           this.processing = false ;
          dialogs.alert({
            title: "Stayfit Error",
            message: `error code :  ${error}`,
            okButtonText: "Retry"
        }).then(() => {
          this.submit();
        });
          
    });

        this.Authservice.authenticateUser(user).subscribe(data =>{
          if(data.success == false){
            let tapticEngine = new TapticEngine();

        tapticEngine.notification({
      type: TapticEngineNotificationType.ERROR
       });
            this.feedback.error({
              title: "Your Account are not Found Please Register",
              message : "Tap To Register" ,
              titleColor: new Color("#222222"),
              position: FeedbackPosition.Top, 
              type: FeedbackType.Custom, 
              messageColor: new Color("#333333"),
              duration: 3000,
              backgroundColor : new Color(this.messagecolor),
              icon: "customicon", 
              android: {
                iconColor: new Color("#222222")   
              },
              onTap: () => 
              this.Router.navigate(['/register'] , {clearHistory : true}),
              onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
              onHide: () => console.log("showCustomIcon hidden")
            });
             this.processing = false ;
          }
          if(data.ERROR == 0){
            let tapticEngine = new TapticEngine();

          tapticEngine.notification({
      type: TapticEngineNotificationType.ERROR
       });
            alert("Error Code #232");
            this.processing = false ;
          }
          if(data.success == true){
         console.log(data)
         this.Authservice.StoreUserData(data.token , data.user);
         this.Router.navigate(['/dashboard'] , {clearHistory : true})
          }else{
            this.processing = false ;
          }
          
        })

      }catch(ERROR){
        let tapticEngine = new TapticEngine();

      tapticEngine.notification({
     type: TapticEngineNotificationType.ERROR
   });
        alert("Error Code #232");
        this.processing = false ;
      }
    }

  }
  toggleForm(){
    this.Router.navigate(['/forgot-password'] );
  }


  forgot(){
    this.Router.navigate(['/forgot-password'])
  }

  register(){
   this.Router.navigate(['register'] , {clearHistory : true});
  }

}
