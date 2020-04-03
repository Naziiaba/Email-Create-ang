import { Injectable, Component } from '@angular/core';

/**
 * Services = services are singleton classes in angular
 * Instance of service will be available for completing lifecycle of angular app.
 * Services are used for managing data/business logic/communicating components.
 */

@Injectable()

export class UserService {
     userData: any;
     constructor() {
            this.userData = {
             userId: 1,
            id: 1,
            title: 'delectus',
            completed: false
            };
     }

    get userData$() {
        return this.userData;
    }

    set userData$(data) {
        this.userData = data;
    }
}
