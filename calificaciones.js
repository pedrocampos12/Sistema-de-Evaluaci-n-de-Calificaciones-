function calcularPromedio() {
    const nombre = document.getElementById("nombre").value.trim();
    const c1Str = document.getElementById("calif1").value.trim();
    const c2Str = document.getElementById("calif2").value.trim();
    const c3Str = document.getElementById("calif3").value.trim();
    const divResultado = document.getElementById("resultado");

    if (nombre === "" || c1Str === "" || c2Str === "" || c3Str === "") {
        alert("Por favor, completa el nombre del estudiante y las tres calificaciones.");
        divResultado.innerHTML = "";
        return;
    }

    // Convertir calificaciones a número
    const c1 = parseFloat(c1Str);
    const c2 = parseFloat(c2Str);
    const c3 = parseFloat(c3Str);

    // Validar que sean números válidos y entre 0 y 10
    if (isNaN(c1) || isNaN(c2) || isNaN(c3)) {
        alert("Las calificaciones deben ser valores numéricos válidos.");
        divResultado.innerHTML = "";
        return;
    }

    if (c1 < 0 || c1 > 10 || c2 < 0 || c2 > 10 || c3 < 0 || c3 > 10) {
        alert("Todas las calificaciones deben estar en un rango de 0 a 10.");
        divResultado.innerHTML = "";
        return;
    }

    //  Calcular el promedio
    const promedio = (c1 + c2 + c3) / 3;

    // APROBADO / REPROBADO
    let estado = "";
    let observacion = "";
    let claseEstado = "";

    if (promedio >= 9 && promedio <= 10) {
        estado = "APROBADO";
        observacion = "Excelente desempeño";
        claseEstado = "estado-aprobado";
    } else if (promedio >= 8) {
        estado = "APROBADO";
        observacion = "Muy buen desempeño";
        claseEstado = "estado-aprobado";
    } else if (promedio >= 7) {
        estado = "APROBADO";
        observacion = "Buen desempeño";
        claseEstado = "estado-aprobado";
    } else if (promedio >= 6) {
        estado = "APROBADO";
        observacion = "Desempeño suficiente";
        claseEstado = "estado-aprobado";
    } else {
        estado = "REPROBADO";
        observacion = "Necesita mejorar";
        claseEstado = "estado-reprobado";
    }

    // Mostrar resultados 
    divResultado.innerHTML = `
        <p><strong>Estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${c1}, ${c2}, ${c3}</p>
        <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
}