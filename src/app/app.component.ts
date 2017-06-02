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

    constructor(private usersService: UsersService) { }

    ngOnInit() { }
}
