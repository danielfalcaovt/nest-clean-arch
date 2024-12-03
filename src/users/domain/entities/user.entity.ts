import { Entity } from "@/shared/domain/entities/entity"

export type User = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity extends Entity<User> {
  public constructor(private readonly user: User, id?: string) {
    super(user, id)
    this.user.createdAt = this.user.createdAt ?? new Date()
  }

  public get name() {
    return this.user.name
  }

  private set name(name: string) {
    this.user.name = name
  }

  public get email() {
    return this.user.email
  }


  private set email(email: string) {
    this.user.email = email
  }


  public get createdAt() {
    return this.user.createdAt
  }


  private set createdAt(createdAt: Date) {
    this.user.createdAt = createdAt
  }

  public get password() {
    return this.user.password
  }


  private set password(password: string) {
    this.user.password = password
  }
}
