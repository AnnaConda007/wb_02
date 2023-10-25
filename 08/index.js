const createFuncResults = (funcs) => {
  return () => funcs.map((func) => func());
};

const first = () => ["результат первой функции"];
const second = () => ["результат второй функции"];
const thirt = () => [
  "результат третьей функции",
  "и еще один результат третьей функции",
];
const funks = [first, second, thirt];

const data = createFuncResults(funks);
console.log("data:", data());
/*
data: [
  [ 'результат первой функции' ],
  [ 'результат второй функции' ],
  [
    'результат третьей функции',
    'и еще один результат третьей функции'
  ]
]
*/
