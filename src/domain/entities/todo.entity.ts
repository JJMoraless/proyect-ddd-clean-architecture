export class TodoEntity {
  constructor(
    public id: number,
    public text: string,
    public completedAt?: Date | null,
  ) {}

  getIsCompleted() {
    return !!this.completedAt
  }

  public static fromObject(object: { [key: string]: any }): TodoEntity {
    const { id, text, completedAt } = object
    if (!id) throw 'Id is required'
    if (!text) throw 'Text is required'
    const newCompletedAt = new Date(completedAt)
    if (completedAt) {
      if (isNaN(newCompletedAt.getTime())) {
        throw 'Invalid date'
      }
    }
    return new TodoEntity(id, text, newCompletedAt)
  }
}
