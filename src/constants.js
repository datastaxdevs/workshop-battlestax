/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
module.exports = {
  // settings
  MINIMUM_PLAYERS: 3,
  MAXIMUM_PLAYERS: 8,
  BASE_POINTS: 50,
  GAME_ID_DICTIONARY: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  GAME_ID_LENGTH: 4,
  SHORT_ID_DICTIONARY:
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  SHORT_ID_LENGTH: 8,
  LOCAL_STORAGE_KEY: "redux",

  // timers
  POLLING_INTERVAL: 3000,
  TUTORIAL_LENGTH: 10000,
  ROUND_INPUT_TIMER: 60000,
  ROUND_VOTE_TIMER: 60000,
  ROUND_SCORE_TIMER: 10000,

  // game states
  ADDING_PLAYERS_PAGE: "addingPlayers",
  TUTORIAL_PAGE: "tutorial",
  ROUND_INPUT_PAGE: "roundInput",
  ROUND_VOTE_PAGE: "roundVote",
  ROUND_SCORE_PAGE: "roundScore",
  FINAL_PAGE: "final",

  // gameplay
  ROUNDS: [
    {
      id: 1,
      title: "Round One",
      scoreMultiplier: 1,
      content: [
        "_____: kid tested, mother approved.",
        "What is the next Happy Meal Toy?",
        "What gets better with age?",
        "This is your captain speaking. Fasten your seatbelts and prepare for _____.",
        "I've got 99 problems but _____ ain't one.",
        "What is next in 2020?",
        "What is fun until it gets weird?",
        "The title of the shortest book on earth.",
      ],
    },
    // {
    //   id: 2,
    //   title: "Final Round",
    //   scoreMultiplier: 2,
    //   content: [
    //     "The most expensive software ever imagined.",
    //     "The most awkward moment in earth's history.",
    //     "No. NO. NO! I will not let _____ ruin my day.",
    //     "The real reason that Elon Musk started SpaceX.",
    //     "The one thing that will prevent us from reaching 2021.",
    //     "The title of a movie that everyone secretly loves, but will never admit to.",
    //     "The end of the Silicon Valley will come from _____.",
    //     "The most annoying thing about Twitter.",
    //   ],
    // },
  ],
};
