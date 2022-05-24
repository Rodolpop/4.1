// EJEMPLO README DE DANI

# 🧑🏻‍💻 Entrega 4.1: Node REST Server 

## 🏛 Estructura del proyecto

La forma que utilizo para crear y organizar el servidor es express basado en clases ya que considero que es más sencillo de escalar y de mantener el código relativamente ordenado.
En la carpeta 'models' es donde se encuentra la lógica del servidor y los controladores, las rutas y los middlewares los guardo en sus carpetas correspondientes.

## 🔐 Crear variables de entorno
En config.env voy definiendo las variables de entorno que hay que crear en el archivo .env

## NIVELL 1 ⭐️

### 📌 EJERCICIO 1

En el propio navegador o en postman ir a la ruta /user y se mostrará por consola un JSON con mi nombre, edad y la url desde la que se está ejecutando.

### 📌 EJERCICIO 2

En Postman hacemos un POST de la ruta /upload y para probar a subir archivos en jpeg, jpg, png o gif, en body > form-data ejecutamos la key con el nombre 'image'.