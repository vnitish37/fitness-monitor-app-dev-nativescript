import { Component, OnInit } from '@angular/core';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { RouterExtensions } from 'nativescript-angular/router';
import {TapticEngine, TapticEngineNotificationType} from "nativescript-taptic-engine";
@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public Router : RouterExtensions) { }

  ngOnInit():void {
  }

  favoriteFruits = [
    { type: "🍎", count: 7 },
    { type: "🍌", count: 15 },
    { type: "🍍", count: 12 },
    { type: "🍒", count: 30 },
    { type: "🍇", count: 16 }
]

onItemTap(args: ItemEventData) {
  console.log(`Index: ${args.index}; View: ${args.view} ;`);
  let tapticEngine = new TapticEngine();
  tapticEngine.selection();
  if(args.index == 0){
    setTimeout(() => {
      this.Router.navigate(['/arvideo'] , {clearHistory : false});
    }, 500);
  }
  if(args.index == 1){
    this.Router.navigate(['/chatbot'] , {clearHistory : false});
  }

  
}

countries: { name: string, population: string, imageSrc: string }[] = [
  { name: "AR 360°", population: "", imageSrc: "https://img.freepik.com/free-vector/letter-r-logo-vector-p-logo-vector_23987-126.jpg?size=338&ext=jpg" },
  { name: "Live Support", population: "", imageSrc: "https://miro.medium.com/max/2560/1*gEYJ6N8dR4x5QvbNEJGymg.jpeg" },
  { name: "Weather", population: "7.1M", imageSrc: "https://www.theguardian.pe.ca/media/photologue/photos/cache/SunCloud_large.png" },
  { name: "Canada", population: "36.3M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
  { name: "Switzerland", population: "8.4M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
  { name: "China", population: "1.4B", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
  { name: "Czech Republic", population: "10.6M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
  { name: "Germany", population: "82.7M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
  { name: "Spain", population: "46.6M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
  { name: "Ethiopia", population: "102.4M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
  { name: "Croatia", population: "4.2M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
  { name: "Hungary", population: "9.8M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
  { name: "Italy", population: "60.6M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
  { name: "Jamaica", population: "2.9M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
  { name: "Romania", population: "19.7M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
  { name: "Russia", population: "144.3M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
  { name: "United States", population: "325.7M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
];

}
