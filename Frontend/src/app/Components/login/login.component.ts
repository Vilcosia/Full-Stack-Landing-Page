import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../Services/auth.service';
import { JwtService } from '../../Services/jwt.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.omponent.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private jwt: JwtService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  onLogin(form: FormGroup): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    console.log(form.value);

    this.subscriptions.push(
      this.authService.login(form.value).subscribe(
        (data: any) => {
          this.authService.saveToken(data.token);

          const { email, firstname, lastname, user_id } = this.jwt.getData(
            data.token
          );
          localStorage.setItem('email', email);
          localStorage.setItem('firstname', firstname);
          localStorage.setItem('lastname', lastname);
          localStorage.setItem('user_id', user_id);

          this.router.navigateByUrl('/welcome');
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      )
    );
  }
}
