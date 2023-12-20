# Introducción a HTML

1. Introducción
2. Estructura base de HTML
3. Etiquetas de texto
4. Etiquetas de enlaces
5. Etiquetas de Imagenes
6. Estructura semántica de HTML
7. Formularios
8. Resumen

---
## Introducción
**Introducción a HTML: Fundamentos para Crear Páginas Web**

¡Bienvenidos a la sección de Introducción a HTML! En este curso, exploraremos los conceptos esenciales que forman la base de la creación de páginas web. HTML, o HyperText Markup Language, es el lenguaje de marcado estándar para la creación y el diseño de contenido en la World Wide Web.

### 1. Estructura Base de HTML
Comenzaremos con la estructura básica de un documento HTML. Aprenderemos a crear la fundación de nuestras páginas web, comprendiendo la importancia de elementos como `<!DOCTYPE html>`, `<html>`, `<head>`, y `<body>`. Esta estructura proporciona el lienzo sobre el cual construiremos nuestros sitios web.

### 2. Etiquetas de Texto
Exploraremos las etiquetas que dan forma y estructura al contenido de nuestras páginas. Desde encabezados (`<h1>` a `<h6>`) hasta párrafos (`<p>`), negritas (`<strong>`), cursivas (`<em>`), y más. Descubriremos cómo dar estilo y significado a nuestro texto.

### 3. Etiquetas de Enlaces
Aprenderemos a crear conexiones entre páginas web y recursos con las etiquetas de enlaces. Desde simples enlaces a otras páginas hasta enlaces de correo electrónico, descubriremos cómo facilitar la navegación para nuestros usuarios.

### 4. Etiquetas de Imágenes
Sumergiremos en el mundo visual con las etiquetas de imágenes. Desde incrustar imágenes con `<img>` hasta ajustar su tamaño y proporcionar texto alternativo con `alt`, exploraremos cómo hacer que nuestras páginas sean más atractivas y expresivas.

### 5. Estructura Semántica de HTML
Entenderemos la importancia de la semántica en HTML. Desde las etiquetas `<header>` y `<footer>` hasta `<section>`, `<article>`, y `<nav>`, aprenderemos a estructurar nuestras páginas de una manera que no solo sea visualmente atractiva, sino también significativa para los motores de búsqueda y la accesibilidad.

### 6. Formularios
Exploraremos la creación de formularios interactivos con HTML. Desde campos de texto y áreas de texto hasta botones de envío, aprenderemos cómo recopilar datos valiosos de nuestros usuarios.

¡Prepárense para sumergirse en el fascinante mundo de HTML y construir las bases sólidas necesarias para crear experiencias web impactantes!

---
## Estructura base de HTML
La estructura básica de un documento HTML consta de varias partes esenciales. Aquí tienes un ejemplo de la estructura base de un documento HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la Página</title>
</head>
<body>

    <!-- Contenido de la página -->
    <h1>Encabezado de la Página</h1>

