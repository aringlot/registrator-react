export class UserModel {
    constructor(login, password = ''){
        this.login = login;
        this.password = password;
    }
}