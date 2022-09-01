
# Universidad Cenfotec

## Ejercicio 4:

## **Objetivos**:

- Recordar la anatomía básica de una página web
- Repasar los elementos de html vistos en clase
- Manipular el comportamiento visual de los elementos de html por medio de css (utilizando únicamente estilos absolutos/ de elementos)
- Conocer el elemento de enlace
- Utilizar el elemento nav
- Reproducir los estilos que transforman una lista en un menú

## **Descripción**

Usted debe crear una página web que tenga la información del planeta saturno.

1. Cree un archivo como saturno.html
2. Cree un archivo que se llame saturno.css (Dentro de la subcarpeta css)
3. En el archivo html construya la anatomía básica de una página web. (No olvide poner el doctype y meta charset)
4. Dentro del elemento “head” agregue la referencia del archivo css <link rel="stylesheet" href="saturno.css">
5. Dentro del body agregue un elemento h1 que diga Saturno
6. Abajo del h1 , agregue un elemento h2 que diga “Información general”
7. Abajo del h2 , agregue dos párrafos con información del planeta Saturno tomada de [http://es.wikipedia.org/wiki/Saturno_(planeta)](http://es.wikipedia.org/wiki/Saturno_%28planeta%29) , de la “sección características generales”
8. Marque dentro del elemento span las siguientes palabras de ambos párrafos:
    - Párrafo 1: Sistema Solar , hidrógeno, helio
    - Párrafo 2: Ulysses, Cassini, géiseres , Encélado
    - (Son las mismas palabras resaltadas en la referencia de wikipedia)
9. En la hoja de estilo defina las siguientes reglas para el elemento body 
    - Ancho 1024px
    - Margen 0 auto (para centrar el body)
    - Tamaño de letra en 18px
    - Color de fondo del body #ecf0f1
    - Tipografía Tahoma
10. Para el elemento p defina las siguientes reglas
    - Texto justificado
    - Interlineado de 35px

11. Para el elemento h1 defina las siguientes reglas
    - Tamaño de letra 28px
    - Color de letra #d35400
12. Para el elemento h2 defina las siguientes reglas
    - Tamaño de letra 22px
    - Color de letra #e67e22
13. Para el elemento span defina las siguientes reglas
    - Color de letra #3498db
    - Subrayado [ text-decoration: underline; ]

14. Arriba del elemento h1, copie la siguiente estructura (para información de estos elementos, ver más abajo)

![App Screenshot](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4f82c7b4-f642-4dfa-970b-e9129cc10d1d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220818T203818Z&X-Amz-Expires=86400&X-Amz-Signature=5d863d4d4733d8027b63130e5888ca518d73fb830cb50341848c9594933b4665&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

15. En el css cree para el elemento nav las siguientes reglas
    - Color de fondo #2c3e50
    - Padding 15px [ padding: 15px; ]

16. En el css cree para el elemento “a” las siguientes reglas
    - Color de texto #f1c40f
    - Margen de 75px
    - Eliminar el subrayado [text-decoration: none;]
    - Los estilos del menú ya en lenguaje css quedan así

![App Screenshot](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e99b8918-39d9-459f-a0d7-60fe3dbbe118/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220818T203848Z&X-Amz-Expires=86400&X-Amz-Signature=52cd98d2fb5c6bcdc96609abdcf25d4d5842b44e0ee91d6cac8384bf6fe35cef&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Resultado Final

![App Screenshot](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/02e52c27-d5c4-41e3-8c8d-cacac2273f58/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220818T204031Z&X-Amz-Expires=86400&X-Amz-Signature=80268b29bf693466a7b738d6d01db4336160353c9b2284227a2532c0a0176f66&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)