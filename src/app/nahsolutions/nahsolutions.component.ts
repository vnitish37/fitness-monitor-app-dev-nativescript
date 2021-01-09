import { Component , OnInit } from '@angular/core';
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import {
  LoadingIndicator,
  Mode,
  OptionsCommon
} from '@nstudio/nativescript-loading-indicator';

const indicator = new LoadingIndicator();
@Component({
  selector: 'ns-nahsolutions',
  templateUrl: './nahsolutions.component.html',
  styleUrls: ['./nahsolutions.component.css']
})
export class NahsolutionsComponent  {
  
  webViewSrc = "https://www.nahsolutions.in/";

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
  constructor() { 

    const options: OptionsCommon = {
      message: 'Loading...',
      details: 'connecting to nahsolutions',
      progress: 0.65,
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
    
        cancelable: true,
        cancelListener: function(dialog) {
          console.log('Loading cancelled');
        }
      },
      ios: {
        square: false
      }
    };
    
    indicator.show(options);
  }

  onLoadFinished(args: LoadEventData) {
    const webView = args.object as WebView;
    indicator.hide()
    if (!args.error) {
        console.log("Load Finished");
        console.log(`EventName: ${args.eventName}`);
        console.log(`NavigationType: ${args.navigationType}`);
        console.log(`Url: ${args.url}`);
    } else {
        console.log(`EventName: ${args.eventName}`);
        console.log(`Error: ${args.error}`);
    }
}
 
}
