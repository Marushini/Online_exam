export enum QuestionType {
  MULTIPLE_CHOICE,
  TRUE_FALSE,
}

export class Question {
  constructor(
    public id: number,
    public text: string,
    public correctAnswer: string,
    public type: QuestionType
  ) {}
}
