import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date");

export function schedulesDay() {
  //obtem a data do input
  const date = selectedDate.value;

  //renderiza as horas disponiveis

  hoursLoad({ date });
}
