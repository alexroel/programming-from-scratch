# Introducción a CSS 

1. Introducción
2. Primeros estilos
3. Selectores de elementos
4. Modelo de caja
5. Tipos de display
6. Pseudo-clases y Pseudo-elementos
7. Responsive Design
8. Resumen

---
## Introducción 
**Introducción a CSS: Un Viaje por la Estilización Web**

Bienvenidos a la sección de "Introducción a CSS". En este fascinante recorrido, exploraremos las bases del lenguaje de estilo que da vida y forma a las páginas web: Cascading Style Sheets, o simplemente, CSS.

### 2. Primeros Estilos
Comenzaremos nuestro viaje sumergiéndonos en los fundamentos de la aplicación de estilos en CSS. Desde la conexión de archivos CSS con documentos HTML hasta la comprensión de propiedades básicas como color, tamaño de fuente y márgenes, esta sección será tu entrada al mundo creativo de la presentación web.

### 3. Selectores de Elementos
Descubriremos cómo seleccionar elementos específicos en una página utilizando diversos patrones de selectores. Desde selectores de tipo hasta selectores de clase y atributo, aprenderás a aplicar estilos de manera selectiva y precisa.

### 4. Modelo de Caja
Sumérgete en el fascinante concepto del "Modelo de Caja". Entenderás cómo los elementos HTML se representan visualmente, comprendiendo las áreas esenciales de contenido, padding, borde y margen. Ajusta estas áreas para esculpir la apariencia exacta que deseas para tus elementos.

### 5. Posicionamientos y Diseño
Explore las diversas técnicas de posicionamiento en CSS, desde el relativo y absoluto hasta el uso de flexbox y grid para diseñar diseños más complejos. Aprenderás a controlar la disposición de los elementos en la página de manera efectiva.

### 6. Pseudo-clases y Pseudo-elementos
Descubre cómo agregar estilos específicos a elementos en ciertos estados o partes particulares de un elemento. Desde estilizar enlaces visitados hasta manipular la primera línea de un párrafo, las pseudo-clases y pseudo-elementos abrirán un abanico de posibilidades creativas.

### 7. Responsive Design
Concluimos nuestro viaje con una mirada esencial al "Responsive Design". Aprenderás a crear diseños que se adaptan a diferentes dispositivos y tamaños de pantalla, utilizando media queries, unidades relativas y estrategias de diseño flexibles para garantizar una experiencia web fluida y atractiva.

¡Prepárate para transformar tu enfoque hacia la presentación web con nuestra sección de "Introducción a CSS"!

---
## Primeros estilos
#### Formas de Agregar Estilos en CSS:

##### 1. **Estilos en línea:**
   - Se aplican directamente en la etiqueta HTML utilizando el atributo `style`.
   - Ejemplo:
     ```html
     <p style="color: blue; font-size: 16px;">Texto con estilos en línea</p>
     ```

##### 2. **Estilos Internos:**
   - Se definen dentro de la etiqueta `<style>` en el encabezado del documento HTML.
   - Ejemplo:
     ```html
     <head>
       <style>
         p {
           color: green;
           font-size: 18px;
         }
       </style>
     </head>
     <body>
       <p>Texto con estilos internos</p>
     </body>
     ```

##### 3. **Estilos Externos:**
   - Se almacenan en archivos CSS independientes y se vinculan al documento HTML.
   - Ejemplo:
     **Archivo HTML:**
     ```html
     <head>
       <link rel="stylesheet" type="text/css" href="estilos.css">
     </head>
     <body>
       <p>Texto con estilos externos</p>
     </body>
     ```
     **Archivo CSS (`estilos.css`):**
     ```css
     p {
       color: red;
       font-size: 20px;
     }
     ```

#### Anatomía de CSS:

CSS se compone de reglas que definen cómo se deben presentar los elementos HTML. La anatomía básica de una regla CSS es la siguiente:

```css
selector {
  propiedad: valor;
  /* Puede haber más propiedades y valores aquí */
}
```

