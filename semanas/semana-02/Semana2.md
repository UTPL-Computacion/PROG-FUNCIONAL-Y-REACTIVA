Compendio Exhaustivo sobre Funciones y Programación Funcional
1. Funciones: Desde las funciones matemáticas hacia la programación funcional
Funciones en la Programación
Una función en el contexto de la programación es una porción de código separada capaz de causar algún efecto o evaluar un valor o algunos valores. Las funciones pueden ser incorporadas en el lenguaje (como print()), provenir de módulos o ser escritas directamente por el programador.
En Python, la sintaxis de una función requiere la palabra reservada def, seguida del nombre de la función, un par de paréntesis (con o sin argumentos), y dos puntos. La función puede aceptar argumentos (datos que recibe para modificar su comportamiento). La invocación de una función es la conjunción de su nombre, los paréntesis y los argumentos. Una función utiliza la instrucción return (retornar) para devolver un valor al punto donde fue invocada.
Funciones Matemáticas vs. Funciones en Programación
Aunque las funciones de programación tienen parentesco con conceptos matemáticos (como seno o logaritmo), existen diferencias fundamentales. Las funciones en programación son generalmente más flexibles.
Una distinción clave radica en el efecto:
Una función (en este contexto) es una parte separada del código de computadora el cual es capaz de:  Causar algún efecto (por ejemplo, enviar texto a la terminal, crear un archivo, dibujar una imagen, reproducir un sonido, etc.); esto es algo completamente inaudito en el mundo de las matemáticas.
Además, las funciones en la programación imperativa (el estilo más común) pueden tener efectos secundarios, como cambiar el valor de variables globales o pasadas por referencia, a diferencia de una función matemática.
En cuanto al dominio y codominio, aunque comparten el concepto, la programación se ve limitada por la arquitectura subyacente. Por ejemplo, en programación no se pueden representar números infinitamente largos. Los valores de objetos en Python, incluso con soporte para todos los enteros y valores de punto flotante IEEE-754, representan un conjunto contable, lo que significa que no pueden incluir la totalidad de los números reales (R).
El paradigma de la programación funcional busca cerrar esta brecha al imitar más de cerca el comportamiento de las funciones matemáticas, en particular evitando los efectos secundarios.
2. Desde las funciones matemáticas hacia la programación funcional
La programación funcional (PF) es un paradigma de programación declarativa. Mientras que la programación imperativa se enfoca en el "cómo" lograr algo (describiendo paso a paso las instrucciones), la PF se centra en describir qué queremos lograr.
Federico Kereki señala que la programación funcional tiene orígenes en el "cálculo lambda" (o "cálculo λ"), inventado por el matemático Alonzo Church en los años 30, antes de que existieran las computadoras programables.
La PF se define como un paradigma para construir programas utilizando expresiones y funciones puras que se aplican en secuencia para resolver problemas. Esta rama de la programación se basa en la definición y evaluación de funciones, y típicamente evita el concepto de variables cuyo contenido puede cambiar durante la ejecución.
3. Funciones Puras
Concepto y Definición
Las funciones puras son un concepto esencial en la programación funcional. Una función pura, o pure function, es aquella que, para un mismo conjunto de parámetros de entrada, siempre produce el mismo resultado.
Kariuki (2024) explica que una función pura es "una función determinista que, cuando se le dan los mismos valores de entrada, devolverá la misma salida y no afectará a ninguna otra parte de las aplicaciones".
La clave para que una función sea considerada pura es la ausencia de efectos colaterales.
Características de las Funciones Puras
La pureza de una función se basa en dos características principales:
1. Determinismo y Resultados Consistentes: El resultado debe depender únicamente de sus argumentos de entrada. Esto hace que el resultado sea predecible y constante. Si una función se invoca con los mismos parámetros, siempre retornará el mismo resultado.
2. Ausencia de Efectos Secundarios: Las funciones puras no alteran el estado del sistema o "del mundo externo". Esto implica que no deben realizar acciones como:
    ◦ Cambiar una base de datos.
    ◦ Crear o modificar archivos.
    ◦ Modificar variables globales o cualquier dato que exista fuera de su alcance.
    ◦ Interactuar con interfaces de red.
