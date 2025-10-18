Compendio Exhaustivo: Paradigmas y Programación Funcional
1. Paradigmas de Programación
La programación es una disciplina que alberga múltiples enfoques o paradigmas, siendo dos de los más reconocidos la programación imperativa y la programación declarativa (Alarcón, 2024). La programación funcional, de hecho, se considera uno de los grandes paradigmas de la programación.
A nivel conceptual, la programación se divide en dos grandes ramas: la Imperativa y la Declarativa. Dentro de la rama imperativa encontramos estilos como la Programación Estructurada, la Procedimental (como Go o C), y la Orientada a Objetos (OOP, como Java o PHP). En la rama declarativa se ubican la Programación Funcional (como Haskell y Scala) y la Programación Lógica (como Prolog).
2. Programación Imperativa
La programación imperativa se caracteriza por centrarse en el "cómo" se deben ejecutar las operaciones, proporcionando instrucciones detalladas paso a paso. En este enfoque, el foco está en los algoritmos y el flujo de control.
Según Alarcón (2024):
En la imperativa, el foco está en el "cómo" hacer las cosas, centrándose en los algoritmos y el flujo de control. Aquí se utilizan comandos consecutivos para modificar el estado del programa. Describes paso a paso las instrucciones que el programa debe seguir para lograr un resultado.
Una característica clave de este paradigma es el uso de estados mutables. El orden de ejecución de las instrucciones es crucial.
Un ejemplo clásico de código imperativo para sumar una lista de números en JavaScript ilustra este enfoque detallado:
let numeros = [2, 8-11]; 
let suma = 0; 
for (let i = 0; i < numeros.length; i++) { 
    suma += numeros[i]; 
} 
console.log(suma); // 15
En este caso, se especifican los pasos detallados y explícitos, y se utiliza un estado mutable (suma y i).
La programación imperativa puede ser más adecuada en situaciones más simples o cuando se requiere un control muy granular sobre la ejecución del programa.
3. Programación Declarativa
A diferencia de su contraparte, la programación declarativa se enfoca en el "qué" se desea lograr, delegando en el lenguaje o framework el cómo alcanzar el resultado. La Universidad de Sevilla (n.d.) explica que la programación declarativa es una "capa de abstracción" donde se describe la solución sin entrar en los detalles de su control de flujo.
Una ventaja significativa de la programación declarativa es que "tiende a producir código más corto, legible y fácil de mantener". Este enfoque se centra en el resultado final y evita los estados mutables.
En el mismo ejemplo de la suma de una lista de números, el enfoque declarativo en JavaScript es más conciso:
let numeros = [2, 8-11]; 
let suma = numeros.reduce((a, b) => a + b, 0); 
console.log(suma); // 15
Alarcón (2024) señala que en este caso, se evita el estado mutable y "El orden de ejecución no es relevante".
La tendencia actual, en particular en el desarrollo web y de interfaces de usuario, es utilizar el enfoque declarativo debido a que "simplifica el desarrollo de aplicaciones complejas y mejora la productividad de los equipos de programadores".
4. Introducción e Historia de la Programación Funcional
4.1. Historia de la Programación Funcional
La programación funcional (PF) es un paradigma con orígenes en áreas abstrusas de las Matemáticas. El Ingeniero Federico Kereki explica la historia de este paradigma:
En computación, la programación funcional es un paradigma que tuvo sus orígenes hace casi un siglo atrás, pero que está renaciendo hoy en día para el desarrollo de aplicaciones de todo tipo. Si queremos saber de dónde salió esta idea, tendríamos que ir hacia los años 30, cuando se estaba estudiando el tema de la “computabilidad”... y nació con el sonoro nombre de “cálculo lambda” (o “cálculo λ”), inventado por el matemático Alonzo Church… ¡años antes de que existieran computadoras programables!
El primer lenguaje funcional usado ampliamente fue LISP, creado casi llegando a los años 60, con fuertes raíces en la PF. LISP fue muy aplicado a temas de Inteligencia Artificial y es, de hecho, el segundo lenguaje más antiguo aún en uso hoy en día, después de FORTRAN para cálculo numérico. Sin embargo, la PF fue inicialmente "dejada de lado" debido a sus orígenes tan matemáticos y su aplicación en áreas no comunes. Hoy en día, sin embargo, la PF ha resurgido como una herramienta importante.
4.2. Introducción a Programación Funcional
La programación funcional es un estilo de programación declarativa. Se basa en la definición y evaluación de funciones, evitando el concepto de variables cuyo contenido puede cambiar a lo largo de la ejecución de un programa. Su método básico de computación es la aplicación de funciones a sus argumentos (Universidad de Sevilla, n.d.).
Características clave de la Programación Funcional:
1. Funciones de primera clase y de orden superior: Las funciones pueden ser tratadas como valores, recibiendo y devolviendo otras funciones, o siendo asignadas a variables.
2. Funciones puras: El valor de una función solo depende de sus argumentos (transparencia referencial) y "No tienen efectos secundarios". Esto significa que, dado un mismo conjunto de entradas, la función siempre devuelve el mismo resultado.
3. Programación declarativa: Se expresa qué se quiere hacer, no el cómo.
4. Uso de recursividad y funciones de orden superior: Se evita el uso de órdenes de control cíclico tradicionales (while, for), prefiriendo en su lugar la recursión o funciones como map y reduce.
5. Inmutabilidad: Los lenguajes funcionales puros "simulan el estado pasando datos inmutables entre las funciones".
Entre las ventajas de la PF se encuentra que se suele generar "código más limpio, conciso y expresivo". Además, al ser el estado inmutable y no existir efectos secundarios, es "ideal para la programación paralela o concurrente".
5. Datos Inmutables
La inmutabilidad es un principio central en la programación funcional. Se define como la propiedad de un objeto que no puede ser modificado una vez que ha sido creado. Cualquier intento de alterarlo resulta en la creación de una nueva instancia del objeto.
5.1. Ventajas de la Inmutabilidad
La inmutabilidad ofrece varias ventajas significativas:
• Seguridad y Concurrencia: En entornos concurrentes o multihilo, los objetos inmutables son cruciales porque "ayuda a evitar condiciones de carrera y facilita la implementación de programas seguros y eficientes". El riesgo de que un hilo modifique el estado de un objeto mientras otro lo usa es nulo. Por esta razón, el API de Java 8 para Date/Time utiliza la inmutabilidad.
• Claridad y Razonamiento: Los desarrolladores pueden confiar en que el estado de un objeto se mantendrá constante a lo largo de su vida útil, lo que facilita la comprensión y el mantenimiento del código.
• Facilidad de Debugging y Testing: Dado que el estado no cambia, se simplifica la depuración y la creación de pruebas más efectivas.
• Enfoque Declarativo: La inmutabilidad "Fomentan un enfoque declarativo en la programación".
5.2. Implementación de Datos Inmutables
Los objetos inmutables se usan extensivamente en lenguajes como Scala y Haskell. Históricamente, Lisp ya incorporaba la inmutabilidad con sus listas por defecto.
En Java, la clase String es un ejemplo clásico de inmutabilidad, donde operaciones como la concatenación crean una nueva instancia en lugar de modificar la original. Otros ejemplos incluyen:
• Scala: Las colecciones como List y Map son inmutables por defecto.
• JavaScript (React): La inmutabilidad es una práctica recomendada para el manejo de estados en frameworks como React, a menudo lograda con librerías como Immutable.js.
6. Lenguajes de Programación Funcionales
Los lenguajes funcionales se dividen en dos categorías principales: puros e impuros.
Categoría
Ejemplos
Características
Puros
Haskell, Miranda
Adoptan el paradigma completamente, con funciones puras sin estado mutable ni efectos secundarios.
Impuros
Scala, Python, Java (a partir de la versión 8), Kotlin, Rust, Clojure, JavaScript (EcmaScript)
Permiten el uso de características funcionales junto con otros paradigmas (multiparadigma).
El artículo "Categoría:Lenguajes funcionales" (Wikipedia, n.d.) enumera otros lenguajes relacionados con este paradigma, incluyendo Lisp (que tiene 15 páginas en su subcategoría), Erlang, OCaml, Standard ML, Swift y Elm.
Existe un debate sobre cuáles son los mejores lenguajes para acercarse a la PF. Por ejemplo, en una discusión en Reddit (2025), se mencionan varios puntos de comparación entre Haskell y Clojure:
• Haskell: Es considerado un camino de aprendizaje más emocionante para la PF, ya que proporciona una comprensión académica más profunda de sus principios. Utiliza un tipado estático fuerte, donde "tu programa simplemente no compilará si no es correcto (generalmente)". Sin embargo, el lenguaje es grande, con muchos conceptos no-POO, y las herramientas pueden ser frustrantes para los principiantes.
• Clojure: Es un lenguaje más pequeño y está muy orientado a datos. Es considerado "un orden de magnitud más simple" que Haskell. Los desarrolladores señalan que la experiencia del desarrollador es diferente: se puede "construir desde adentro a través de un REPL" (Read-Eval-Print Loop), lo que resulta en programación interactiva y un placer de usar. Corre en la JVM.
Otros lenguajes funcionales o que permiten PF mencionados incluyen Elixir, F#, OCaml, Racket y Scala. Scala, por ejemplo, es tan poderoso como Haskell pero un poco más accesible para principiantes.
7. Desarrollo de Ejercicios Prácticos: Programación y Refactorización
7.1. Comparación de Soluciones Imperativas y Declarativas
Los ejercicios de programación a menudo se enfocan en la diferencia entre el enfoque imperativo y el declarativo, especialmente en el contexto de la Programación Funcional.
Problema: Calcula la suma de los números pares de una lista.
Enfoque
Ejemplo de Código
Descripción
Fuente
Imperativo (Python)
def sumaPares (l): pares = [] for n in l: if (n % 2 == 0): pares.append(n) return sumaLista(pares)
Implementación que requiere inicializar una lista mutable (pares) e iterar explícitamente.
(Universidad de Sevilla, n.d.)
Declarativo (Haskell)
`sumaPares xs = sumaLista [x
x <- xs, even(x)]`
Utiliza listas por comprensión para definir qué elementos incluir y luego sumar la lista resultante.
Declarativo (Haskell, HOF)
sumPar = (foldl (+) 0) . (filter even)
Abstracción total del proceso utilizando funciones de orden superior (foldl y filter).
(Universidad de Sevilla, n.d.)
7.2. Proceso de Refactorización Funcional
El proceso de refactorización implica realizar cambios mínimos y específicos en el código para mejorar su diseño y legibilidad sin alterar su estructura expuesta o resolver bugs. La refactorización funcional busca convertir una solución imperativa en una puramente funcional (Refactorización Funcional, n.d.).
Consideremos el mismo problema: Dada una lista de enteros, devolver la suma de los números pares.
Paso 1: Solución Imperativa (JavaScript) (Refactorización Funcional, n.d.): La solución tradicional usa un bucle for y una variable mutable (resultado), centrándose en el control de flujo.
function SumPar(lista) { 
    var resultado = 0; 
    for (var i=0; i< lista.length ; i++) { 
        if (lista[i] % 2 ==0) { 
            resultado += lista[i]; 
        } 
    } 
    return resultado; 
} 
Paso 2: Conversión a Recursión (Haskell): Dado que los lenguajes funcionales puros como Haskell no tienen variables mutables ni bucles, se debe utilizar la recursión. La recursión con un acumulador es la forma de conseguir el mismo resultado.
Paso 3: Uso de Patrones y Abstracción (Haskell): Utilizando patrones para manejar el caso base ([]) y la descomposición de la lista (x:xs), se simplifica la función.
Paso 4: Uso de Funciones de Orden Superior (HOF): La gran ganancia viene al abstraer el proceso utilizando HOF como filter, map y foldl. Una HOF es una función que puede tomar otras funciones como parámetros.
La función filter (de tipo (a -> Bool) -> [a] -> [a]) permite seleccionar solo los elementos pares. La función foldl (que captura el patrón de recursión con acumulador) permite sumar los elementos filtrados.
El resultado final, conciso y declarativo, se obtiene mediante la composición de funciones (.), otra función de orden superior: 
sumPar=(foldl (+) 0).(filter even)
Este proceso de refactorización demuestra que la PF permite una "aproximación más matemática" y una gran facilidad para realizar modificaciones futuras (por ejemplo, calcular la suma de los cuadrados).
8. Presentación del Plan Docente
Aunque las fuentes no proporcionan un plan docente formal completo, sí ofrecen el temario de una guía básica de programación funcional y listados extensos de temas de programación.
El temario de "Programación Funcional Básico" (knowmad mood, n.d.) se estructura en los siguientes puntos:
1. Introducción a la Programación Funcional: ¿Qué es la programación funcional?, Paradigmas de programación: funcional vs imperativa, y Beneficios de la programación funcional.
2. Conceptos Clave de Programación Funcional: Inmutabilidad y efectos secundarios, Funciones puras, y Composición de funciones en Java.
3. Fundamentos de la Programación Funcional en Java: Características funcionales en Java desde la versión 8, Expresiones Lambda, e Interfaces funcionales en Java.
4. Uso de Streams en Java: ¿Qué son los Streams?, Operaciones intermedias, Operaciones terminales, y Creación de Streams a partir de colecciones, arrays y valores.
5. Referencias de Métodos: Tipos y Usos comunes de referencias de métodos.
6. Manejo de Opcionales (Optional): ¿Qué es un Optional?, Creación de objetos Optional, y Métodos principales de Optional.
Además, la sección de Docencia y Programación de AI-FutureSchool (n.d.) menciona herramientas de apoyo pedagógico para optimizar el estudio, tales como generar resúmenes automáticos, realizar cuestionarios de Verdadero/Falso, y crear un plan de estudios personalizado.

--------------------------------------------------------------------------------
Referencias Bibliográficas
Alarcón, J. M. (2024, 30 de octubre). Guía completa: programación imperativa vs declarativa con ejemplos claros. campusMVP.
AI-FutureSchool. (n.d.). Inmutabilidad en programación: conceptos clave y ejemplos.
Autentia. (n.d.). Introducción al Backend y Java. (Fichas Back).
Kereki, F. (n.d.). El discreto encanto de la programación funcional. Universidad de la Empresa (UDE).
knowmad mood. (n.d.). Programación Funcional Básico.
Refactorización Funcional. (n.d.). (Extraído parcialmente del tutorial Haskell Fast & Hard).
Reddit. (2025). ¿Haskell o Clojure para acercarse a la programación funcional (PF)?. r/functionalprogramming.
Universidad de Sevilla. (n.d.). Tema 1 - Programación declarativa y funcional. Dpto. Ciencias de la Computación e Inteligencia Artificial.
Wikipedia. (n.d.). Categoría:Lenguajes funcionales.