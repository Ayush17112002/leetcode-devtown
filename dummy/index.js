export default [
  {
    id: 1,
    statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
    difficulty: "Easy",
    sampleTestCase: [{ input: "4\n2 7 11 15", output: "2 7 11 15\n" }],
    hiddenTestCase: [{ input: "5\n2 7 11 15 6", output: "2 7 11 15 6\n" }],
    starterCode:
      "#include<bits/stdc++.h>\nusing namespace std;\nint main(){\ncout<<2;\nreturn 0;\n}",
    name: "Two Sum",
    constraints: ["1 <= a <= 10^9", "1 <= b <= 10^9", "1 <= c <= 10^9"],
    tags: ["greedy", "arrays"],
  },
];
