import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
    templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit {

    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) { }


    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required ],
            password: ['', Validators.required ],
        })
    }

    login() {
        const userName: string = this.loginForm.get('userName').value;
        const password: string = this.loginForm.get('password').value;
        this.authService.authenticate(userName, password)
            .subscribe(
                () => { this.router.navigate(['user', userName]) },
                (error) => { 
                    console.log(error),
                    this.loginForm.reset()
                    this.userNameInput.nativeElement.focus();

                }
            )
    }
}