- **Selector:** Indica a qué elementos se aplicarán los estilos. Puede ser el nombre de una etiqueta HTML, una clase, un ID, etc.
- **Propiedad:** Atributo específico que se va a estilizar (por ejemplo, `color`, `font-size`, `margin`, etc.).
- **Valor:** Valor asignado a la propiedad (por ejemplo, `red`, `16px`, `10px auto`, etc.).
- **Declaración:** Una línea completa de código que incluye el selector, la propiedad y el valor.

Este es un concepto fundamental en CSS y se repite para cada estilo que desees aplicar a tu página web. Entender la anatomía de una regla CSS es esencial para construir estilos efectivos y bien estructurados.

---
## Selectores de elementos

En CSS, los selectores de elementos son patrones que se utilizan para seleccionar y aplicar estilos a elementos específicos en una página web. Aquí hay algunos tipos de selectores de elementos comunes:

#### 1. **Selector Universal (`*`):**
   - Selecciona todos los elementos en la página.
   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

#### 2. **Selector de Tipo:**
   - Selecciona todos los elementos de un tipo específico.
   ```css
   p {
     font-family: 'Arial', sans-serif;
   }
   ```

#### 3. **Selector de Clase (`.`):**
   - Selecciona todos los elementos que tienen una clase específica.
   ```css
   .destacado {
     color: #ff0000;
   }
   ```

#### 4. **Selector de ID (`#`):**
   - Selecciona un elemento específico por su ID único.
   ```css
   #encabezado {
     font-size: 24px;
   }
   ```

#### 5. **Selector de Atributo:**
   - Selecciona elementos que tienen un atributo específico.
   ```css
   input[type="text"] {
     border: 1px solid #ccc;
   }
   ```

#### 6. **Selector Descendente:**
   - Selecciona un elemento que es un descendiente de otro elemento.
   ```css
   article p {
     font-style: italic;
   }
   ```

#### 7. **Selector de Hijo (`>`):**
   - Selecciona un elemento que es un hijo directo de otro elemento.
   ```css
   nav > ul {
     list-style-type: none;
   }
   ```

#### 8. **Selector de Pseudo-Clase:**
   - Selecciona elementos en un estado específico.
   ```css
   a:hover {
     text-decoration: underline;
   }
   ```

#### 9. **Selector de Pseudo-Elemento:**
   - Selecciona partes específicas de un elemento.
   ```css
   p::first-line {
     font-weight: bold;
   }
   ```

#### 10. **Selector Agrupado:**
   - Permite aplicar el mismo estilo a varios selectores.
   ```css
   h1, h2, h3 {
     color: #333;
   }
   ```

Estos son solo algunos ejemplos de la variedad de selectores que CSS ofrece. Combinar selectores de manera efectiva es clave para aplicar estilos de forma precisa y mantener un código CSS organizado.

---
## Modelo de caja

El modelo de caja en CSS es un concepto fundamental que describe cómo se representan visualmente los elementos HTML en una página. Cada elemento HTML se considera una caja rectangular que tiene cuatro áreas principales: contenido, padding, borde y margen. Entender el modelo de caja es esencial para controlar el diseño y el espaciado de los elementos en una página web.

#### 1. **Contenido (`content`):**
   - Representa el área donde se muestra el contenido del elemento (texto, imágenes, etc.).
   ```css
   div {
     width: 200px;
     height: 100px;
   }
   ```

#### 2. **Padding (`padding`):**
   - Es el espacio entre el contenido y el borde. Aumentar el padding incrementa el espacio interno de la caja.
   ```css
   div {
     padding: 20px;
   }
   ```

#### 3. **Borde (`border`):**
   - Es la línea que rodea el contenido y el padding. Se puede personalizar con ancho, estilo y color.
   ```css
   div {
     border: 2px solid #333;
   }
   ```

#### 4. **Margen (`margin`):**
   - Es el espacio exterior al borde que afecta al diseño y a la colocación del elemento en la página.
   ```css
   div {
     margin: 10px;
   }
   ```

#### 5. **Box Sizing:**
   - Define cómo se deben calcular las dimensiones totales de un elemento, teniendo en cuenta o no el padding y el borde.
   ```css
   div {
     box-sizing: border-box;
   }
   ```