La inmutabilidad de los datos es un principio estrechamente relacionado con las funciones puras, ya que "las funciones que operan sobre datos inmutables no cambian el estado de esos datos". Las funciones puras dependen de la inmutabilidad.
Funciones Impuras Las funciones que no cumplen con los criterios anteriores se denominan funciones impuras. Estas pueden producir "efectos secundarios" o depender de variables externas, lo que las hace menos predecibles y más difíciles de probar.
Las funciones que no poseen las características de las funciones puras se denominan funciones impuras. Estas pueden generar efectos secundarios o depender de variables externas, lo que las hace menos predecibles y más difíciles de probar y mantener.
Debe evitarse que una función pura invoque a una función impura, ya que esto rompería la pureza de la función.
4. Funciones vs. Métodos
En Python y en el paradigma de Programación Orientada a Objetos (POO), se distingue entre funciones y métodos.
Característica
Función
Método
Pertenencia
No pertenece a ningún dato; es propiedad de todo el código.
Es propiedad de los datos para los que trabaja (pertenece a una clase o a un objeto).
Efecto/Estado
Obtiene datos, puede crear nuevos datos, y usualmente produce un resultado. No cambia el estado de una entidad seleccionada.
Puede cambiar el estado de una entidad seleccionada.
Invocación
Típicamente: resultado = funcion(argumento).
Típicamente: resultado = data.method(arg) (precedido por el nombre del dato y un punto).
Parámetro self
No requerido.
Obligado a tener al menos un parámetro, usualmente llamado self, que accede a las propiedades y actividades del objeto.
En esencia, un método es un tipo específico de función que está encapsulado junto con los datos dentro de una clase, reflejando una forma diferente de pensar en la organización del código.
5. Primeros pasos en un lenguaje de programación funcional
La programación funcional es compatible con muchos lenguajes (lenguajes impuros como Python, Java, Rust), pero se implementa por completo en lenguajes puramente funcionales como Haskell. Otros lenguajes funcionales incluyen LISP, Scheme, F#, Scala, y Clojure.
Características clave de la Programación Funcional
Para dar los primeros pasos, es crucial familiarizarse con los siguientes conceptos que definen la PF:
1. Funciones de Primer Orden y de Orden Superior: En PF, las funciones son tratadas como ciudadanos de primera clase. Esto significa que pueden ser pasadas como argumentos, retornadas por otras funciones y almacenadas en variables. Las funciones de orden superior son aquellas que aceptan una o más funciones como argumentos y/o devuelven una función.
2. Inmutabilidad: El valor de una variable no puede cambiar una vez creado. Si se requiere una modificación, se debe crear una nueva estructura de datos. Este principio promueve la seguridad y facilita la concurrencia.
3. Recursión: En lugar de utilizar bucles (for, while), la PF utiliza la recursión para realizar iteraciones. La recursividad ocurre cuando una función se invoca a sí misma hasta que se cumple una condición de terminación.
4. Currificación (Aplicación Parcial de Argumentos): Una técnica, originada por Moses Schönfinkel y Gottlob Frege, que consiste en transformar una función que usa múltiples argumentos en una secuencia de funciones que usan un único argumento. F#, por ejemplo, permite esta técnica; si se provee un número menor de argumentos que el esperado, se crea una nueva función que espera los argumentos restantes.
6. Desarrollo de ejercicios prácticos
Para ejemplificar la aproximación funcional, se muestra la diferencia entre el paradigma imperativo y el declarativo (funcional) en el problema de sumar los números pares de una lista.
A. Ejemplo de Función con Recursividad (Serie Fibonacci)
Un ejemplo clásico de función recursiva es el cálculo de la Serie Fibonacci, donde cada número es la suma de los dos anteriores.
Ejemplo en F# (Recursividad):
// Definición de función recursiva en F# [64]
let rec fib n = if n < 2 then 1 else fib (n - 1) + fib (n - 2) [64]
Según (CISCO, n.d.-a), "al emplear la recursividad, se deben de tomar en cuenta tanto sus ventajas como desventajas". Si no se establece una condición para detener las invocaciones recursivas, se puede caer en un bucle infinito, provocando un error de RecursionError.
B. Ejemplo de Refactorización: Suma de Números Pares (Imperativo a Funcional)
El proceso de refactorización funcional busca convertir una solución imperativa en una puramente funcional, a menudo utilizando la recursión y funciones de orden superior.
Problema: Dada una lista de enteros, devolver la suma de los números pares que aparezcan en la lista.
1. Solución Imperativa (JavaScript): En el paradigma imperativo se utilizan variables mutables (resultado) y bucles (for) para especificar el "cómo" realizar la suma.
function SumPar(lista) { 
    var resultado = 0; 
    for (var i=0; i< lista.length ; i++) { 
        if (lista[i] % 2 ==0) { 
            resultado += lista[i]; 
        } 
    } 
    return resultado; 
} [68, 70]
2. Solución Declarativa con Funciones de Orden Superior (Haskell): En Haskell, que carece de variables mutables y bucles, se utiliza la composición de funciones de orden superior: foldl y filter.
El filter (filtro) toma la función even y solo deja pasar los números pares. El foldl (similar a reduce) captura el patrón de la recursión con acumulador y aplica la operación de suma (+).
La solución final, concisa y expresiva, se logra mediante la composición de funciones:
sumPar :: Integral a => [a] -> a 
sumPar = (foldl (+) 0) . (filter even) [72, 73]
Una de las grandes ventajas de este enfoque es la facilidad para realizar modificaciones. Si se deseara sumar los cuadrados de los elementos de la lista, bastaría con cambiar la función de transformación.
C. Ejemplo de Funciones Lambda
Las expresiones lambda (funciones anónimas) son construcciones de código que generan un valor y son especialmente útiles en conjunto con funciones de orden superior.
Por ejemplo, para elevar al cuadrado una serie de números en una lista, se puede usar map con una lambda.
Ejemplo en Python (usando map y lambda): Para crear una lista donde cada elemento es 2 elevado a la potencia del elemento correspondiente en lista1, se usa la siguiente expresión:
lista1 = [x for x in range(5)]
lista2 = list(map(lambda x: 2 ** x, lista1))
print(lista2) # [80-84] (Adaptado para reflejar la salida de la fuente [85])
La función lambda se define como lambda x: 2 ** x, actuando como una parte anónima de código que evalúa el resultado, haciendo el código "más corto, más claro y más legible" que si se usara una función definida tradicionalmente.

