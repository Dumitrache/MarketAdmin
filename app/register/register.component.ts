import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { User } from '../auth/user-output';
import { AuthService } from '../auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
    providers: [NotificationsService]
})
export class RegisterComponent implements OnInit {

    public user: User;
    public options: any;

    constructor(private notification: NotificationsService, private authService: AuthService) {
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
        this.user = new User();
    }

    ngOnInit() { }

    register() {
        alert(JSON.stringify(this.user));
    }
}
