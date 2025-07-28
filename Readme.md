
---

### 📄 `README.md`

```markdown
# 📝 Online Exam System (TypeScript)

This project is a simulation of a simple online examination system built using **TypeScript**, applying **OOP principles**, the **Strategy Design Pattern**, and **Decorators**.

---

## 📦 Features

- Models for:
  - User
  - Question
  - Answer
  - Result
- `TestEngine` class that:
  - Accepts user answers
  - Calculates scores using a scoring strategy
  - Logs submissions using a custom `@Audit` decorator
- Strategy pattern support for different scoring methods (e.g., exact match)
- Decorators used to log method actions (e.g., audit logs)
- Simulation script in `main.ts`

---

## 🛠️ Project Structure

```

online-exam-system/
├── src/
│   ├── models/          # Interfaces and classes for Question, Answer, User, Result
│   ├── strategies/      # Scoring strategy implementations
│   ├── decorators/      # Custom decorators like @Audit
│   ├── TestEngine.ts    # Main class that evaluates the test
│   └── main.ts          # Script that simulates a user taking the test
├── tsconfig.json
├── package.json
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/online-exam-system.git
cd online-exam-system
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project

```bash
npx ts-node-dev src/main.ts
```

If decorators don't work, ensure your `tsconfig.json` has this enabled:

```json
"experimentalDecorators": true
```

---

## 📊 Example Output

```
[AUDIT] Method "submitAnswers" called at 2025-07-28T11:00:00.000Z
User Score: 2/2
```

---

## ✅ Technologies Used

* TypeScript
* Node.js
* OOP (Classes, Interfaces, Enums)
* Strategy Design Pattern
* Custom Method Decorators

---

## 🧪 Sample Scoring Strategy

Implemented: `ExactMatchScoring`
You can add others like `PartialCreditScoring` easily via the strategy interface.

---

## 🤝 Contribution

This is part of a MERN training assignment. Feedback or ideas are welcome!

---

## 📬 Submission

Please submit your GitHub repo link in the comments section of the training stream post.

```
