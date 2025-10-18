// Semana 2 - Funciones y Expresiones Lambda
// Ejemplos alineados al compendio de funciones puras, lambdas y recursión.

// Funciones puras vs. funciones impuras
{
  const aplicarDescuento = (precio, porcentaje) => precio * (1 - porcentaje);

  let totalCarrito = 0;
  const agregarAlCarrito = (precio) => {
    totalCarrito += precio; // Efecto secundario: muta estado externo
    return totalCarrito;
  };

  console.log("Descuento puro:", aplicarDescuento(100, 0.2));
  console.log("Carrito impuro:", agregarAlCarrito(25));
  console.log("Carrito impuro:", agregarAlCarrito(50));
}

// Funciones de orden superior con lambdas
{
  const productos = [
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 220 },
    { nombre: "Mouse", precio: 25 },
  ];

  const etiquetas = productos
    .filter((producto) => producto.precio >= 40)
    .map((producto) => `${producto.nombre}: $${producto.precio}`);

  console.log("Etiquetas filtradas:", etiquetas);
}

// Currificación y aplicación parcial
{
  const aplicarImpuesto = (tasa) => (valor) => valor * (1 + tasa);
  const aplicarIVA = aplicarImpuesto(0.12);
  const aplicarIVAPreferencial = aplicarImpuesto(0.08);

  console.log("IVA general:", aplicarIVA(100));
  console.log("IVA preferencial:", aplicarIVAPreferencial(100));
}

// Recursión con memoización
{
  const fibonacci = (n, cache = {}) => {
    if (n < 2) return 1;
    if (cache[n]) return cache[n];
    cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    return cache[n];
  };

  console.log("Fibonacci(10):", fibonacci(10));
}

// Refactorización imperativa a declarativa
{
  const lista = [2, 5, 8, 13, 21, 34];

  const sumarParesImperativo = (numeros) => {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        total += numeros[i];
      }
    }
    return total;
  };

  const sumarParesFuncional = (numeros) =>
    numeros
      .filter((numero) => numero % 2 === 0)
      .reduce((acc, numero) => acc + numero, 0);

  console.log("Imperativo:", sumarParesImperativo(lista));
  console.log("Funcional:", sumarParesFuncional(lista));
}

// Componer transformaciones con funciones puras
{
  const normalizar = (texto) => texto.trim().toLowerCase();
  const capitalizar = (texto) => texto[0].toUpperCase() + texto.slice(1);
  const limpiarNombre = (nombre) => capitalizar(normalizar(nombre));

  const nombresCrudos = ["  ANA", " juan ", "LuIs   "];
  const nombresLimpios = nombresCrudos.map(limpiarNombre);

  console.log("Nombres normalizados:", nombresLimpios);
}

// Aislar efectos secundarios
{
  const registrarOperacion = (mensaje) =>
    console.log(`[LOG ${new Date().toISOString()}] ${mensaje}`);

  const calcularPromedio = (numeros) =>
    numeros.reduce((acc, numero) => acc + numero, 0) / numeros.length;

  const notas = [90, 85, 95];
  const promedio = calcularPromedio(notas);
  registrarOperacion(`Promedio calculado: ${promedio.toFixed(2)}`);
}
