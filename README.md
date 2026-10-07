# ALPAQUITAY

Catálogo móvil en HTML, CSS y JavaScript puro. Sin dependencias, pagos, carrito ni base de datos.

## Ver la web

Abre `index.html` en el navegador. También puedes ejecutar `python -m http.server 8000` en esta carpeta y abrir `http://localhost:8000`.

## Editar el catálogo

Todo está en `assets/config.js`:

- `products`: agrega o elimina objetos para cambiar los platos. `name` es el nombre, `description` la descripción, `price` el precio numérico en soles, `label` la etiqueta e `image` la ruta de la foto.
- `whatsapp`: coloca tu número real con código de país, solo dígitos; para Perú, `51` seguido de los nueve dígitos del celular. Cada pedido abre WhatsApp con el nombre del plato. Hasta configurarlo, los botones muestran un aviso y no envían a un número ajeno.
- `address` y `hours`: reemplaza la dirección y los horarios pendientes.
- `social`: agrega enlaces reales a tus redes con `name` y `url`. No se inventaron cuentas.
- `logo`: copia el logo original en `assets/images/` y coloca su ruta. El archivo adjunto no estuvo disponible en el entorno; el texto ALPAQUITAY es un marcador temporal, no una recreación del logo.

Los tres productos y precios iniciales son ejemplos, no datos oficiales. Cuando confirmes el catálogo, elimina el aviso `.sample-note` en `index.html`. La fotografía existente en el workspace es generada y referencial, y se usa en las tres tarjetas como muestra; reemplázala por fotos reales de cada presentación y ajusta sus textos alternativos en `assets/app.js` y `index.html`.

## Archivos

```text
index.html
assets/
  styles.css
  config.js
  app.js
  images/
    chicharron-640.webp
    chicharron-1200.webp
```

La portada usa imágenes responsivas. Las fotos del catálogo se cargan al acercarse a ellas. Exporta tus fotos en WebP, con unos 640 px para tarjetas y 1200 px para portada. Mantén proporciones similares para evitar saltos en el diseño.

Puedes alojar esta carpeta directamente en cualquier hosting estático. No necesita compilación ni instalación.
pagina web de alpaquitay 
