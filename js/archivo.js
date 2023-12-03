function actualizarReloj() {
    const fecha = new Date();
  
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const nombreDia = diasSemana[fecha.getDay()];
  
    const dia = fecha.getDate();
    const mes = fecha.toLocaleString('default', { month: 'long' });
    const año = fecha.getFullYear();
  
    const fechaMostrar = `${nombreDia} ${dia} de ${mes} del ${año}`;
    document.getElementById('fecha').innerHTML = fechaMostrar;
  
    let hora = fecha.getHours();
    const ampm = hora >= 12 ? 'PM' : 'AM';
    hora = hora % 12;
    hora = hora ? hora : 12;
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
  
    const horaMostrar = `${hora}:${minutos}:${segundos < 10 ? '0' : ''}${segundos} ${ampm}`;
    document.getElementById('hora').innerHTML = horaMostrar;
  }
  
  actualizarReloj();
  setInterval(actualizarReloj, 1000);
  