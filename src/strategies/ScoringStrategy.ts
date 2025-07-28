import { Question } from "../models/Question";
import { Answer } from "../models/Answer";

export interface ScoringStrategy {
  calculate(questions: Question[], answers: Answer[]): number;
}

export class ExactMatchScoring implements ScoringStrategy {
  calculate(questions: Question[], answers: Answer[]): number {
    let score = 0;
    for (const q of questions) {
      const userAns = answers.find(a => a.questionId === q.id);
      if (userAns && userAns.userAnswer === q.correctAnswer) {
        score++;
      }
    }
    return score;
  }
}