</body>
</html>
```

Explicación de las partes clave:

- `<!DOCTYPE html>`: Declaración del tipo de documento HTML.
- `<html lang="es">`: Elemento raíz del documento con el atributo `lang` para especificar el idioma.
- `<head>`: Contiene metaetiquetas, enlaces a archivos externos y el título de la página.
- `<meta charset="UTF-8">`: Especifica la codificación de caracteres del documento como UTF-8.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configuración de la escala inicial y dimensiones en dispositivos móviles.
- `<title>`: Título de la página que aparecerá en la pestaña del navegador.
- `<body>`: Contiene todo el contenido visible de la página.

Esta estructura proporciona una base organizada y semántica para construir páginas web. Puedes personalizarla según las necesidades específicas de tu proyecto.

---
## Etiquetas de texto
En HTML, hay varias etiquetas destinadas a formatear y estructurar texto. Aquí tienes algunas de las etiquetas más comunes para trabajar con texto:

1. **Encabezados (`<h1>` a `<h6>`):**
   - Se utilizan para definir encabezados y títulos en la página. `<h1>` es el encabezado más grande y `<h6>` es el más pequeño.

   ```html
   <h1>Encabezado de Nivel 1</h1>
   <h2>Encabezado de Nivel 2</h2>
   <!-- ... -->
   <h6>Encabezado de Nivel 6</h6>
   ```

2. **Párrafos (`<p>`):**
   - Se utiliza para definir párrafos de texto.

   ```html
   <p>Este es un párrafo de texto.</p>
   ```

3. **Negrita (`<strong>`) y Cursiva (`<em>`):**
   - `<strong>` se usa para resaltar texto como importante o enfatizado.
   - `<em>` se utiliza para enfatizar el texto.

   ```html
   <p>Este es un texto <strong>importante</strong> y <em>enfatizado</em>.</p>
   ```

4. **Subrayado (`<u>`):**
   - Se utiliza para subrayar texto, aunque su uso no es tan común debido a que se prefiere el uso de estilos de CSS para la presentación.

   ```html
   <p>Este texto está <u>subrayado</u>.</p>
   ```

5. **Citas (`<blockquote>` y `<q>`):**
   - `<blockquote>` se utiliza para citas extensas.
   - `<q>` se usa para citas cortas.

   ```html
   <blockquote>
      <p>Esta es una cita más larga...</p>
   </blockquote>

   <p>Alguien dijo <q>Esta es una cita corta</q>.</p>
   ```

6. **Listas (`<ul>`, `<ol>`, `<li>`):**
   - `<ul>` se usa para crear listas no ordenadas.
   - `<ol>` se utiliza para listas ordenadas.
   - `<li>` define cada elemento de la lista.

   ```html
   <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
   </ul>

   <ol>
      <li>Primer elemento</li>
      <li>Segundo elemento</li>
      <li>Tercer elemento</li>
   </ol>
   ```

7. **Salto de línea (`<br>`):**
   - Se utiliza para realizar un salto de línea dentro de un párrafo.

   ```html
   <p>Línea 1.<br>Línea 2.</p>
   ```

Estas son solo algunas de las etiquetas más comunes para trabajar con texto en HTML. Puedes combinarlas y personalizarlas según tus necesidades específicas para crear una presentación de texto efectiva en tu página web.

---
## Etiquetas de enlaces
En HTML, las etiquetas de enlaces se utilizan para crear hipervínculos que conectan diferentes páginas web, recursos o ubicaciones dentro de una página. Aquí están las principales etiquetas de enlaces:

1. **Enlace (`<a>`):**
   - Se utiliza para crear un enlace a otra página o recurso.

   ```html
   <a href="https://www.ejemplo.com">Enlace a Ejemplo</a>
   ```

   También puedes enlazar a ubicaciones internas en la misma página utilizando identificadores (`id`) de elementos:

   ```html
   <a href="#seccion1">Ir a la Sección 1</a>
   ```

2. **Enlace con Apertura en Nueva Pestaña (`target="_blank"`):**
   - Permite que el enlace se abra en una nueva pestaña o ventana del navegador.

   ```html
   <a href="https://www.ejemplo.com" target="_blank">Abrir en Nueva Pestaña</a>
   ```

3. **Enlace con Título (`title`):**
   - Proporciona información adicional al usuario cuando pasa el cursor sobre el enlace.

   ```html
   <a href="https://www.ejemplo.com" title="Visitar Ejemplo">Enlace a Ejemplo</a>
   ```

4. **Enlace de Correo Electrónico (`mailto:`):**
   - Abre el cliente de correo electrónico predeterminado con la dirección de correo electrónico predefinida.

   ```html
   <a href="mailto:correo@ejemplo.com">Enviar correo</a>
   ```

5. **Enlace a Descargas (`download`):**
   - Especifica que el enlace apunta a un recurso descargable y sugiere un nombre de archivo para la descarga.

   ```html
   <a href="documento.pdf" download="mi_documento">Descargar Documento</a>
   ```

Estas son las etiquetas principales para trabajar con enlaces en HTML. Puedes personalizarlos según tus necesidades específicas. Recuerda que el atributo `href` es esencial, ya que indica la dirección a la que el enlace lleva.

---
## Etiquetas de Imagenes
En HTML, la etiqueta principal para mostrar imágenes es la etiqueta `<img>`. Aquí tienes un ejemplo de cómo usarla:

```html
<img src="ruta-de-la-imagen.jpg" alt="Texto alternativo">
```

Donde:

- `src`: Especifica la ruta de la imagen. Puede ser una ruta relativa (referente al archivo HTML) o una URL completa.
- `alt`: Proporciona un texto alternativo que se muestra si la imagen no se puede cargar. También es útil para la accesibilidad y motores de búsqueda.

Ejemplo completo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Imagen</title>
</head>
<body>

    <h1>Mi Página con Imagen</h1>

    <img src="imagen-ejemplo.jpg" alt="Imagen de ejemplo">

</body>
</html>
```

