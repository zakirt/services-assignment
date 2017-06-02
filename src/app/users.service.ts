import { Injectable, EventEmitter } from '@angular/core';
import { StatusCounterService } from './status-counter.service';
import { UserModel } from './user.model';

@Injectable()
export class UsersService {
    users: UserModel[] = [
        new UserModel(1, 'Max', true),
        new UserModel(2, 'Manu', false),
        new UserModel(3, 'Anna', true),
        new UserModel(4, 'Chris', false)
    ];
    userStatusChanged: EventEmitter<number> = new EventEmitter<number>();

    constructor(private statusCounterService: StatusCounterService) { }

    activateUser(id: number) {
        let i = this.users.findIndex(user => user.id === id);
        this.users[i].active = true;
        this.userStatusChanged.emit(id);       
        this.statusCounterService.updateActivateCounter();
    }

    deactivateUser(id: number) {
        let i = this.users.findIndex(user => user.id === id);
        this.users[i].active = false;
        this.userStatusChanged.emit(id);
        this.statusCounterService.updateDeactivateCount();
    }

    get activeUsers() {
        return this.users.filter(user => user.active); 
    }

    get inactiveUsers() {
        return this.users.filter(user => !user.active);
    }
}