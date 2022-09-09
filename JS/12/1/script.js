const cool_array = [
  [
    [
      [[[1], [2], ["2a"], [3]]],
      [[[4], ["4c"], [5], [6], ["6b"]]],
      [[[7], [8], [9], ["9a"], ["9b"], ["9c"], ["9d"]]],
    ],
    [[[[10], [11], [12]]], [[[13], [14], [15]]], [[[16], [17], [18]]]],
  ],
];

for (const i of cool_array) {
    for (const j of i) {
        for (const k of j) {
            for (const l of k) {
                for (const m of l) {
                    for (const n of m) {
                        console.log(n);
                      }
                  }
              }
          }
      }
  }

// for (let i = 0; i < cool_array.length; i++) {
//     value = cool_array[i]
//     // console.log(value)
//   for(let j = 0; j < i; j++) {
//     value2 = value[j]
//     console.log(cool_array[i[j]])
//   }
// }
