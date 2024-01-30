# Introducción a HTML

1. [Introducción](#introducción)
2. [Estructura base de HTML](#estructura-base-de-html)
3. [¿Qué es un atributo?](#¿qué-es-un-atributo)
4. [Imágenes](#imágenes)
5. [Etiquetas de texto](#etiquetas-de-texto)
6. [Vínculos](#vínculos)
7. [Etiquetas de Listas](#etiquetas-de-listas)
8. [Resumen](#resumen)

---
## Introducción


---
## Estructura base de HTML

HTML, el lenguaje de marcado utilizado para crear páginas web, tiene una estructura básica que consta de elementos anidados. Vamos a analizar la anatomía de un elemento HTML y la anidación de elementos utilizando el siguiente ejemplo como referencia:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Mi Web</title>
   </head>
   <body>
      <h1>Hola Mundo</h1>
      <p>Este es mi primer sitio web.</p>
   </body>
</html>
```

**Anatomía de un Elemento HTML**

En HTML, un elemento básico consta de una etiqueta de apertura, contenido y una etiqueta de cierre. Analizaremos el ejemplo `<h1>Hola Mundo</h1>` para entender su estructura:

- **Etiqueta de Apertura (`<h1>`):** Inicia el elemento, en este caso, un encabezado de nivel 1.

- **Contenido (`Hola Mundo`):** Es el texto o contenido del elemento.

- **Etiqueta de Cierre (`</h1>`):** Finaliza la definición del elemento.

**Anidación de Elementos**

La anidación implica colocar elementos dentro de otros. En el segundo ejemplo, se muestra una estructura básica con anidación:

```html
<html>
   <head>
      
   </head>
   <body>
   
   </body>
</html>
```

- **Etiqueta de Apertura (`<html>`):** Inicia el documento HTML.

- **Etiqueta de Apertura (`<head>`):** Inicia la sección de metadatos del documento.

- **Etiqueta de Cierre (`</head>`):** Marca el final de la sección de metadatos.

- **Etiqueta de Apertura (`<body>`):** Inicia la sección de contenido principal del documento.

- **Etiqueta de Cierre (`</body>`):** Marca el final de la sección de contenido.

- **Etiqueta de Cierre (`</html>`):** Marca el final del documento HTML.

**Estructura Base Completa**

Ahora, consideremos la estructura completa del documento HTML original:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Mi Web</title>
   </head>
   <body>
      <h1>Hola Mundo</h1>
      <p>Este es mi primer sitio web.</p>
   </body>
</html>
```

- **`<!DOCTYPE html>`:** Declara la versión de HTML que se está utilizando (en este caso, HTML5).

- **Etiqueta de Apertura (`<html>`):** Inicia y cierra el documento HTML.

- **Etiqueta de Apertura (`<head>`):** Inicia y cierra la sección de metadatos.

- **Etiqueta de Apertura (`<title>`):** Define el título de la página.

- **Etiqueta de Apertura (`<h1>`):** Define un encabezado de nivel 1.

- **Etiqueta de Apertura (`<p>`):** Define un párrafo.


Comprender la anatomía y la anidación de elementos en HTML es fundamental para desarrollar páginas web correctamente estructuradas y comprensibles para los navegadores web.

---
## ¿Qué es un atributo?
Un atributo en HTML proporciona información adicional sobre un elemento y se agrega a la etiqueta de apertura del elemento para modificar su comportamiento o proporcionar metadatos. Vamos a desglosar qué es un atributo, sus partes y dar un ejemplo específico.

**¿Qué es un Atributo?**

En HTML, un atributo es una característica adicional que se agrega a la etiqueta de apertura de un elemento para proporcionar información adicional sobre ese elemento. Los atributos permiten modificar el comportamiento o proporcionar metadatos que no se expresan directamente en el contenido del elemento.

**Partes de un Atributo**

Un atributo generalmente consta de dos partes:

1. **Nombre del Atributo:** Es el nombre que identifica la propiedad que se está configurando. En el ejemplo `<html lang="es">`, el nombre del atributo es "lang".

2. **Valor del Atributo:** Es la información específica asociada con el atributo. En el ejemplo `<html lang="es">`, el valor del atributo "lang" es "es" (español).

**Ejemplo de un Atributo**

Consideremos el siguiente ejemplo:

```html
<html lang="es">
   <head>
      <title>Mi Web</title>
   </head>
   <body>
      <h1>Hola Mundo</h1>
      <p>Este es mi primer sitio web.</p>
   </body>
</html>
```

En este caso, `<html lang="es">` es la etiqueta de apertura para el elemento `<html>`, y tiene el atributo "lang" con el valor "es". Aquí está la explicación detallada:

- **Nombre del Atributo (`lang`):** Identifica que estamos configurando el atributo de idioma.

- **Valor del Atributo (`"es"`):** Especifica que el idioma de la página web es español.

Este atributo se utiliza para indicar el idioma principal de la página. Los navegadores pueden utilizar esta información para ajustar la presentación de la página según las preferencias de idioma del usuario.

En resumen, un atributo en HTML es una herramienta importante para proporcionar información adicional sobre los elementos y mejorar la estructura y la presentación de una página web.

---
## Imágenes

Las imágenes son un componente esencial en el desarrollo web, y en HTML, el elemento `<img>` es la herramienta principal para incorporarlas. Este elemento permite la inclusión de imágenes en una página web, proporcionando una manera visualmente atractiva de presentar información. Vamos a explorar brevemente cómo funciona y analizar el siguiente ejemplo:

```html
<img src="images/logo-google.png" alt="Logo de Google" width="300">
```

**1. La etiqueta `<img>`:**
La etiqueta `<img>` se utiliza para insertar imágenes en una página HTML. En el ejemplo, esta etiqueta es el punto de partida y le indica al navegador que se incluirá una imagen.

**2. Atributo "src":**
El atributo `src` (source) especifica la ruta de la imagen. En este caso, "images/logo-google.png" indica que la imagen llamada "logo-google.png" se encuentra en la carpeta "images" del directorio actual.

**3. Atributo "alt":**
El atributo `alt` (alternative text) proporciona un texto alternativo que se mostrará si la imagen no puede cargarse. Es esencial para la accesibilidad web y para describir el contenido de la imagen. En este ejemplo, "Logo de Google" describe la imagen.

**4. Atributo "width":**
El atributo `width` establece el ancho de la imagen en píxeles. En este caso, la imagen se mostrará con un ancho de 300 píxeles. Es una práctica común definir el ancho y alto para controlar mejor la presentación de las imágenes en la página.

En resumen, el ejemplo `<img src="img/logo-google.png" alt="Logo de Google" width="300">` ilustra cómo agregar una imagen llamada "logo-google.png" a una página HTML, con un texto alternativo y un ancho específico. Al entender estos conceptos básicos, los desarrolladores pueden enriquecer sus sitios web con contenido visual de manera efectiva y accesible.

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

Ejemplo final:
```html
<!DOCTYPE html>
<html lang="es">

<head>
   <title>Mi Web</title>
</head>

<body>
   <h1>Google es genial.</h1>
   <p>
      <strong>Google</strong> es el principal motor de búsqueda en línea, <u>lanzado en 1998</u>,
      que conecta a los usuarios con información relevante en la web.
   </p>

   <img src="images/logo-google.png" alt="Logo de Google" width="300">

   <p>
      Sumérgete en la eficacia del motor de búsqueda más utilizado en todo el mundo.
      Experimenta la rapidez y precisión al encontrar información relevante con tan solo unos clics.
      Puedes usar el siguiente URL para poder acceder a la página de Google: <i>https://www.google.com/</i>
   </p>

   <p></p>
</body>

</html>
```

Estas son solo algunas de las etiquetas más comunes para trabajar con texto en HTML. Puedes combinarlas y personalizarlas según tus necesidades específicas para crear una presentación de texto efectiva en tu página web.


---
## Vínculos
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

**Ejemplo Final**

```html
    <p>
      Sumérgete en la eficacia del motor de búsqueda más utilizado en todo el mundo.
      Experimenta la rapidez y precisión al encontrar información relevante con tan solo unos clics.
      Puedes usar el siguiente enlace para poder acceder a la página de Google:
      <a href="https://www.google.com/" target="_blank" title="Página de google">Ir a Google</a>.
   </p>
```

---
## Etiquetas de Listas
En HTML, puedes crear listas ordenadas y no ordenadas utilizando las siguientes etiquetas:

1. **Lista Ordenada (`<ol>`):**
   - La etiqueta `<ol>` se utiliza para crear listas ordenadas.
   - Los elementos de la lista se definen con la etiqueta `<li>` (elemento de lista).

   Ejemplo:
   ```html
   <ol>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
   </ol>
   ```

2. **Lista No Ordenada (`<ul>`):**
   - La etiqueta `<ul>` se utiliza para crear listas no ordenadas.
   - Los elementos de la lista también se definen con la etiqueta `<li>`.

   Ejemplo:
   ```html
   <ul>
      <li>Elemento A</li>
      <li>Elemento B</li>
      <li>Elemento C</li>
   </ul>
   ```

3. **Lista de Definición (`<dl>`):**
   - La etiqueta `<dl>` se utiliza para crear listas de definición.
   - Los términos se definen con la etiqueta `<dt>` (término de definición) y las definiciones con la etiqueta `<dd>` (definición).

   Ejemplo:
   ```html
   <dl>
      <dt>Término 1</dt>
      <dd>Definición 1</dd>
      <dt>Término 2</dt>
      <dd>Definición 2</dd>
   </dl>
   ```

Estas etiquetas son esenciales para estructurar el contenido y presentar información de manera organizada en una página web.

**Ejemoplo final**
```html
   <h2>Mas alla del buscador</h2>
   <p>
      Google no se limita solo a su icónico motor de búsqueda. Este gigante tecnológico ofrece un extenso ecosistema de
      plataformas y servicios que abarcan diversas necesidades en línea. Algunas de las notables incluyen:
   </p>

   <ul>
      <li>Gmail</li>
      <li>Google Drive</li>
      <li>Google Maps</li>
      <li>YouTube</li>
      <li>Android</li>
   </ul>
```

---
## Resumen 





