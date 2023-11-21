document.addEventListener('DOMContentLoaded', function () {
    var punchInButton = document.querySelector('.punchIn button');
    var punchOutButton = document.querySelector('.punchOut button');

    var punchInMessage = document.createElement('div');
    punchInMessage.id = 'punchInMessage';
    document.getElementById('reloj-container').appendChild(punchInMessage);

    var punchOutMessage = document.createElement('div');
    punchOutMessage.id = 'punchOutMessage';
    document.getElementById('reloj-container').appendChild(punchOutMessage);

    // Verificar la existencia del botón "Punch In" antes de agregar el event listener
    if (punchInButton) {
        punchInButton.addEventListener('click', function () {
            punchInMessage.textContent = 'Successful Clock In';
            setTimeout(function () {
                punchInMessage.textContent = '';
            }, 2000);
        });
    }

    // Verificar la existencia del botón "Punch Out" antes de agregar el event listener
    if (punchOutButton) {
        punchOutButton.addEventListener('click', function () {
            punchOutMessage.textContent = 'Successful Clock Out';
            setTimeout(function () {
                punchOutMessage.textContent = '';
            }, 2000);
        });
    }
});

function actualizarReloj() {
    var ahora = new Date();

    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();

    var dia = ahora.getDate();
    var mes = ahora.getMonth() + 1; // Se suma 1 porque los meses en JavaScript son de 0 a 11
    var año = ahora.getFullYear();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var fechaActual = año + '/' + mes + '/' + dia;
    var horaActual = horas + ':' + minutos + ':' + segundos;

    document.getElementById('reloj').innerHTML = fechaActual + '<br>' + horaActual;
}

setInterval(actualizarReloj, 1000); // Actualizar cada segundo





