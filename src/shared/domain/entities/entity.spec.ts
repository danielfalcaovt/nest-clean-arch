import { User, UserEntity } from "@/users/domain/entities/user.entity"
import { faker } from "@faker-js/faker/."

const makeSut = (): UserEntity => {
  const sut = createUserEntity()
  return sut
}

const createUserEntity = (): UserEntity => {
  const props: User = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password()
  }
  class UserEntityStub extends UserEntity {
    constructor(props: User, id?: string) {
      super(props, id);
    }
  }
  return new UserEntityStub(props)
}

describe('Entity', () => {
  it('Should create an id if id not provided', () => {
    const sut = makeSut()
    expect(sut.id).toBeTruthy()
  })
})
