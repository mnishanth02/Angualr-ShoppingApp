export class User {
  constructor(
    public email: String,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

}
