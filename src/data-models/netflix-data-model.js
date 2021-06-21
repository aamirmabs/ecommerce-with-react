const movies = {
  movie11253: {
    type: {
      movie: {
        isMovie: true,
        duration: 117,
        release: 2019,
      },
    },
    title: {
      text: "Gemini Man",
    },
    rating: {
      id: "rating1125",
      text: "13+",
    },
    personnel: {
      directors: [{ name: "Ang Lee", id: "person5596", priority: 1 }],
      cast: [
        { name: "Will Smith", id: "person5596", priority: 1 },
        { name: "Elizabeth Winstead", id: "person1837", priority: 2 },
        { name: "Clive Owen", id: "person2943", priority: 3 },
        { name: "Benedict Wong", id: "person5555", priority: 3 },
        { name: "Ralph Brown", id: "person6666", priority: 3 },
      ],
      writers: [
        { name: "Derren Lemke", id: "person5596", priority: 1 },
        { name: "David Benioff", id: "person1837", priority: 2 },
        { name: "Billy Ray", id: "person2943", priority: 3 },
      ],
    },
    genres: [
      { id: "genre11223", title: "Spy Movies" },
      { id: "genre55889", title: "Action & Adventure" },
    ],
    characteristics: [{ id: "chars44775", title: "Exciting", priority: 1 }],
  },
};

const numList = [1, 3, 55, 22, 44];

function oddAndEvenSumReducer(accumulator, value) {
  // write your code here

  accumulator = accumulator + value;
  return accumulator;
}

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer);

// console.log(oddAndEvenSum);

const numList2 = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 },
];

// Q: modify your reducer function to accommodate this.

const sumObject = numList2.reduce(
  (acc, val) => {
    if (val.type === "even") acc.evenSum = acc.evenSum + val.payload;
    else if (val.type === "odd") acc.oddSum = acc.oddSum + val.payload;
    return acc;
  },
  { oddSum: 0, evenSum: 0 }
);

console.log(sumObject);
