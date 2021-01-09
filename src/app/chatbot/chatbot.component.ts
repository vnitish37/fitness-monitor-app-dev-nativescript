import { Component, OnInit } from '@angular/core';
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import {
  LoadingIndicator,
  Mode,
  OptionsCommon
} from '@nstudio/nativescript-loading-indicator';
import * as localStorage from 'nativescript-localstorage';
import { RouterExtensions } from 'nativescript-angular/router';
const indicator = new LoadingIndicator();





@Component({
  selector: 'ns-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  webViewSrc = "http://49.207.179.227:3000";
  internet = false ;
  web = true ;

  
  

  onLoadStarted(args: LoadEventData) {
      const webView = args.object as WebView;

      if (!args.error) {
          console.log("Load Start");
          console.log(`EventName: ${args.eventName}`);
          console.log(`NavigationType: ${args.navigationType}`);
          console.log(`Url: ${args.url}`);
      } else {
          console.log(`EventName: ${args.eventName}`);
          console.log(`Error: ${args.error}`);
      }
    }

  constructor(public Router : RouterExtensions) { 
    
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name);
    
    
    const options: OptionsCommon = {
      message: 'Loading...',
      details: `we are connecting ${user.name}`,
      progress: 0.75,
      margin: 10,
      dimBackground: false,
      color: '#00aaff', // color of indicator and labels
      // background box around indicator
      // hideBezel will override this if true
      backgroundColor: 'yellow',
      userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
      hideBezel: true, // default false, can hide the surrounding bezel
      mode: Mode.AnnularDeterminate, // see options below
      android: {
   // Target view to show on top of (Defaults to entire window)
        cancelable: true,
        cancelListener: function(dialog) {
          console.log('Loading cancelled');
        }
      },
      ios: {
   // Target view to show on top of (Defaults to entire window)
        square: false
      }
    };
    
    
    indicator.show(options);


    
  }

  onLoadFinished(args: LoadEventData) {
    const webView = args.object as WebView;
    indicator.hide();

    function indicator1(){
      indicator.show();
    }
   
    if (!args.error) {
        console.log("Load Finished");
        console.log(`EventName: ${args.eventName}`);
        console.log(`NavigationType: ${args.navigationType}`);
        console.log(`Url: ${args.url}`);
        
    } else {
        this.web = false ;
        this.internet = true
        alert("no internet connection");
        console.log(`EventName: ${args.eventName}`);
        console.log(`Error: ${args.error}`);
    }
}

}
