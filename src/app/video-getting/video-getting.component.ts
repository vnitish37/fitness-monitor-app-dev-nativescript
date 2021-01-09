import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import {TapticEngine, TapticEngineNotificationType , TapticEngineImpactStyle} from "nativescript-taptic-engine";

@Component({
  selector: 'ns-video-getting',
  templateUrl: './video-getting.component.html',
  styleUrls: ['./video-getting.component.css']
})
export class VideoGettingComponent implements OnInit {

  public fitvideo ;



  constructor(private Router : RouterExtensions) { }

  ngOnInit() {
    
    var today1 = new Date();
    var curHr1 = today1.getHours();

    if (curHr1 < 12) {
      this.fitvideo= '~/assets/video/fit.mp4' ;
    } else if (curHr1 < 18) {
      this.fitvideo = '~/assets/video/fit3.mp4' ;
    } else {
      this.fitvideo = '~/assets/video/fit3.mp4' ;
    }


  }

  Google(){
    let tapticEngine = new TapticEngine()
    tapticEngine.selection()
  }

  Facebook(){
    let tapticEngine = new TapticEngine();
    tapticEngine.selection();
  }



  Twitter(){
    let tapticEngine = new TapticEngine();
    tapticEngine.selection()
  }


  PhoneNumber(){
    let tapticEngine = new TapticEngine();
    tapticEngine.selection()
    this.Router.navigate(['login'] , {clearHistory : true})
  }

}
