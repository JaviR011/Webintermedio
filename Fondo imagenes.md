Puedes establecer una imagen como fondo en HTML utilizando la propiedad de fondo en CSS. Aquí tienes un ejemplo:

HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Fondo con Imagen en HTML</title>
</head>
<body>
    <div class="contenedor">
        <!-- Contenido de tu página aquí -->
    </div>
</body>
</html>
```

CSS (styles.css):

```css
body {
    margin: 0;
}

.contenedor {
    background-image: url('tu-imagen.jpg'); /* Reemplaza con la ruta correcta de tu imagen */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh; /* Ajusta la altura según tus necesidades */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff; /* Ajusta el color del texto según la visibilidad en tu imagen */
}
```

Explicación:

- `background-image`: Esta propiedad establece la imagen como fondo. Reemplaza `'tu-imagen.jpg'` con la ruta correcta de tu imagen.
- `background-size`: Indica cómo la imagen debe ajustarse al contenedor. En este caso, `cover` significa que la imagen se ajustará para cubrir completamente el contenedor, manteniendo la proporción.
- `background-position`: Centra la imagen en el contenedor.
- `background-repeat`: Evita que la imagen se repita.
- `height`: Establece la altura del contenedor, en este caso, `100vh` significa el 100% de la altura de la ventana del navegador.
- `display`, `justify-content`, y `align-items`: Estas propiedades se utilizan para centrar el contenido en el medio del contenedor.
- `color`: Establece el color del texto para asegurar la legibilidad en la imagen de fondo.

Asegúrate de reemplazar `'tu-imagen.jpg'` con la ruta correcta de tu imagen. Puedes ajustar otras propiedades según tus preferencias y necesidades de diseño.
