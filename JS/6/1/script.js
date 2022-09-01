let array = [
  { brand: "opel", model: "ascona", color: "red" },
  { brand: "ford", model: "mondeo", color: "#005588" },
  { brand: "honda", model: "civic", color: "#000000" },
  { brand: "kia", model: "ceed", color: "rgb(255,255,0)" },
];

for (let i = 0; i < array.length; i++) {
  let body = document.body;
  body.append = `<p style="background-color: ${array[i].color}"> brand: ${array[i].brand}, model: ${array[i].model}</p>`;
}