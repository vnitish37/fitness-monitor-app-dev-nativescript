import { Component, OnInit , } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
import { isDarkModeEnabled } from "nativescript-dark-mode";
import { EventData, Observable, fromObject } from 'tns-core-modules/data/observable';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'ns-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public _name ;
  private feedback: Feedback;

  public color = '';


  processing = false ;

  public viewmodel

  constructor(public Authservice : AuthServiceService , public Router : RouterExtensions) { 

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

  ForgotPassword(){
    
    const user = {
      mobile :this._name
    }
    
    this.processing = true
    if(user.mobile == undefined){
      this.feedback.error({
        title: "Please fill all the username",
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
        onTap: () => alert('you are tap on alert component'),
        onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
        onHide: () => console.log("showCustomIcon hidden")
      });
      this.processing = false ;
    }else{
      try{
        this.processing = true ;
        
        fetch("http://49.207.179.227:8081/")
        .then((response) => response.json())
        .then((res) => {
            // console.log(res.slideshow.slides[1].items);
            this.viewmodel.set("items", res.status);
            console.log('working')
            this.processing = false ;
        }).catch((err) => {
          const error = String("#NTF25");
          dialogs.alert({
            title: "Stayfit Error",
            message: `error code :  ${error}`,
            okButtonText: "Retry"
        }).then(() => {
          this.ForgotPassword();
        });
          this.processing = false ;
    });
    
        this.Authservice.forgotPassword(user).subscribe((data)=>{
          if(data.success == true){
            this.feedback.success({
              title: "Register Alert",
              message: 'email send to mail address ' + data.user.email,
              messageColor: new Color("#333333"),
              duration: 3000,
              backgroundColor : new Color(this.color),
              titleColor : new Color("#222222")
            });
            this.processing = false
          }else if(data.success == false){
            alert('You email address not present my database');
            this.feedback.success({
              title: "Register Alert",
              message: 'You email address not present my database',
              messageColor: new Color("#333333"),
              duration: 3000,
              backgroundColor : new Color(this.color),
              titleColor : new Color("#222222")
            });
            this.processing = false ;
          }else{
            alert('error' + '#NT45');
            this.processing = false ;
          }
        })

      }catch(err){
        setTimeout(() => {
          this.processing = false ;
          alert('error' + '#NT45');
        }, 2000);  
      }
    }

  

  }

  nahsolutions(){
    this.Router.navigate(['nahsolutions']);
  }

}
