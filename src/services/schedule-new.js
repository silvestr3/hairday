import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    });

    alert("Agendado com sucesso");
  } catch (error) {
    alert("Nao foi possivel agendar");
    console.log(error);
  }
}
