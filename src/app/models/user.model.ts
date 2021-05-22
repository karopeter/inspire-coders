export class User {
    constructor(public email: string, public id: string, private token: string, private tokenExpirationDate: Date) {}
  }
