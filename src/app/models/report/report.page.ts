import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss']
})
export class ReportPage {

  constructor(public globalService: GlobalService, public menuCtrl: MenuController) { }


  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