Además de la etiqueta `<img>`, aquí hay algunas consideraciones adicionales:

- **Atributo `width` y `height`:**
  Puedes usar estos atributos para especificar el ancho y el alto de la imagen en píxeles. Esto ayuda al navegador a reservar espacio para la imagen antes de que se cargue completamente, evitando cambios en el diseño mientras se carga la página.

  ```html
  <img src="imagen-ejemplo.jpg" alt="Imagen de ejemplo" width="300" height="200">
  ```

- **Enlaces en Imágenes:**
  Puedes envolver una etiqueta `<img>` con una etiqueta `<a>` para hacer que la imagen sea un enlace clickeable.

  ```html
  <a href="enlace-a-la-pagina.html">
      <img src="imagen-ejemplo.jpg" alt="Imagen de ejemplo">
  </a>
  ```

Estas son las principales etiquetas relacionadas con imágenes en HTML. Recuerda que es buena práctica proporcionar texto alternativo y especificar dimensiones cuando sea posible para mejorar la accesibilidad y el rendimiento de tu sitio web.

---
## Estructura semántica de HTML
La estructura semántica en HTML se refiere al uso de etiquetas que expresan significado y propósito en lugar de simplemente definir la apariencia visual. El uso adecuado de estas etiquetas mejora la accesibilidad, facilita el mantenimiento del código y mejora la comprensión del contenido por parte de los motores de búsqueda. Aquí tienes algunas de las etiquetas semánticas más importantes en HTML:

1. **`<header>`: Encabezado de la Página**
   - Representa la cabecera de una sección o de la página completa. Puede contener elementos como títulos, logotipos y menús de navegación.

   ```html
   <header>
       <h1>Nombre de la Página</h1>
       <nav>
           <!-- Menú de navegación -->
       </nav>
   </header>
   ```

2. **`<nav>`: Menú de Navegación**
   - Se utiliza para definir un menú de navegación, que generalmente contiene enlaces a otras partes del sitio web.

   ```html
   <nav>
       <ul>
           <li><a href="#inicio">Inicio</a></li>
           <li><a href="#acerca-de">Acerca de</a></li>
           <li><a href="#contacto">Contacto</a></li>
       </ul>
   </nav>
   ```

3. **`<main>`: Contenido Principal**
   - Define el contenido principal de la página. Debería contener el contenido único de cada página.

   ```html
   <main>
       <article>
           <!-- Contenido principal de la página -->
       </article>
   </main>
   ```

4. **`<article>`: Artículo**
   - Se utiliza para representar un contenido independiente y autónomo, como un artículo de noticias o un blog.

   ```html
   <article>
       <h2>Título del Artículo</h2>
       <!-- Contenido del artículo -->
   </article>
   ```

5. **`<section>`: Sección**
   - Define una sección en el documento. Puede contener varios elementos, incluidos encabezados (`<h1>` a `<h6>`), párrafos, listas, etc.

   ```html
   <section>
       <h2>Sección 1</h2>
       <p>Contenido de la sección 1...</p>
   </section>
   ```

6. **`<aside>`: Contenido Secundario**
   - Se utiliza para representar contenido secundario que está relacionado con el contenido circundante, como barras laterales o notas al margen.

   ```html
   <aside>
       <!-- Contenido secundario, como un anuncio o enlaces relacionados -->
   </aside>
   ```

