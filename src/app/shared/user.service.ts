import { Injectable, Component } from '@angular/core';

/**
 * Services = services are singleton classes in angular
 * Instance of service will be available for completing lifecycle of angular app.
 * Services are used for managing data/business logic/communicating components.
 */
export interface UserData {
    userId: number;
    id: number;
    title: string;
    completed?: boolean;
}

@Injectable()

export class UserService {
     public userData: UserData;
     constructor() {
            this.userData = {
            userId: 1,
            id: 1,
            title: 'This is for service',
            completed: false
            };
     };

    get userData$() {
        return this.userData;
    }

    set userData$(data) {
        this.userData = data;
    }
}
