import { schedulesDay } from "../schedules/load.js";

// selectiona date input
const selectedDate = document.querySelector("#date");

//recarrega a lista de horario quando o input ded data mudar
selectedDate.onchange = () => schedulesDay();