#### 6. **Dimensiones Totales:**
   - La altura total y el ancho total de un elemento se calculan sumando contenido, padding y borde (y opcionalmente, margen).
   ```css
   div {
     width: 200px;
     height: 100px;
     padding: 20px;
     border: 2px solid #333;
   }
   ```

#### 7. **Overflow:**
   - Controla el comportamiento cuando el contenido es más grande que el área designada.
   ```css
   div {
     overflow: auto;
   }
   ```

#### 8. **Ejemplo Práctico:**
   - Un ejemplo que utiliza todas las propiedades anteriores para crear una caja estilizada.
   ```css
   div {
     width: 200px;
     height: 100px;
     padding: 20px;
     border: 2px solid #333;
     margin: 10px;
     box-sizing: border-box;
   }
   ```

Entender cómo estas propiedades interactúan es crucial para controlar el diseño de una página web y garantizar una presentación visual coherente.

---
## Tipos de display
En CSS, la propiedad `display` se utiliza para especificar el tipo de caja que un elemento debería generar y cómo debería comportarse. Aquí hay algunos de los valores más utilizados para la propiedad `display`:

### 1. **`block`:**
   - Elementos de bloque ocupan todo el ancho disponible y comienzan en una nueva línea. Ejemplos comunes son `<div>`, `<p>`, y encabezados `<h1>` a `<h6>`.

   ```css
   div {
     display: block;
   }
   ```

### 2. **`inline`:**
   - Elementos en línea ocupan solo el ancho necesario y no comienzan en una nueva línea. Ejemplos son `<span>`, `<a>`, y elementos de texto.

   ```css
   span {
     display: inline;
   }
   ```

### 3. **`inline-block`:**
   - Combina características de elementos en línea y de bloque. Ocupa solo el ancho necesario, pero permite ajustar la altura y anchura.

   ```css
   img {
     display: inline-block;
   }
   ```

### 4. **`flex`:**
   - Permite crear un contenedor flexible y organizar los elementos hijos en una fila o columna, facilitando la creación de diseños flexibles.

   ```css
   .contenedor-flex {
     display: flex;
   }
   ```

### 5. **`grid`:**
   - Similar a `flex`, pero proporciona una cuadrícula bidimensional para organizar elementos en filas y columnas.

   ```css
   .contenedor-grid {
     display: grid;
   }
   ```

### 6. **`none`:**
   - Oculta completamente el elemento en la página. Es útil para controlar la visibilidad mediante scripts o para ocultar elementos en diferentes situaciones.

   ```css
   .oculto {
     display: none;
   }
   ```

---
## Posicionamientos y Diseño

#### 1. **Posicionamiento Relativo (`position: relative`):**
   - Mueve el elemento respecto a su posición original.
   ```css
   .caja {
     position: relative;
     top: 20px;
     left: 30px;
   }
   ```

#### 2. **Posicionamiento Absoluto (`position: absolute`):**
   - Coloca el elemento en relación con su primer ancestro posicionado.
   ```css
   .caja {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
   ```

#### 3. **Posicionamiento Fijo (`position: fixed`):**
   - Fija el elemento en relación con la ventana del navegador.
   ```css
   .encabezado {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     background-color: #333;
     color: white;
   }
   ```

#### 4. **Posicionamiento Estático (`position: static`):**
   - Es la posición predeterminada de los elementos. No se ve afectada por las propiedades top, right, bottom, left.
   ```css
   .elemento {
     position: static;
   }
   ```

#### 5. **Flexbox:**
   - Es un modelo de diseño unidimensional que facilita la distribución de elementos en una fila o columna.
   ```css
   .contenedor-flex {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   ```

#### 6. **Grid:**
   - Es un modelo de diseño bidimensional que crea una cuadrícula de filas y columnas.
   ```css
   .contenedor-grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-gap: 20px;
   }
   ```

#### 7. **Centrar Elementos con Flexbox:**
   - Se puede usar para centrar elementos tanto horizontal como verticalmente.
   ```css
   .centrado-flex {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```


