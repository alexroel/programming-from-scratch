# Introducción a CSS 

1. [Introducción](#introducción)
2. [Primeros estilos](#primeros-estilos)
3. [Selectores de elementos](#selectores-de-elementos)
4. [Estilos de texto](#estilos-de-texto)
5. [Modelo de caja](#modelo-de-caja)
6. [Tipos de elementos](#tipos-de-elementos)
7. [Resumen](#resumen)

---
## Introducción 


---
## Primeros estilos

**Estilos en línea:**
   - Se aplican directamente en la etiqueta HTML utilizando el atributo `style`.
   - Ejemplo:
     ```html
     <p style="color: blue; font-size: 16px;">Texto con estilos en línea</p>
     ```

**Estilos Internos:**
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

**Estilos Externos:**
   - Se almacenan en archivos CSS independientes y se vinculan al documento HTML.
   - Ejemplo:
     **Archivo HTML:**
     ```html
     <head>
       <link rel="stylesheet" type="text/css" href="styles/style.css">
     </head>
     <body>
       <p>Texto con estilos externos</p>
     </body>
     ```
     **Archivo CSS (`style.css`):**
     ```css
     p {
       color: red;
       font-size: 20px;
     }
     ```

Anatomía de CSS:

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

**Selector Universal (`*`):**
   - Selecciona todos los elementos en la página.
   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

**Selector de Tipo:**
   - Selecciona todos los elementos de un tipo específico.
   ```css
   p {
     font-family: 'Arial', sans-serif;
   }
   ```

**Selector de Clase (`.`):**
   - Selecciona todos los elementos que tienen una clase específica.
   ```css
   .destacado {
     color: #ff0000;
   }
   ```

**Selector de ID (`#`):**
   - Selecciona un elemento específico por su ID único.
   ```css
   #encabezado {
     font-size: 24px;
   }
   ```

**Selector de Atributo:**
   - Selecciona elementos que tienen un atributo específico.
   ```css
   input[type="text"] {
     border: 1px solid #ccc;
   }
   ```

**Selector Descendente:**
   - Selecciona un elemento que es un descendiente de otro elemento.
   ```css
   article p {
     font-style: italic;
   }
   ```

**Selector de Hijo (`>`):**
   - Selecciona un elemento que es un hijo directo de otro elemento.
   ```css
   nav > ul {
     list-style-type: none;
   }
   ```

**Selector de Pseudo-Clase:**
   - Selecciona elementos en un estado específico.
   ```css
   a:hover {
     text-decoration: underline;
   }
   ```

**Selector de Pseudo-Elemento:**
   - Selecciona partes específicas de un elemento.
   ```css
   p::first-line {
     font-weight: bold;
   }
   ```

**Selector Agrupado:**
   - Permite aplicar el mismo estilo a varios selectores.
   ```css
   h1, h2, h3 {
     color: #333;
   }
   ```

Estos son solo algunos ejemplos de la variedad de selectores que CSS ofrece. Combinar selectores de manera efectiva es clave para aplicar estilos de forma precisa y mantener un código CSS organizado.

---
## Estilos de texto
Los estilos de texto desempeñan un papel crucial en el diseño web, influyendo en la legibilidad y la estética de una página. En este artículo, analizaremos algunos ejemplos de estilos de texto utilizando CSS para mejorar la presentación y la experiencia del usuario.

**Estilos Globales del Cuerpo (`body`):**

Dentro de la regla para el cuerpo de la página (`body`), hemos definido algunos estilos globales para todo el texto en la página. 

```css
body {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}
```

Estos estilos establecen el tamaño de fuente predeterminado y la familia de fuentes para todo el contenido en la página. En este caso, se utiliza la fuente Arial como principal, seguida por Helvetica y fuentes sans-serif como alternativas.

**Estilos para Encabezados (`h1`):**

La regla para los encabezados (`h1`) presenta estilos más específicos para resaltar títulos importantes.

```css
h1 {
    font-size: 60px;
    text-align: center;
    text-shadow: 3px 3px 1px #566573;
    color: #1C2833;
}
```

En este ejemplo, hemos aumentado significativamente el tamaño de la fuente para el encabezado principal, centrado el texto, aplicado un sutil sombreado (`text-shadow`), y elegido un color específico (`#1C2833`) para mejorar la visibilidad y el atractivo visual.

**Estilos para Párrafos y Listas (`p`, `li`):**

La siguiente regla aborda tanto párrafos (`p`) como elementos de lista (`li`), definiendo estilos comunes.

```css
p, li {
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
}
```

Aquí, hemos establecido el tamaño de fuente, la altura de línea (`line-height`) para mejorar la legibilidad y el espaciado entre letras (`letter-spacing`) para un toque adicional de estilo.

En resumen, estos ejemplos ilustran cómo los estilos de texto en CSS pueden ser poderosos para personalizar la apariencia de una página web. Al experimentar con estos principios, los diseñadores pueden lograr un equilibrio entre estética y funcionalidad, mejorando así la experiencia del usuario.

**Ejemplo final**
```css
html{
    background-color: #068FD3;
}

body{
    /* Estilos de texto */
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    /* Estilos de modelo de caja */
}

/* Selector de pseudoclase */
a:hover{
    color: #068FD3;
}

h1{
    /* Estilos de texto */
    font-size: 60px;
    text-align:  center;
    text-shadow: 3px 3px 1px #566573;
    color: #1C2833;
}

p, li {
    /* Estilos de texto */
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
}
```
---
## Modelo de caja
El modelo de caja en CSS es esencial para entender cómo se estructuran y presentan los elementos en una página web. A través de propiedades como ancho, margen, relleno y borde, los diseñadores pueden controlar la apariencia y disposición de los elementos. En este artículo, analizaremos un ejemplo específico para ilustrar cómo funciona el modelo de caja.

1. **Estilos Globales del Cuerpo (`body`):**

Dentro de la regla para el cuerpo de la página (`body`), hemos definido estilos relacionados con el modelo de caja que afectan a todo el contenido.

```css
body {
    width: 600px;
    background-color: #EBF5FB;
    margin: 0 auto;
    padding: 20px;
    border: 5px solid #273746;
}
```

- **`width`:** Establece el ancho del área de contenido a 600 píxeles.
- **`background-color`:** Define el color de fondo como #EBF5FB.
- **`margin`:** Configura un margen automático a izquierda y derecha, centrando el contenido horizontalmente.
- **`padding`:** Agrega un relleno interno de 20 píxeles alrededor del contenido.
- **`border`:** Aplica un borde sólido de 5 píxeles con color #273746 alrededor del área de contenido.

**Estilos para Encabezados (`h1`):**

La regla para los encabezados (`h1`) presenta estilos específicos del modelo de caja.

```css
h1 {
    margin: 0;
}
```

- **`margin`:** Elimina el margen predeterminado del encabezado, asegurando que no haya espacio adicional alrededor.

En resumen, este ejemplo ilustra cómo el modelo de caja en CSS permite controlar el tamaño, el margen, el relleno y el borde de los elementos. Al entender y aplicar estas propiedades, los diseñadores pueden crear diseños más precisos y estéticos. Experimenta con estos conceptos para mejorar tu comprensión del modelo de caja y perfeccionar el diseño de tus páginas web.

---
## Tipos de elementos

En el mundo del diseño web, comprender cómo los diferentes elementos se presentan en una página es esencial. En este artículo, nos sumergiremos en el ejemplo de la etiqueta `<img>` y exploraremos cómo el valor predeterminado de `display` y el uso de márgenes pueden afectar la presentación de una imagen.

**1. Valor Predeterminado de `display` para `<img>`: `inline`**

Cuando hablamos de la etiqueta `<img>`, su valor predeterminado para la propiedad `display` es `inline`. Esto significa que la imagen se presenta en línea con el contenido circundante, sin iniciar una nueva línea. 

```css
/* Estilos predeterminados para <img> */
img {
    /* display: inline; (valor predeterminado) */
    margin-top: 10px;
    margin-bottom: 10px;
}
```

En este contexto, hemos intentado aplicar márgenes superior e inferior (`margin-top` y `margin-bottom`) a la imagen. Sin embargo, debido al valor predeterminado `display: inline;`, estos márgenes pueden tener un impacto limitado en la disposición vertical de la imagen.

**2. Cambiando a `display: block;` para Mejorar la Presentación:**

Para tener un mayor control sobre la presentación y aprovechar mejor los márgenes, podemos cambiar el valor de `display` a `block`. 

```css
/* Centrando imagen */
img {
    display: block;
    margin: 0 auto;
}
```

- **`display: block;`:** Este cambio convierte la imagen en un elemento de bloque, permitiendo el uso más efectivo de márgenes tanto en la parte superior como en la inferior.

- **`margin: 0 auto;`:** Aplicar un margen automático a izquierda y derecha ayuda a centrar la imagen horizontalmente dentro de su contenedor.

**Conclusión:**

La elección del valor de `display` tiene un impacto directo en la presentación de los elementos, y este cambio es particularmente útil para las imágenes. Cambiar de `inline` a `block` puede facilitar la alineación y el centrado, mejorando la estética y la disposición visual en la página web.

En resumen, comprender y aprovechar las propiedades de presentación en CSS, como `display` y márgenes, proporciona a los diseñadores las herramientas necesarias para personalizar y optimizar la apariencia de los elementos en una página web. ¡Experimenta con estos conceptos para perfeccionar tus habilidades de diseño web!

---
## Resumen

En nuestro emocionante recorrido a través de "Introducción a CSS", exploramos los fundamentos que han dado forma al diseño web. Comenzamos aprendiendo cómo aplicar estilos, desde la vinculación de archivos CSS hasta la comprensión de propiedades esenciales como color, tamaño de fuente y márgenes.

Después, nos sumergimos en el intrigante mundo de los selectores de elementos, descubriendo cómo seleccionar con precisión partes específicas de una página. Exploramos el modelo de caja, comprendiendo las áreas cruciales de contenido, padding, borde y margen, que nos permitieron esculpir la apariencia visual deseada.

Avanzamos hacia el diseño y posicionamiento, donde aprendimos técnicas que van desde el posicionamiento relativo hasta el uso de flexbox y grid para diseños más complejos. Este conocimiento nos brindó el poder de controlar la disposición de los elementos en la página de manera efectiva.

Exploramos las posibilidades creativas de las pseudo-clases y pseudo-elementos, agregando estilos específicos a elementos en estados particulares o partes de un elemento. Finalmente, cerramos nuestro recorrido con una mirada esencial al "Responsive Design", donde aprendimos a crear diseños adaptables a diferentes dispositivos y tamaños de pantalla.

¡Este viaje en el tiempo pasado ha sentado las bases para tu dominio del CSS y ha abierto las puertas a un mundo de creatividad y diseño web!
