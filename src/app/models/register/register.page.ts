import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router, private menuController: MenuController, private authService: AuthService) {
    this.menuController.enable(false, "sideOptionsMenu");
  }

  ngOnInit() {
  }

  register(form) {
    this.authService.doRegister(form)
      .then(res => {
        this.errorMessage = "";
        this.successMessage = "Your account has been created. Please log in now.";
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

  goLoginPage() {
    this.router.navigate(['/login']);
    this.menuController.enable(false, "sideOptionsMenu");
  }

  ionViewWillLeave() {
    this.menuController.enable(true, "sideOptionsMenu");
  }

}