#### 8. **Ordenar con Flexbox:**
   - Cambia el orden de los elementos sin modificar el orden en el código HTML.
   ```css
   .contenedor-flex {
     display: flex;
   }
   .elemento-1 {
     order: 2;
   }
   .elemento-2 {
     order: 1;
   }
   ```

#### 9. **Alineación con Grid:**
   - Alinea elementos dentro de una caja de cuadrícula.
   ```css
   .contenedor-grid {
     display: grid;
     align-items: center;
     justify-items: center;
   }
   ```

Estos ejemplos cubren varias técnicas de posicionamiento y diseño que son fundamentales en la construcción de páginas web modernas y adaptables. Flexbox y Grid son especialmente poderosos para crear diseños complejos y receptivos.

---
## Pseudo-clases y Pseudo-elementos

#### 1. **Pseudo-clases:**
   - Seleccionan elementos en estados específicos o relaciones con otros elementos.

   ```css
   /* Selecciona enlaces no visitados */
   a:link {
     color: blue;
   }

   /* Selecciona enlaces visitados */
   a:visited {
     color: purple;
   }

   /* Selecciona el primer hijo de un elemento */
   li:first-child {
     font-weight: bold;
   }

   /* Selecciona el último hijo de un elemento */
   li:last-child {
     border-bottom: 1px solid #ccc;
   }

   /* Selecciona cada elemento par */
   tr:nth-child(even) {
     background-color: #f2f2f2;
   }

   /* Selecciona cada elemento impar */
   tr:nth-child(odd) {
     background-color: #ddd;
   }
   ```

#### 2. **Pseudo-elementos:**
   - Seleccionan y estilizan partes específicas de un elemento.

   ```css
   /* Estiliza la primera línea de un párrafo */
   p::first-line {
     font-weight: bold;
   }

   /* Estiliza la primera letra de un párrafo */
   p::first-letter {
     font-size: 150%;
     color: #900;
   }

   /* Inserta contenido antes del contenido real del elemento */
   p::before {
     content: ">> ";
   }

   /* Inserta contenido después del contenido real del elemento */
   p::after {
     content: " <<";
   }

   /* Selecciona el primer elemento hijo */
   li::first-child {
     font-weight: bold;
   }
   ```

#### 3. **Ejemplo Práctico: Estilizar Elementos en Hover:**
   - Usar pseudo-clases para estilizar elementos cuando el mouse está sobre ellos.

   ```css
   /* Cambia el color de fondo cuando el mouse está sobre un enlace */
   a:hover {
     background-color: #eee;
   }

   /* Aumenta el tamaño de la fuente cuando el mouse está sobre un botón */
   button:hover {
     font-size: 1.2em;
   }
   ```

#### 4. **Ejemplo Práctico: Crear un Efecto de Desplazamiento con Pseudo-elemento:**
   - Usar un pseudo-elemento para agregar una línea debajo de los enlaces.

   ```css
   /* Agrega una línea debajo de los enlaces */
   a::after {
     content: "";
     display: block;
     height: 2px;
     background-color: #333;
   }
   ```

#### 5. **Pseudo-clases para Formularios:**
   - Pseudo-clases específicas para estilizar elementos de formularios.

   ```css
   /* Estiliza el campo de texto cuando está enfocado */
   input:focus {
     border: 2px solid #007bff;
   }

   /* Estiliza el botón cuando está deshabilitado */
   button:disabled {
     opacity: 0.5;
   }
   ```

Pseudo-clases y pseudo-elementos proporcionan un nivel adicional de selección y estilización en CSS, permitiendo ajustes finos y efectos visuales específicos en respuesta a ciertos estados o partes de un documento HTML.

---
## Responsive Design
### 7. Responsive Design en CSS

El diseño responsivo es una técnica crucial para asegurar que una página web se vea bien y funcione correctamente en una variedad de dispositivos y tamaños de pantalla. Aquí hay algunas estrategias y conceptos clave para implementar el diseño responsivo en CSS:

#### 1. **Media Queries:**
   - Utiliza media queries para aplicar estilos específicos según las características del dispositivo, como el ancho de la pantalla.

   ```css
   /* Estilos por defecto para pantallas grandes */
   body {
     font-size: 16px;
   }

   /* Estilos para pantallas más pequeñas */
   @media screen and (max-width: 600px) {
     body {
       font-size: 14px;
     }
   }
   ```

