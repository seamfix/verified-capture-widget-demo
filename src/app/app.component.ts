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
    tokenId: 'VF-1681314419154',
    authenticationToken: '9ccaa6727381d578dff2f6d651b8f8ec2a42176ce391c4c1572f20fc840fa9da7463235a3c424f7c91ff4eb704c37e5320427bc83a43bb89e2ae1d710556052c902127160cf5f93eae3fa8d9f38076af',
    linkIdentifier: 'Sulaiman106',
    callbackUrl: 'https://webhook.site/7e848f5d-5aae-4c41-a15b-032a88355a40',
    personalizationDetail: 'Sulaiman',
    baseUserId: 1630321373727
  }
  submit(e: any){
    console.log("capture response", e)
  }
}