--------------------------------------------------------------------------------
Referencias Bibliográficas
Alarcón, J. M. (2024, 30 de octubre). Guía completa: programación imperativa vs declarativa con ejemplos claros. campusMVP.es. [384–387].
AI-FutureSchool. (n.d.). Inmutabilidad en programación: conceptos clave y ejemplos. [388–401].
Autentia. (n.d.). Introducción al Backend y Java. [406–415].
CISCO. (n.d.-a). Esenciales de Python | PDF | Python (lenguaje de programación) (Módulos 1-4). [18–212].
Haskell Fast & Hard Tutorial. (n.d.). Refactorización Funcional. [451–459].
Initium blog. (2025, 1 de abril). Programación funcional: principios y ventajas. [445–450].
IONOS. (2020, 14 de octubre). Tutorial de Haskell: aprender a programar en Haskell. [471–478].
Kariuki, C. (2024, 20 de mayo). Programación funcional explicada en 5 minutos [con ejemplos]. Geekflare. [419–444].
Kereki, F. (n.d.). El discreto encanto de la programación funcional. Universidad de la Empresa (UDE). [11–17].
knowmad mood. (n.d.). Programación Funcional Básico. [417–418].
Luis Javier LS. (n.d.). Unidad Ii | PDF | Programacion Funcional | Lenguaje de programación. [479–520].
Platzi. (n.d.). Funciones Puras: Concepto y Ejemplos Prácticos. [339–344].
Reddit. (n.d.-a). Funciones en programación vs matemáticas : r/learnmath. [345–383].
Reddit. (n.d.-b). ¿Haskell o Clojure para acercarse a la programación funcional (PF)? : r/functionalprogramming. [521–556].
Reddit. (n.d.-c). ¿Qué lenguaje elegir para la programación funcional? : r/functionalprogramming. [557–581].
Universidad de Sevilla. (n.d.). Tema 1 - Programación declarativa y funcional. Dpto. Ciencias de la Computación e Inteligencia Artificial. [460–470].
Wikipedia. (n.d.-a). Categoría:Lenguajes funcionales. [1–4].
Wikipedia. (n.d.-b). Currificación. [5–10].