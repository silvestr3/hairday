export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // removendo a classe selected de todas as li não selecionadas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // adicionando a classe selected ma li selectionada
      selected.target.classList.add("hour-selected");
    });
  });
}
