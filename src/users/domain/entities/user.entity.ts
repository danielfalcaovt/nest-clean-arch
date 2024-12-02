export type User = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

export class UserEntity {
  public constructor(public readonly user: User) {
    this.user.createdAt = this.user.createdAt ?? new Date()
  }

  public get name() {
    return this.user.name;
  }


  public get email() {
    return this.user.name;
  }

  public get createdAt() {
    return this.user.name;
  }

  public get password() {
    return this.user.password;
  }
}
