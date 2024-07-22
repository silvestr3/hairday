import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");

//gerar evento de click para cada lista

periods.forEach((period) => {
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      // obter a li pai do elemento clicado

      const item = e.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar este agendamento?"
        );

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
