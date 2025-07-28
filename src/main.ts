import { Question, QuestionType } from "./models/Question";
import { Answer } from "./models/Answer";
import { ExactMatchScoring } from "./strategies/ScoringStrategy";
import { TestEngine } from "./TestEngine";

const engine = new TestEngine(new ExactMatchScoring());

engine.addQuestion(new Question(1, "2 + 2 = ?", "4", QuestionType.MULTIPLE_CHOICE));
engine.addQuestion(new Question(2, "Sun rises in the East?", "true", QuestionType.TRUE_FALSE));

const answers: Answer[] = [
  { questionId: 1, userAnswer: "4" },
  { questionId: 2, userAnswer: "true" }
];

const result = engine.submitAnswers(101, answers);
console.log(`User Score: ${result.score}/${result.total}`);
