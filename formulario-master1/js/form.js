document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573104555239";

  let ASPIRANTE = document.querySelector("#ASPIRANTE").value;
  let EDAD = document.querySelector("#EDAD").value;
  let UBICACION = document.querySelector("#UBICACION").value;
  let EXPERENCIA = document.querySelector("#EXPERENCIA").value;
  let HORARIO = document.querySelector("#HORARIO").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
  INFORMACION BASICA DE ${ASPIRANTE}%0A%0A
		
		¿Cuál es tu nombre?%0A
		${ASPIRANTE}%0A%0A

    ¿Cuál es tu edad?%0A
		${EDAD}%0A%0A

		¿En que barrio de Medellin vives?%0A
		${UBICACION}%0A%0A

		¿tienes experencia como modelo webcam?%0A
		${EXPERENCIA}%0A%0A

		¿En que horario estas interesada?*%0A
		${HORARIO}%0A%0A
    
    adjunto foto`;

  if (ASPIRANTE === "" || EDAD === "" || UBICACION === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${ASPIRANTE}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${ASPIRANTE}`;

  window.open(url);
});
