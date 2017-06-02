import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { StatusCounterService } from './status-counter.service';
import { UserModel } from './user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UsersService, StatusCounterService]
})
export class AppComponent implements OnInit {
    activeUsers: UserModel[];
    inactiveUsers: UserModel[];

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.activeUsers = this.usersService.activeUsers;
        this.inactiveUsers = this.usersService.inactiveUsers;

        this.usersService.userStatusChanged.subscribe((id: number) => {
            this.activeUsers = this.usersService.activeUsers;
            this.inactiveUsers = this.usersService.inactiveUsers;
        });
    }
}
