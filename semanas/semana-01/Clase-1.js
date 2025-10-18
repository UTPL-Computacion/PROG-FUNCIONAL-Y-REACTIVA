// Semana 1 - Paradigmas de Programación
// Ejemplos utilizados en la presentación + ejercicios prácticos adicionales.

// Variables y tipos
{
  const curso = "Programación Funcional";
  let estudiantes = 30;
  let enLinea = true;
  const temas = ["Paradigmas", "Funciones"];
  const docente = { nombre: "Charlie", grado: "M.Sc." };

  console.log(curso, estudiantes, enLinea, temas, docente);
}

// Control de flujo básico
{
  const calificacion = 88;

  if (calificacion >= 90) {
    console.log("Excelente");
  } else if (calificacion >= 70) {
    console.log("Suficiente");
  } else {
    console.log("Refuerzo necesario");
  }

  for (let i = 0; i < 3; i++) {
    console.log(`Iteración ${i}`);
  }
}

// Funciones tradicionales y de flecha
{
  function saludar(nombre) {
    return `Hola ${nombre}`;
  }

  const despedir = (nombre) => `Adiós ${nombre}`;

  console.log(saludar("Ana"));
  console.log(despedir("Luis"));
}

// Métodos de arreglos: map, filter, reduce
{
  const numeros = [1, 2, 3, 4];

  const dobles = numeros.map((n) => n * 2);
  const pares = numeros.filter((n) => n % 2 === 0);
  const suma = numeros.reduce((acc, n) => acc + n, 0);

  console.log("Dobles:", dobles);
  console.log("Pares:", pares);
  console.log("Suma:", suma);
}

// Objetos y desestructuración
{
  const proyecto = {
    nombre: "Calculadora FP",
    versiones: ["alpha", "beta"],
  };

  const { nombre, versiones } = proyecto;
  const versionActual = versiones.at(-1);

  console.log(nombre, versionActual);
}

// Catálogo legible con map + join
{
  const productos = [
    { nombre: "Teclado", precio: 45 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Monitor", precio: 180 },
  ];

  const etiquetas = productos
    .map((producto) => `${producto.nombre} - $${producto.precio}`)
    .join("\n");

  console.log(etiquetas);
}

// Paradigma imperativo: suma manual
{
  const lista = [2, 4, 6, 3];
  let suma = 0;

  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }

  console.log(suma);
}

// Paradigma declarativo: suma con reduce
{
  const lista = [2, 4, 6, 3];
  const suma = lista.reduce((total, numero) => total + numero, 0);

  console.log(suma);
}

// Paradigma funcional: sumar pares
{
  const sumarPares = (lista) =>
    lista.filter((numero) => numero % 2 === 0).reduce((total, numero) => total + numero, 0);

  console.log(sumarPares([2, 4, 6, 3]));
}

// Funciones puras
{
  const sumar = (a, b) => a + b;
  console.log(sumar(2, 2));
}

// Inmutabilidad con arreglos
{
  const lenguajes = ["Haskell", "Scala"];
  const nuevos = [...lenguajes, "Elixir"];

  console.log(lenguajes);
  console.log(nuevos);
}

// Composición de funciones
{
  const limpiar = (texto) => texto.trim();
  const enMayusculas = (texto) => texto.toUpperCase();
  const saludo = (nombre) => `Hola ${enMayusculas(limpiar(nombre))}!`;

  console.log(saludo("  mundo functional "));
}

// Imperativo vs funcional
{
  const numeros = [1, 2, 3, 4, 5, 6];

  let resultadoImperativo = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      resultadoImperativo.push(numeros[i] * 10);
    }
  }

  const resultadoFuncional = numeros
    .filter((n) => n % 2 === 0)
    .map((n) => n * 10);

  console.log(resultadoImperativo);
  console.log(resultadoFuncional);
}

// Resumen de asistencia
{
  const estudiantes = [
    { nombre: "María", asistencia: true },
    { nombre: "Juan", asistencia: false },
    { nombre: "Ana", asistencia: true },
  ];

  const resumen = estudiantes
    .filter((estudiante) => estudiante.asistencia)
    .map((estudiante) => `✅ ${estudiante.nombre}`);

  console.log(resumen);
}

// Refactorización de pedidos (imperativo original)
{
  const pedidos = [
    { id: 101, estado: "listo", total: 45.5 },
    { id: 102, estado: "pendiente", total: 30.0 },
    { id: 103, estado: "listo", total: 27.8 },
    { id: 104, estado: "pendiente", total: 62.1 },
  ];

  let idsListos = [];
  let totalListos = 0;

  for (let i = 0; i < pedidos.length; i++) {
    const pedido = pedidos[i];
    if (pedido.estado === "listo") {
      idsListos.push(pedido.id);
      totalListos += pedido.total;
    }
  }

  console.log(idsListos);
  console.log(totalListos);
}

// Refactorización de pedidos (versión funcional)
{
  const pedidos = [
    { id: 101, estado: "listo", total: 45.5 },
    { id: 102, estado: "pendiente", total: 30.0 },
    { id: 103, estado: "listo", total: 27.8 },
    { id: 104, estado: "pendiente", total: 62.1 },
  ];

  const resumenPedidos = pedidos
    .filter((pedido) => pedido.estado === "listo")
    .reduce(
      (acc, pedido) => ({
        ids: [...acc.ids, pedido.id],
        total: acc.total + pedido.total,
      }),
      { ids: [], total: 0 }
    );

  console.log(resumenPedidos);
}

// ================================
// Ejemplos prácticos adicionales
// ================================

// Promedio de calificaciones con reduce
{
  const calificaciones = [95, 82, 77, 100, 68];
  const promedio =
    calificaciones.reduce((acc, nota) => acc + nota, 0) / calificaciones.length;

  console.log(`Promedio: ${promedio.toFixed(2)}`);
}

// Normalizar nombres con trim y toUpperCase
{
  const nombres = ["  Ana  ", "luis", "Beatriz   "];
  const nombresNormalizados = nombres
    .map((nombre) => nombre.trim())
    .map((nombre) => nombre[0].toUpperCase() + nombre.slice(1).toLowerCase());

  console.log(nombresNormalizados);
}

// Buscar productos disponibles
{
  const inventario = [
    { sku: "A1", stock: 3 },
    { sku: "B2", stock: 0 },
    { sku: "C3", stock: 12 },
  ];

  const disponibles = inventario.filter((item) => item.stock > 0);
  console.log(disponibles);
}

// Registrar compra sin mutar el carrito
{
  const carrito = [
    { producto: "Laptop", cantidad: 1 },
    { producto: "Mouse", cantidad: 2 },
  ];

  const nuevaLinea = { producto: "Teclado", cantidad: 1 };
  const carritoActualizado = [...carrito, nuevaLinea];

  console.log(carrito);
  console.log(carritoActualizado);
}

// Contar asistencias usando filter y length
{
  const sesiones = [
    { dia: "Lunes", asistentes: ["Ana", "Luis", "María"] },
    { dia: "Miércoles", asistentes: ["Ana", "Marcos"] },
    { dia: "Viernes", asistentes: ["María", "Luis", "Elena", "Ana"] },
  ];

  const sesionesConAna = sesiones.filter((sesion) =>
    sesion.asistentes.includes("Ana")
  );

  console.log(`Ana asistió a ${sesionesConAna.length} sesiones.`);
}

