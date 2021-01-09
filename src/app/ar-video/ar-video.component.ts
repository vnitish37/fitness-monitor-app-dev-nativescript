import { Component, OnInit } from '@angular/core';
import { AR, ARMaterial, ARPlaneTappedEventData } from "nativescript-ar";
import { Color } from "tns-core-modules/color";
var flashlight = require("nativescript-flashlight");



@Component({
  selector: 'ns-ar-video',
  templateUrl: './ar-video.component.html',
  styleUrls: ['./ar-video.component.css']
})
export class ArVideoComponent implements OnInit {
  loaded = false;


  constructor() { }

  ngOnInit() {
    console.log(AR.isFaceTrackingSupported())
    setTimeout(() => {
      if(AR.isFaceTrackingSupported() == true){
        alert("Face tracking supported on this devices")
      }else{
        alert("This device does not support face tracking")
      }
    }, 5);
    setTimeout(() => {
      if(AR.isSupported() == true){
      }else{
        alert("This device dees not support ar");
      }
    }, 1000);
   
    this.loaded = true ;
  }

  planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.2
  };

  

}
