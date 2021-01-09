import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ValidateService } from '../auth/validate.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
import { isDarkModeSupported } from "nativescript-dark-mode";
import { addOnDarkModeChangedListener } from "nativescript-dark-mode";
import { EventData, Observable, fromObject } from 'tns-core-modules/data/observable';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { isDarkModeEnabled } from "nativescript-dark-mode";
import { AuthServiceService } from '../auth/auth-service.service';
import {TapticEngine, TapticEngineNotificationType} from "nativescript-taptic-engine";

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  processing = false;
  public viewmodel

  
 
  //Input field
  _name = '' ;
  _email = '' ;
  _password = '' ;
  _mobile = '' ;
  private feedback: Feedback;

  public color = '' ;

  constructor(public Router : RouterExtensions , public Validation : ValidateService , public page : Page , public Authservice : AuthServiceService) {
    this.page.actionBarHidden = true ; 
    this.feedback = new Feedback(); 
    this.viewmodel = new Observable();
    this.viewmodel.set("items", [])
  }

  ngOnInit() {

    const darkModeEnabled: boolean = isDarkModeEnabled();
    console.log(darkModeEnabled); 
    if( darkModeEnabled == true){
      this.color = '#facd07'
    }else{
      this.color = '#9ddd07'
    }

  }

  

  submit(){
    const user = {
      name : this._name ,
      email : this._email ,
      mobile : this._mobile ,
      password : this._password
    }    
    this.processing = true ;

    if(!this.Validation.validateInput(user)){
      let tapticEngine = new TapticEngine();

     tapticEngine.notification({
     type: TapticEngineNotificationType.ERROR
    });
      this.feedback.error({
        title: "Please fill all the details",
        titleColor: new Color("#222222"),
        position: FeedbackPosition.Bottom, 
        type: FeedbackType.Custom, 
        messageColor: new Color("#333333"),
        duration: 3000,
        backgroundColor : new Color(this.color),
        icon: "customicon", 
        android: {
          iconColor: new Color("#222222")   
        },
        onTap: () => console.log("showCustomIcon tapped"),
        onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
        onHide: () => console.log("showCustomIcon hidden")
      });

      this.processing = false;
      
    }else{
      if(!this.Validation.validateEmail(user.email)){
        let tapticEngine = new TapticEngine();

        tapticEngine.notification({
        type: TapticEngineNotificationType.ERROR
       });
        this.feedback.error({
          title: "please enter Provide email address",
          titleColor: new Color("#222222"),
          position: FeedbackPosition.Bottom, 
          type: FeedbackType.Custom, 
          messageColor: new Color("#333333"),
          duration: 3000,
          backgroundColor : new Color(this.color),
          icon: "customicon", 
          android: {
            iconColor: new Color("#222222")   
          },
          onTap: () => console.log("showCustomIcon tapped"),
          onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
          onHide: () => console.log("showCustomIcon hidden")
        });
        this.processing = false;
      }else 
      if(user.mobile.length ==10 ){

        if(user.password.length < 8){
          let tapticEngine = new TapticEngine();

     tapticEngine.notification({
     type: TapticEngineNotificationType.ERROR
    });

          this.feedback.error({
            title: "Password Should be 8 char",
            titleColor: new Color("#222222"),
            position: FeedbackPosition.Bottom, 
            type: FeedbackType.Custom, 
            messageColor: new Color("#333333"),
            duration: 3000,
            backgroundColor : new Color(this.color),
            icon: "customicon", 
            android: {
              iconColor: new Color("#222222")   
            },
            onTap: () => console.log("showCustomIcon tapped"),
            onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
            onHide: () => console.log("showCustomIcon hidden")
          });
          this.processing = false;

        }else{
          fetch("http://49.207.179.227:8081/")
        .then((response) => response.json())
        .then((res) => {
            // console.log(res.slideshow.slides[1].items);
            this.viewmodel.set("items", res.status);
            console.log('working')
            this.processing = false ;
        }).catch((err) => {
          const error = String("#NTR32");
          dialogs.alert({
            title: "Stayfit Error",
            message: `error code :  ${error}`,
            okButtonText: "Retry"
        }).then(() => {
          this.submit();
        });
          this.processing = false ;
    });
          this.Authservice.registerUser(user).subscribe(data =>{
            try{
              
              if(data.message == 0){
                console.log(data);
                this.processing = false;
                let tapticEngine = new TapticEngine();

     tapticEngine.notification({
     type: TapticEngineNotificationType.SUCCESS
    });
                this.feedback.success({
                 title: "Register Alert",
                 message: `You are Successfully Registered Welcome ${this._name} !!`,
                 messageColor: new Color("#333333"),
                 duration: 3000,
                 titleColor : new Color("#222222")
               });
               
                this.Router.navigate(['/login'] , {clearHistory : true});
              }else{
                if(data.message == 1){
                  let tapticEngine = new TapticEngine();

            tapticEngine.notification({
           type: TapticEngineNotificationType.ERROR
          });
                  this.feedback.error({
                    title: "User Already Register",
                    message: `Mobile Number and Email Already Register`,
                    messageColor: new Color("#333333"),
                    duration: 3000,
                    backgroundColor : new Color(this.color),
                    titleColor : new Color("#222222")
                  });
                }
                this.processing = false;
              }
            }catch(err){
               alert("error code - &6452");
               this.processing = false;
            }
          })  
        }
      }else{
        let tapticEngine = new TapticEngine();

        tapticEngine.notification({
        type: TapticEngineNotificationType.ERROR
       });
        this.feedback.error({
          title: "please enter the correct mobile number",
          titleColor: new Color("#222222"),
          position: FeedbackPosition.Top, 
          type: FeedbackType.Custom, 
          messageColor: new Color("#333333"),
          duration: 3000,
          backgroundColor : new Color(this.color),
          icon: "customicon", 
          android: {
            iconColor: new Color("#222222")   
          },
          onTap: () => console.log("showCustomIcon tapped"),
          onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
          onHide: () => console.log("showCustomIcon hidden")
        });
        this.processing = false;
      }
    }

  
  }

  Login(){
    let tapticEngine = new TapticEngine();
    tapticEngine.selection();
    this.Router.navigate(['login'] , {clearHistory : true});
    }

}
