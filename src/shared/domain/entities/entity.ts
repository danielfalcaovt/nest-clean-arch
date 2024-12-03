import { randomUUID } from 'crypto'

export abstract class Entity<Props = any> {
  private readonly _id: string
  private readonly _props: Props

  public constructor(props: Props, id?: string) {
    this._props = props
    this._id = id || randomUUID()
  }

  public get id(): string {
    return this._id
  }

  public get props(): Props {
    return this._props
  }

  public toJSON = (): Required<{ id: string } & Props> =>
    ({
      id: this._id,
      ...this._props,
    }) as Required<{ id: string } & Props>
}
