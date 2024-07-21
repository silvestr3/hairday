import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.querySelector("#client");
const selectedDate = document.querySelector("#date");

// carregando a data atual e  definindo a data minima
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    // recuperando o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente");
    }

    //recuperando o horario selecionado
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Informe o horario de agendamento");
    }

    // recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //gerando umid
    const id = new Date().getTime();

    console.log({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possivel agendar");
    console.log(error);
  }
};
