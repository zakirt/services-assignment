import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from '../user.model';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
    users: UserModel[];

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.users = this.usersService.inactiveUsers;

        this.usersService.userStatusChanged.subscribe((id: number) => {
            this.users = this.usersService.inactiveUsers;           
        });
    }

    onSetToActive(id: number) {
        this.usersService.activateUser(id);
    }
}
