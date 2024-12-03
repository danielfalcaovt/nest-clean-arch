import UserDataBuilder from '../testing/helpers/user-data.builder'
import { User, UserEntity } from './user.entity'

const makeSut = (): UserEntity => {
  const props: User = UserDataBuilder({})
  const sut = new UserEntity(props)
  return sut
}
describe('UserEntity', () => {
  it('Should generate createdAt if not found', () => {
    const sut = makeSut()
    expect(sut.props.createdAt).toBeDefined()
  })
  it('Should get method return the correct value', () => {
    const sut = makeSut()
    expect(sut.props.name).toBe(sut.name)
    expect(sut.props.email).toBe(sut.email)
    expect(sut.props.password).toBe(sut.password)
    expect(sut.props.createdAt).toBe(sut.createdAt)
  })
})
