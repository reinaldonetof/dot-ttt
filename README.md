# 🧠 Tic Tac Toe Unbeatable

Welcome to **Tic Tac Toe Unbeatable** — a React Native game where you can play:
- 👤 vs 👤 (Player vs Player)
- 👤 vs 🤖 (Player vs CPU)
- 🤖 vs 👤 (CPU vs Player)
- 🤖 vs 🤖 (CPU vs CPU)

Built with a strong focus on gameplay experience and an unbeatable AI using the **Minimax algorithm**.

## Getting Started

#### 1. Clone the repo

```bash
git clone https://github.com/reinaldonetof/dot-ttt
cd dot-ttt
```

#### 2. Install dependencies
```bash
npm install
# or
yarn
``` 
#### 3. Run the app
```bash
npm run ios
# or
npx expo start
``` 

## Technical Approach
### Game Structure
- The board is represented by 9 positions, indexed from 1 to 9.
- The state of the game is split into two arrays: player1Selection and player2Selection, each containing the positions selected by that player.
- After each move, the game checks if there's a winner or if the match ended in a draw.

### Minimax Algorithm (Unbeatable AI)
- The CPU makes its moves based on the Minimax algorithm, which recursively evaluates all possible game states and assigns scores to each:

  - Win → +10
  - Loss → -10
  - Draw → 0

- The AI will always choose the move that maximizes its score while minimizing the player's chances.
---
### The algorithm works whether the CPU starts the game or plays second.
---


### Symbol Customization
Players can choose from a set of emojis to represent their symbols:
```ts
["❌", "⭕", "🚀", "🚗", "👍", "👎", "🐶", "🐱"]
```

A modal interface allows players to select their icons dynamically before starting the game.


## 🛠️ Tools & Tech
⚛️ React Native (Expo) – for cross-platform mobile development

💡 TypeScript – provides type safety and better developer experience

🤖 Minimax Algorithm – for an unbeatable AI player

🧪 Jest – for unit testing logic such as win conditions and AI decisions

## ✨ Features
- Choose between three game modes:

  - 👤 vs 👤 (Human vs Human)
  - 👤 vs 🤖 (Human vs CPU)
  - 🤖 vs 👤 (CPU vs Human)
  - 🤖 vs 🤖 (CPU vs Human)
- Unbeatable CPU using the Minimax algorithm
- Select custom player symbols (❌, ⭕, 🚀, 🐶, etc.)
- Modal interface for symbol customization

## 🧪 Tests
To run unit tests:

```bash
npm run test
# or
yarn test
```

### Test coverage includes:
- Win condition detection
- Draw detection
- CPU decisions through the Minimax algorithm
- Random first moves (when enabled)