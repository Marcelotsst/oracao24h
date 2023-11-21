document.addEventListener("DOMContentLoaded", function() {
    const horariosLista = document.getElementById("horarios-lista");

    for (let i = 0; i < 96; i++) {
        const horario = formatarHorario(i * 15);
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.textContent = `Reservar ${horario}`;
        button.addEventListener("click", function() {
            const nome = prompt("Digite seu nome:");
            if (nome) {
                button.textContent = `${horario}: ${nome}`;
                button.disabled = true;
            }
        });

        li.appendChild(button);
        horariosLista.appendChild(li);
    }
});

function formatarHorario(minutos) {
    const horas = Math.floor(minutos / 60).toString().padStart(2, "0");
    const mins = (minutos % 60).toString().padStart(2, "0");
    return `${horas}:${mins}`;
}
