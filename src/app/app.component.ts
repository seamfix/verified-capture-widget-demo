import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cature-widget';
  token = '2514df1a031570a45b1089ffdf89b11f3f42d7bd397a9598af4f143e33c5746ce21e9269c1d3e443621fa905ca5741655575d5dceb6937ce83625276b80bdee1671224c5333d715310704c3cf1c1c157'
  authorisation = {
    tokenId: 'VF-1701857559353',
    authenticationToken: 'e1883162d580c5456d78516fd60639f0ef3726d600f69315a2d0ba2a6384746b1262304acfd01893b271be7e598b956261c2c232f10e03840cf695964d1a1155a5c0fe418eaf94ea27717ff26910ae45',
    linkIdentifier: 'Shola Hush05',
    callbackUrl: 'https://webhook.site/7e848f5d-5aae-4c41-a15b-032a88355a40',
    baseUserId: 1630321373727,
    personalizationDetail: 'Seafood',
    sourceImage: 'data.png/'
  }
  submit(e: any){
    console.log("capture response", e)
  }
}
