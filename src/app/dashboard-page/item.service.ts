import { Injectable } from '@angular/core';

import {Item} from "./item"


export class Country {
  constructor(public Country?: string, public Amount?: number, public SecondVal?: number, public ThirdVal?: number, public Impact?: number, public Year?: number) {
  }
}
 
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items = new Array<Item>(
    { id: 1, name: "Account & Setting", role: "Goalkeeper" , onclick : "checkNfc()" , src: "http://pluspng.com/img-png/user-png-icon-account-avatar-human-male-man-men-people-person-download-svg-download-png-edit-icon-512.png"},
    { id: 2, name: "Share", role: "Goalkeeper" , onclick : "checkNfc()" ,src: "https://cdn0.iconfinder.com/data/icons/social-15/200/share-icon-512.png" },
    { id: 4, name: "Contact Us", role: "Defender"  , onclick : "checkNfc()" ,src: "https://i.ya-webdesign.com/images/contact-icon-png-15.png"},
    { id: 5, name: "Email Us", role: "Midfielder" , onclick : "checkNfc()" ,src: "https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png" },
    { id: 3, name: "Privacy Policy", role: "Goalkeeper" , onclick : "checkNfc()" , src: "https://www.freepngimg.com/download/bitcoin/59584-privacy-bitcoin-cash-cryptocurrency-ethereum-logo.png"},
    { id: 6, name: "Stay Fit Terms of Services", role: "Midfielder" , onclick : "checkNfc()" ,src: "https://lh3.googleusercontent.com/proxy/IZdzDBpq50HLHASF-hBpk9g6g4gylkHOMPb59I0MkEaXsmNeLTzK59B0uiVU-EM80RkfW7e3EEbqPZgrm7vXN6MZ483fix9IHA"},
    { id: 6, name: "Open Source Licenses", role: "Midfielder" , onclick : "checkNfc()" , src: "http://www.myiconfinder.com/uploads/iconsets/256-256-d5ad9a619a4a025b24b4627ab3690e6a-certificate.png"},
    { id: 7, name: "Help & Support", role: "Midfielder" , onclick : "checkNfc()" , src: "https://img.icons8.com/bubbles/2x/help.png"},
    { id: 3, name: "Logout", role: "Goalkeeper" , onclick : "checkNfc()" ,src: "http://www.iconarchive.com/download/i86056/graphicloads/100-flat-2/inside-logout.ico" },

);



getCategoricalSource(): Country[] {
  return [
      { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
      { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
      { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
      { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
      { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
  ];
}






getItems(): Array<Item> {
  return this.items;
}

getItem(id: number): Item {
  return this.items.filter((item) => item.id === id)[0];
}






  constructor() { }
}
