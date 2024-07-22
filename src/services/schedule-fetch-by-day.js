import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    //Fazendo a request para buscar os dados do agendamento
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const data = await response.json();

    //filtra os agendamentos pelo dia

    const dailySchedules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.when, "day");
    });

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possivel buscar os agendamentos do dia selecionado");
  }
}
