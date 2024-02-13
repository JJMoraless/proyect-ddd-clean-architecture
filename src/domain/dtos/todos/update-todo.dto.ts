export class UpdateTodoDto {
  private constructor(
    public readonly id: number,
    public readonly text?: string,
    public readonly completedAt?: Date,
  ) {}

  getValues() {
    const returnObj: { [key: string]: any } = {}
    if (this.text) returnObj.text = this.text
    if (this.completedAt) returnObj.completedAt = this.completedAt
    return returnObj
  }
  static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
    const { text, completedAt, id } = props
    if (!id || isNaN(Number(id))) return ['id must be a valid number']

    const newCompletedAt = new Date(completedAt)
    if (typeof text !== 'string') return ['text must be a string']
    if (completedAt) {
      if (newCompletedAt.toString() === 'Invalid Date') {
        return ['completedAt must be a valid date']
      }
    }
    return [undefined, new UpdateTodoDto(id, text, completedAt)]
  }
}