#### 2. **Imágenes Responsivas:**
   - Usa la propiedad `max-width: 100%;` para que las imágenes no se desborden en pantallas pequeñas.

   ```css
   img {
     max-width: 100%;
     height: auto;
   }
   ```

#### 3. **Unidades Relativas:**
   - Utiliza unidades relativas como porcentajes y `em` en lugar de unidades absolutas para garantizar un diseño flexible.

   ```css
   .contenedor {
     width: 80%;
     margin: 0 auto;
   }
   ```

#### 4. **Flexbox y Grid para Diseño Responsivo:**
   - Aprovecha las capacidades de Flexbox y Grid para crear diseños flexibles y adaptables.

   ```css
   /* Diseño de una fila flexible con Flexbox */
   .contenedor-flex {
     display: flex;
     flex-wrap: wrap;
   }

   /* Diseño de una cuadrícula adaptable con Grid */
   .contenedor-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
     grid-gap: 20px;
   }
   ```

#### 5. **Viewport Meta Tag:**
   - Utiliza la etiqueta `meta` en el encabezado para controlar el nivel de zoom y la escala inicial en dispositivos móviles.

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

#### 6. **Orientación de Dispositivos:**
   - Adapta el diseño según la orientación del dispositivo.

   ```css
   @media screen and (orientation: landscape) {
     /* Estilos para dispositivos en modo horizontal */
   }

   @media screen and (orientation: portrait) {
     /* Estilos para dispositivos en modo vertical */
   }
   ```

#### 7. **Reorganización de Contenido:**
   - Utiliza Flexbox y Grid para reorganizar el contenido según el tamaño de la pantalla.

   ```css
   /* Cambia el orden de los elementos en pantallas pequeñas */
   @media screen and (max-width: 600px) {
     .elemento {
       order: 2;
     }
   }
   ```

#### 8. **Ejemplo Práctico:**
   - Implementación de un diseño responsivo simple.

   ```css
   /* Estilos para pantallas grandes */
   body {
     font-size: 16px;
   }

   /* Estilos para pantallas pequeñas */
   @media screen and (max-width: 600px) {
     body {
       font-size: 14px;
     }
   }

   img {
     max-width: 100%;
     height: auto;
   }

   .contenedor {
     width: 80%;
     margin: 0 auto;
   }
   ```

Estas estrategias y conceptos son esenciales para crear sitios web que se vean y funcionen bien en una variedad de dispositivos, desde pantallas grandes de escritorio hasta dispositivos móviles. La flexibilidad y la adaptabilidad son clave en el diseño responsivo.

---
## Resumen

En nuestro emocionante recorrido a través de "Introducción a CSS", exploramos los fundamentos que han dado forma al diseño web. Comenzamos aprendiendo cómo aplicar estilos, desde la vinculación de archivos CSS hasta la comprensión de propiedades esenciales como color, tamaño de fuente y márgenes.

Después, nos sumergimos en el intrigante mundo de los selectores de elementos, descubriendo cómo seleccionar con precisión partes específicas de una página. Exploramos el modelo de caja, comprendiendo las áreas cruciales de contenido, padding, borde y margen, que nos permitieron esculpir la apariencia visual deseada.

Avanzamos hacia el diseño y posicionamiento, donde aprendimos técnicas que van desde el posicionamiento relativo hasta el uso de flexbox y grid para diseños más complejos. Este conocimiento nos brindó el poder de controlar la disposición de los elementos en la página de manera efectiva.

Exploramos las posibilidades creativas de las pseudo-clases y pseudo-elementos, agregando estilos específicos a elementos en estados particulares o partes de un elemento. Finalmente, cerramos nuestro recorrido con una mirada esencial al "Responsive Design", donde aprendimos a crear diseños adaptables a diferentes dispositivos y tamaños de pantalla.

¡Este viaje en el tiempo pasado ha sentado las bases para tu dominio del CSS y ha abierto las puertas a un mundo de creatividad y diseño web!
