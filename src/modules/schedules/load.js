import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { scheduleShow } from "../schedules/show.js";

const selectedDate = document.querySelector("#date");

export async function schedulesDay() {
  //obtem a data do input
  const date = selectedDate.value;

  // busca na api os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // exibir os agendamentos
  scheduleShow({ dailySchedules });

  //renderiza as horas disponiveis
  hoursLoad({ date, dailySchedules });
}
