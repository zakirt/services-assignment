import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from '../user.model';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    users: UserModel[];

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.users = this.usersService.activeUsers;

        this.usersService.userStatusChanged.subscribe((id: number) => {
            this.users = this.usersService.activeUsers;
        });
    }

    onSetToInactive(id: number) {
        this.usersService.deactivateUser(id);
    }
}
