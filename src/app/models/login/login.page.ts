import { MenuController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() isSideMenu: boolean;

  ngOnInit() {
  }


  constructor(private router: Router, private menuController: MenuController) {

  }

  login(form) {
    // this.authService.login(form.value).subscribe((res)=>{
    //   this.router.navigateByUrl('home');
    // });
  }

  tryFacebookLogin() {
    // this.authService.doFacebookLogin()
    // .then((res) => {
    //   this.navCtrl.push(UserPage);
    // }, (err) => {
    //   this.errorMessage = err.message;
    // });
  }

  tryGoogleLogin() {
    // this.authService.doGoogleLogin()
    // .then((res) => {
    //   this.navCtrl.push(UserPage);
    // }, (err) => {
    //   this.errorMessage = err.message;
    // });
  }

  tryTwitterLogin() {
    // this.authService.doTwitterLogin()
    // .then((res) => {
    //   this.navCtrl.push(UserPage);
    // }, (err) => {
    //   this.errorMessage = err.message;
    // });
  }

  goRegisterPage() {
    this.menuController.toggle();
    this.router.navigate(['/register']);
    this.menuController.enable(false, "sideOptionsMenu");
  }

  ionViewWillLeave() {
    this.menuController.enable(true, "sideOptionsMenu");
  }

}
