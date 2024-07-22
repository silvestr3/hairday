import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";
import dayjs from "dayjs";

const hours = document.querySelector("#hours");

export function hoursLoad({ date, dailySchedules }) {
  //limpa a lista de horarios
  hours.innerHTML = "";

  //recuperando a lista de todos os horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) => {
    return dayjs(schedule.when).format("HH:mm");
  });

  const opening = openingHours.map((hour) => {
    // Recupera somente a hora

    const [scheduleHour, _] = hour.split(":");

    // Adiciona a hora na data e verifica se esta no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });

  //adiciona evento de click nos horarios disponiveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
