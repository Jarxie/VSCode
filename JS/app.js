function getCard() {
  const cardVal = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  const valIdx = Math.floor(Math.random() * cardVal.length);
  const val = cardVal[valIdx];

  const cardSuit = ["clubs", "spades", "hearts", "diamonds"];

  const suitIdx = Math.floor(Math.random() * cardSuit.length);
  const suit = cardSuit[suitIdx];

  console.log(`${val} of ${suit}`);
}
