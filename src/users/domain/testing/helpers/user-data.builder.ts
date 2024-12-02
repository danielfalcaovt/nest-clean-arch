import { faker } from "@faker-js/faker/.";
import { User } from "../../entities/user.entity";

type UserDataBuilderDTO = Partial<User>

export default function UserDataBuilder(user: UserDataBuilderDTO): User {
  return {
    email: user.email ?? faker.internet.email(),
    name: user.name ?? faker.person.fullName(),
    password: user.password ?? faker.internet.password(),
    createdAt: user.createdAt ?? new Date()
  }
}
