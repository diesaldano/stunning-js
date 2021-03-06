const data: Record<string, object> = {
    1: {
        id: 1,
        title: 'Pila de llamadas',
        description: 'Una pila de llamadas es un mecanismo para que un intérprete realice un seguimiento de su lugar en un script que llama a múltiples funciones : qué función se está ejecutando actualmente y qué funciones se llaman desde dentro de esa función, etc.',
        text: `
        <p>La comprensión del contexto de ejecución y la pila de ejecución  es vital para entender otros conceptos de JavaScript como Hoisting, Scope y Closures.
        El contexto de ejecución es un concepto abstracto del entorno de Javascript, el código se ejecuta dentro de este contexto.
        
        Contexto de Ejecución Global - Este es el contexto de ejecución por defecto o base. El código que no está dentro de ninguna función está en el contexto de ejecución global. Sólo puede haber un contexto de ejecución global en un programa.
        
        Contexto de Ejecución Funcional - Cada vez que se invoca una función, se crea un nuevo contexto de ejecución para esa función. Cada función tiene su propio contexto de ejecución, pero se crea cuando la función es invocada o llamada. Puede haber cualquier número de contextos de ejecución de funciones. 
        
        Contexto de Ejecución de la Función Eval - El código ejecutado dentro de una función eval, no es usualmente usado por los desarrolladores de JavaScript.
        
        En Javascript existe lo que llamamos Pila de llamadas y su estructura tiene el siguiente funcionamiento: el último en entrar, es el primero en salir. Es así que el motor de javascript lee los scripts y crea un contexto global y continua empujando la pila de ejecución actual. A medida que se van completando se retiran de la Pila, hasta que finaliza la ejecución. 
        
        Un ejemplo que podemos tomar es cuando lavamos los platos, comenzamos apilar hacia arriba y luego secamos desde el último que colocamos hasta el primero lavar, finalizando así con la tarea. 
        
        Cuando tenemos el script por arriba del formulario sucede que nuestro navegador detiene la lectura y creación de elemento cuando ve la etiqueta script. En nuestro navegador no existe la ID que usamos en el JavaScript, tampoco existe en nuestro formulario. La solución es colocar el elemento que vamos a tratar con el script en la parte de arriba para que se cargue primero. Por esto es que siempre nos han aconsejado colocarla antes de cerrar la etiqueta </body>, esto para que el navegador encuentre todos los elementos antes de ejecutar el script.
        En el caso del software nuestra mejor estrategia es dividir nuestro código en partes separadas como funciones, módulos, packages, etc. 
        El motor de javascript lee estas piezas de código y le ayuda para separar la complejidad de la interpretación del código, entonces las ‘piezas’ mencionadas anteriormente le llamaremos ‘Contexto de Ejecución’. 
        
        El primer contexto de ejecución se crea cuando Javascript llama al código y se crea el “contexto de ejecución global ”. Aquí aparecerán dos cosas: un objeto global y una variable llamada ‘this’. ‘This’  será la referencia a windows si corre en el entorno del browser o si corre en el entorno de node.
        
        Por otra parte, podremos encontrar dos fases:  una fase de creación y otra fase de ejecución, cada una tiene una responsabilidad única. En la primera window y this se crean, y a las declaraciones se le asigna un valor undefined. Por el lado de la fase de ejecución el motor de javascript se ejecuta línea por línea y asigna los valores reales.
        </p>        

        
        `,
        tags: ['pila', 'llamadas'],
        code:  `
        function call(number: string) {
            console.log('Llamando a ' + number);
        }
        call('123456789');
        call('987654321');

        function greeting(){
            return 'Hola';
        }
        console.log(greeting());
    `
    },
    2: {
        id: 2,
        title: 'Tipos Primitivos',
        description: 'Tipos Primitivos',
        tags: ['tipos', 'primitivos'],
        code: '',
    },
    3: {
        id: 3,
        title: 'Valores y referencias',
        description: 'Valores y referencias',
        tags: ['valores', 'referencias'],
        code: '',
    },
    4: {
        id: 4,
        title: 'Implicito, explicito y estructuración',
        description: 'Implicito, explicito y estructuración',
        tags: ['implicito', 'explicito', 'estructuracion'],
        code: '',
    },
    5: {
        id: 5,
        title: 'Comparaciíon de tipos',
        description: 'Comparaciíon de tipos debil y fuerte',
        tags: ['comparacion', 'tipos', 'debil', 'fuerte'],
        code: '',
    },
    6: {
        id: 6,
        title: 'Alcance de una función',
        description: 'Alcance de una función',
        tags: ['alcance', 'funcion'],
        code: '',
    },
    7: {
        id: 7,
        title: 'Expreción vs Sentencia',
        description: 'Expreción vs Sentencia',
        tags: ['expresion', 'sentencia'],
        code: '',
    },
    8: {
        id:8,
        title: 'IIFE, modules and scope',
        description: 'IIFE, modules and scope',
        tags: ['javascript', 'IIFE', 'modules', 'scope'],
        code: `
            (function() {
                console.log('Hello');
            }
            )();
        `,
    },
    9: {
        id:9,
        title: 'Event Loop',
        description: 'Event Loop',
        tags: ['javascript', 'event loop'],
        code: `
        function doSomething() {
                console.log('Hello');
                    setTimeout(doSomething, 1000);
                }
                doSomething();
                `,
            },
    10: {
        id:10,
        title: 'setTimeout and setInterval',
        description: 'setTimeout and setInterval',
        tags: ['javascript', 'setTimeout', 'setInterval'],
        code: `
        function timeOut() {
                console.log('Hello');
                setTimeout(timeOut, 1000);
            }
                timeOut();
            
            function interval() {
                console.log('Hello');
                    setInterval(interval, 1000);
                }
                interval();
        `,
    },
    11: {
        id:11,
        title: 'Motores javascript',
        description: 'Motores javascript',
        tags: ['javascript', 'prototype', 'inheritance', 'prototype chain'],
        code: ``,
    },
    12: {
        id:12,
        title: 'Operators, Types Array aand Array buffers',
        description: 'Operators, Types Array aand Array buffers',
        tags: ['javascript', 'operators', 'types', 'array', 'array buffers'],
        code: '',
    },
    13: {
        id:13,
        title: 'Dom and Layout trees',
        description: 'Dom and Layout trees',
        tags: ['javascript', 'dom', 'layout'],
        code: '',
    },
    14: {
        id:14,
        title: 'factories y classes',
        description: 'factories y classes',
        tags: ['javascript', 'factories', 'classes'],
        code: '',
    },
    15: {
        id:15,
        title: 'Call, Apply, Bind and this',
        description: 'Call, Apply, Bind and this',
        tags: ['javascript', 'call', 'apply', 'bind', 'this'],
        code: '',
    },
    16: {
        id:16,
        title: 'New, constructor, instanceof y instances',
        description: 'New, constructor, instanceof y instances',
        tags: ['javascript', 'new', 'constructor', 'instanceof', 'instances'],
        code: '',
    },
    17: {
        id:17,
        title: 'Prototype, inheritance, and Prototype Chain',
        description: 'Prototype, inheritance, and Prototype Chain',
        tags: ['javascript', 'prototype', 'inheritance', 'prototype chain'],
        code: '',
    },
    18: {
        id: 18,
        title: 'Object create and object assign',
        description: 'Object create and object assign',
        tags: ['object', 'create', 'assign'],
        code: `
            const obj = Object.create({ foo: 'bar' });
            obj.baz = 'baz';
            console.log(obj); // { foo: 'bar', baz: 'baz' }
            console.log(obj.foo); // bar
            console.log(obj.baz); // baz
        `,
    },
    19: {
        id: 19,
        title: 'map, reduce and filter',
        description: 'map, reduce and filter',
        tags: ['map', 'reduce', 'filter'],
        code: `
            const array = [1, 2, 3, 4, 5];
            const result = array.map(item => item * 2);
            console.log(result); // [2, 4, 6, 8, 10]
            const result2 = array.reduce((acc, item) => acc + item, 0);
            console.log(result2); // 15
            const result3 = array.filter(item => item % 2 === 0);
            console.log(result3); // [2, 4]
        `,
    },
    20: {
        id: 20,
        title: 'Functional Programing',
        description: 'Funciones puras, efectos secundarios y mutación de estado'
    },
    21: {
        id: 21,
        title: 'Clousures',
        description: 'Funciones que se pueden ejecutar después de que se haya ejecutado una función'
    },
    22: {
        id: 22,
        title: 'High Order Functions',
        description: 'Funciones que reciben funciones como argumentos'
    },
    23: {
        id: 23,
        title: 'Recursion',
        description: 'Recursividad en funciones y algoritmos'
    },
    24: {
        id: 24,
        title: 'Collections y generators',
        description: 'Arrays, Maps, Sets, Generators'
    },
    25: {
        id: 25,
        title: 'Promises',
        description: 'Operaciones que esperan un resultado o un error'
    },
    26: {
        id: 26,
        title: 'Async/Await',
        description: 'Operaciones que esperan un resultado o un error'
    },
    27: {
        id: 27,
        title: 'Estructura de datos',
        description: 'Estructuras de datos y algoritmos'
    },
    28: {
        id: 28,
        title: 'Expensive operation y big notion',
        description: 'Operaciones costosas y grandes conceptos'
    },
    29: {
        id: 29,
        title: 'Algoritmos',
        description: 'Algoritmos y estructuras de datos'
    },
    30: {
        id: 30,
        title: 'Herencia y polimorfismo',
        description: 'Herencia y polimorfismo en TypeScript'
    },
    31: {
        id: 31,
        title: 'Patrones de Diseño',
        description: 'Patrones de diseño en TypeScript'
    },
    32: {
        id: 32,
        title: 'Partial app, currying, compose y pipe',
        description: 'Partial app, Currying is a process to reduce functions of more than one argument to functions of one argument with the help of lambda calculus Ex f(x)(y)(z). Function composition is a mechanism of combining multiple simple functions to build a more complicated one. The result of each function is passed to the next one. In mathematics, we often write something like: f(g(x)). So this is the result of g(x) that is passed to f. pipe() is nearly identical to compose(). The only difference is that pipe() moves data in the opposite direction: LEFT --> RIGHT.'
    },
    33: {
        id: 33,
        title: 'Clean Code',
        description: 'Principios de ingeniería de software, del libro Clean Code de Robert C. Martin , adaptado para JavaScript. Esta no es una guía de estilo. Es una guía para producir software legible, reutilizable y refactorizable en JavaScript.'
    }
}

export default data;