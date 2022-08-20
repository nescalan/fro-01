# Universidad Cenfotec

## Ejercicio 1:

1. Cree un nuevo documento de HTML llamado personajes.html dentro de la carpera fro01.
2. Construya la plantilla principal del documento de html.
3. Modifique el elemento title.
4. Dentro del elemento body cree un elemento <header><header>
5. Dentro del elemento header construya un elemento <nav></nav>
6. Analice la información de las siguientes fuentes con respecto al elemento de hipervínculo (anchor):

   - [https://www.w3schools.com/tags/tag_a.asp](https://www.w3schools.com/tags/tag_a.asp)
   - [https://developer.mozilla.org/es/docs/Web/HTML/Element/a](https://developer.mozilla.org/es/docs/Web/HTML/Element/a)

7. Cree los siguientes tres elementos de hipervínculo dentro del nav:
   - Hipervínculo para el index:
     - Su texto visible debe decir Inicio
     - Debe referenciar al archivo index.html
   - Hipervínculo para el documento de personajes:
     - Su texto visible debe decir Personajes
     - Debe referenciar al archivo personajes.html
   - Hipervínculo para el sitio oficial:
     - Su texto visible debe decir Sitio web
     - Debe referenciar al url del sitio oficial.

**Resultado esperado:** Al darle click a los hipervínculos debe redireccionar a la página respectiva.

## Ejercicio 2:

1. Dentro de la página de personajes.html abajo del header cree el elemento <main></main>
2. Dentro del elemento main cree una sección usando el elemento <section></section>.
3. A la sección agréguele el id: sct-informacion
4. Dentro de la sección agregué un elemento h2 que diga Información de los personajes
5. Cree una carpeta dentro del proyecto llamada imgs.
6. Escoja 3 personajes y descargue 1 imagen para cada uno
7. Para cada personaje dentro del html coloque:
   - Un elemento de párrafo con la información general
   - Una imagen del personaje, usando como referencia la siguiente documentación:
     - [https://www.w3schools.com/tags/tag_img.asp](https://www.w3schools.com/tags/tag_img.asp)
     - [https://developer.mozilla.org/es/docs/Web/HTML/Element/img](https://developer.mozilla.org/es/docs/Web/HTML/Element/img)
8. No se preocupe por el tamaño de las imágenes en este momento, lo importante es
   que queden visibles.

**Resultado esperado:** Visualización de la sección de personajes con la información e imagen de 3 de ellos.

## Ejercicio 3:

1. Idetifique de la sección sct-informacion de la página de personajes.html
2. Coloque cada uno de los elementos de imagen dentro de un contenedor de figura usando el elemento <figure></figure>
3. Al elemento figure, agréguele la clase “contenedor-img-personaje”, dentro de su etiqueta de apertura.
4. Cree dentro del proyecto un nuevo archivo de css llamado personaje.css, dentro de la carpeta de css.
5. Cree una regla de estilo para la clase anterior, recuerde que en css las clases se representan con el símbolo “.”
6. Coloque dentro de la regla las siguientes propiedades:
   - width: 250px
7. Ahora cree la siguiente regla .contenedor-img-personaje img{} , esta regla sirve para darle estilos al elemento de imagen que se colocó dentro de la figura con la clase contenedor-img-personaje.
8. Agregué las siguiente propiedad:
   - width: 100%;

Los puntos anteriores permiten que la imagen se adapte al tamaño de su contenedor padre, en este caso el elemento con la clase contenedor-img-personaje. Si desea modificar el tamaño para que la imagen se vea más grande o pequeña puede regresar al punto 6 y modificar los pixeles del width.

**Resultado esperado:** Imágenes redimensionadas.

# Lecciones Aprendidas

## Primera Lección:

Conocer la estructura base de un documento HTML y sus diferentes elementos, así como, enlazar una hoja de estilos al HTML principal.

## Segunda Lección:

1. Creación de un menú y la forma de enlazarlo con una nueva página HTML
2. Organización de los diferentes archivos correspondientes a un proyecto de web
3. Creación de tarjetas para presentar información para cada uno de los personajes

## Tercera Lección:

Una mejor comprensión del elemento "viewport", el cual ayuda a los "media queries" y la utilización de los diferente elementos de "media" para configurarlos de modo que se adapten a los diferentes puntos de "salto"
