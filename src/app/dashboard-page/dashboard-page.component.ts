import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";
import { ItemService } from './item.service';
import { ObservableArray } from "tns-core-modules/data/observable-array";

import {Item1} from "./item" ;
import { ItemEventData } from "tns-core-modules/ui/list-view";

import { isDarkModeEnabled } from "nativescript-dark-mode";
import * as localStorage from 'nativescript-localstorage';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { AuthServiceService } from '../auth/auth-service.service';
import * as utils from "tns-core-modules/utils/utils";

import * as SocialShare from "nativescript-social-share";
import { CFAlertDialog,
  DialogOptions,
  CFAlertGravity,
  CFAlertActionAlignment,
  CFAlertActionStyle,
  CFAlertStyle } from 'nativescript-cfalert-dialog';

import {TapticEngine, TapticEngineNotificationType, TapticEngineImpactStyle} from "nativescript-taptic-engine";






@Component({
  selector: 'ns-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardPageComponent implements OnInit {



  public colordata ;

  items: Array<Item1>;

  public UserData ;

  public DataUsername ;

  public SettingUsername ;

  public buttomcolor = "#9ddd07" ;

  public UserEmail ;




  searchPhrase: string;

public locations ;

   public locations1: { city: string, country: string, imageSrc: string }[] = [
    { city: "Yarlford", country: "Aldorria", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Paentmarwy", country: "Bahari", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Landow", country: "Erewhon", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Penrith", country: "Gilead", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Aberystwyth", country: "Mandorra", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Macclesfield", country: "Nambutu", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Larnwick", country: "Deltora", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Snowbush", country: "Islandia", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Kelna", country: "Norteguay", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Drumnacanvy", country: "Graznavia", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Hartlepool", country: "Drasselstein", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" },
    { city: "Timeston", country: "Brungaria", imageSrc: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" }
];




public itemsObs = new ObservableArray(['item1', 'item2']);

public appname = "Stayfit" ;








public _pieSource ;


countries: { name: string, population: string, imageSrc: string }[] = [
  { name: "Australia", population: "24.1M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
  { name: "Belgium", population: "11.4M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
  { name: "Bulgaria", population: "7.1M", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
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



  constructor(private page : Page , private Router : RouterExtensions , private Items : ItemService , private Authservices : AuthServiceService ) {
    
    if(isIOS){
      this.page.actionBarHidden = false ;
    }else{
      this.page.actionBarHidden = true ;
    }
   }


  

   items1: { name: string, desc: string, price: string, imageSrc: string }[] = [
    { name: "Pancakes!", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
    { name: "Bowl of Crap", desc: "Probably something in here. But probably not.", price: "$1", imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
    { name: "Motorcycle", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
    { name: "Air Plant", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
    { name: "Cuff Links", desc: "You'll need them once in the next ten years.", price: "$59", imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
    { name: "Skateboard", desc: "Too bad you are too old to use it.", price: "$129", imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
    { name: "Off-Brand Soda", desc: "Desperate times we live in.", price: "$2", imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
    { name: "Beer? Liquor?", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
    { name: "Pie!", desc: "Also good.", price: "$15", imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
  ];

  

  items2 : {photo : String , title : String , body : String , date : String}[] = [
    {photo: 'res://icon',
    title: 'Ardiansyah Putra',
    body: 'Ini adalah pesan yang saya kirimkan kepada anda, mohon cepat dibalas ya',
    date: 'Just Now'}
  ]

  
  
  

favoriteFruits = [
  { type: "🍎", count: 7 },
  { type: "🍌", count: 15 },
  { type: "🍍", count: 12 },
  { type: "🍒", count: 30 },
  { type: "🍇", count: 16 }
]

  ngOnInit():void {

    let tapticEngine = new TapticEngine();

    tapticEngine.notification({
      type: TapticEngineNotificationType.SUCCESS
    });


    
    

    this.UserData = JSON.parse(localStorage.getItem('user'));
    console.log(this.UserData);
    console.log(this.UserData.id);

    this.UserEmail = this.UserData.email


    let cfalertDialog = new CFAlertDialog();
  

    if(localStorage.getItem('notification') == 1){
      console.log(true);
  
    }else{

      let options: DialogOptions = {
        dialogStyle: CFAlertStyle.NOTIFICATION,
        title: 'Notification!',
        message: `Welcome to Stayfit , ${this.UserData.name} thank you`,
        backgroundBlur: true,
        cancellable: true,
        onDismiss: function(dialog) {
          console.log('Dialog was dismissed');
        },  
        buttons: [
          {
            text: 'Okay',
            buttonStyle: CFAlertActionStyle.POSITIVE,
            buttonAlignment: CFAlertActionAlignment.END,
            backgroundColor: '#F58476',
            onClick: function(response) {
              localStorage.setItem('notification' , 1);
            },
          },
        ],
      };
      cfalertDialog.show(options);

    }

    this.items = this.Items.getItems();

//Localstorage Database name capture
    this.DataUsername = this.UserData.name

    this.SettingUsername = String(this.UserData.name).charAt(0).toUpperCase() + String(this.UserData.name).slice(1)


     
    this.Authservices.getVideo().subscribe(data =>{
      console.log(data);
      this.locations = data.video ;    
    })

    const darkModeEnabled: boolean = isDarkModeEnabled();
    console.log(darkModeEnabled); 

    if( darkModeEnabled == true){
      this.colordata = '#fa8d07'
    }else{
      this.colordata = '#9ddd07'
    }
    this.items = this.Items.getItems();

    
    
    
  }

  arvideo(){
    this.Router.navigate(['/arvideo'] , {clearHistory : false});
  }

  onSubmit(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Searching for ${searchBar.text}`);
}

onTextChanged(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Input changed! New value: ${searchBar.text}`);
}

onClear(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Clear event raised`);
}


loadedSB(args) { 
  setTimeout(() => {
      args.object.dismissSoftInput();
  }, 200)
  
}


  refreshList(args) {
    var pullRefresh = args.object;
    setTimeout(function () {
       pullRefresh.refreshing = false;
    }, 1000);
}


buttonItemTap(args : ItemEventData){
  console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.items[args.index]}`);
  let tapticEngine = new TapticEngine();

    tapticEngine.selection();

}

  
  onItemTap(args: ItemEventData) {
    console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.items[args.index]}`);
    let tapticEngine = new TapticEngine();

    tapticEngine.selection();
    
    if(args.index == 0){
      this.Router.navigate(['/profileupdate']);
    }
    if(args.index == 1){
      SocialShare.shareUrl("https://nahsolutions.in", "Stayfit share application" , "Nahsolutions");
    }
    if(args.index == 2){
      utils.openUrl("tel://6388324234");

    }
    if(args.index == 3){
      utils.openUrl("mailto:nahsolutions2019@gmail.com");
    }

    
    if(args.index == 8){
      localStorage.clear();
      this.Router.navigate(['/video'] , {clearHistory : true})
    }
}



  onItemLoading(args) {
    // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
    if (isAndroid) {
        var newcolor = new Color("#e6e6e6");
        args.ios.backgroundView.backgroundColor = newcolor.ios;
    }
}
  

  onLogout(){
    this.Router.navigate(['/login'] , {clearHistory : true})
  }

  checkNfc(){
    this.Router.navigate(['/Dashboard1']);
  }
}