7. **`<footer>`: Pie de Página**
   - Representa la zona de pie de página de una sección o de la página completa.

   ```html
   <footer>
       <p>&copy; 2023 Nombre de la Página</p>
   </footer>
   ```

Estas etiquetas proporcionan una estructura semántica que no solo ayuda a los desarrolladores a entender el contenido, sino que también mejora la accesibilidad y la indexación por parte de los motores de búsqueda. Es importante elegir las etiquetas apropiadas según la naturaleza del contenido que estás marcando.

---
## Formularios
En HTML, los formularios son elementos fundamentales que permiten a los usuarios enviar datos al servidor web para su procesamiento. Aquí hay una estructura básica de un formulario HTML y algunas de las etiquetas comunes utilizadas en formularios:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Básico</title>
</head>
<body>

    <h1>Formulario de Contacto</h1>

    <form action="/procesar-formulario" method="post">
        <!-- Campos del formulario -->
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <input type="submit" value="Enviar">
    </form>

</body>
</html>
```

Explicación de algunas etiquetas y atributos importantes en este formulario:

- `<form>`: Define el formulario y especifica la acción (`action`) y el método (`method`) de envío de datos al servidor. El atributo `action` generalmente apunta a la URL del script de servidor que procesará los datos, y el atributo `method` puede ser "get" o "post".

- `<label>`: Etiqueta para asociar un texto descriptivo con un elemento de formulario. Mejora la accesibilidad y la usabilidad.

- `<input>`: Se utiliza para crear varios tipos de campos de entrada, como campos de texto (`type="text"`), campos de correo electrónico (`type="email"`), botones (`type="submit"`), etc.

- `<textarea>`: Se utiliza para crear un área de texto multilínea, útil para campos más extensos como mensajes o comentarios.

- `for` y `id`: La etiqueta `<label>` se asocia a un elemento de formulario mediante el atributo `for`, que tiene el mismo valor que el atributo `id` del elemento al que se refiere.

- `required`: Atributo booleano que indica que un campo debe ser completado antes de enviar el formulario.

Este es un ejemplo básico. Puedes personalizar y expandir el formulario según tus necesidades. Además, es importante agregar lógica de validación tanto en el lado del cliente (usando JavaScript) como en el lado del servidor para garantizar la integridad de los datos recibidos.

---
## Resumen 
**Introducción a HTML: Fundamentos para Crear Páginas Web**

En esta sección, exploramos los conceptos fundamentales que conforman la base de la creación de páginas web utilizando HTML. Iniciamos con la estructura básica de un documento HTML, comprendiendo la importancia de elementos clave como `<!DOCTYPE html>`, `<html>`, `<head>`, y `<body>`. Esta estructura proporcionó el lienzo sobre el cual construimos nuestras páginas web.

Luego, nos sumergimos en las etiquetas de texto, aprendiendo a dar forma y estructura al contenido de nuestras páginas. Desde encabezados (`<h1>` a `<h6>`) hasta párrafos (`<p>`), negritas (`<strong>`), y cursivas (`<em>`), descubrimos cómo dar estilo y significado a nuestro texto.

Exploramos las etiquetas de enlaces, aprendiendo a crear conexiones entre páginas web y recursos. Desde simples enlaces a otras páginas hasta enlaces de correo electrónico, facilitamos la navegación para nuestros usuarios.

Entramos en el mundo visual con las etiquetas de imágenes. Desde incrustar imágenes con `<img>` hasta ajustar su tamaño y proporcionar texto alternativo con `alt`, exploramos cómo hacer que nuestras páginas sean más atractivas y expresivas.

Comprendimos la importancia de la semántica en HTML, utilizando etiquetas como `<header>`, `<footer>`, `<section>`, `<article>`, y `<nav>`. Estas no solo añadieron atractivo visual, sino también significado para los motores de búsqueda y la accesibilidad.

Finalmente, nos sumergimos en la creación de formularios interactivos. Desde campos de texto hasta áreas de texto y botones de envío, aprendimos a recopilar datos valiosos de nuestros usuarios.

¡Hemos construido las bases sólidas necesarias para crear experiencias web impactantes en el fascinante mundo de HTML!





