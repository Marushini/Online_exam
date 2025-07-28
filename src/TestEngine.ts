import { Question } from "./models/Question";
import { Answer } from "./models/Answer";
import { Result } from "./models/Result";
import { ScoringStrategy } from "./strategies/ScoringStrategy";
import { Audit } from "./decorators/Audit";

export class TestEngine {
  private questions: Question[] = [];

  constructor(private scoringStrategy: ScoringStrategy) {}

  addQuestion(question: Question) {
    this.questions.push(question);
  }

  @Audit
  submitAnswers(userId: number, answers: Answer[]): Result {
    const score = this.scoringStrategy.calculate(this.questions, answers);
    return new Result(userId, score, this.questions.length);
  }
}
