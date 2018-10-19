import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  confirmPassword: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.confirmPassword = !this.confirmPassword;
  }
}
