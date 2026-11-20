# capilla-SFA
pagina de la capilla San Francisco de Asís
# Sitio Web Oficial · Capilla San Francisco de Asís
### Parroquia La Santa Cruz · Diócesis de Chosica, Lima, Perú

Un portal web institucional, solemne, moderno y espiritual para la Capilla San Francisco de Asís, diseñado y desarrollado con la más alta calidad técnica y visual.

---

## 🕊️ Características Principales

1. **Identidad Visual Franciscana:**
   - Paleta de colores extraída directamente del logo oficial: Marrón franciscano (`#794625`), marrón hábito profundo (`#4A2814`), dorado litúrgico (`#D4AF37`), blanco marfil (`#FAF6F0`) y pergamino cálido (`#F3ECE2`).
   - Tipografía sacra combinada: *Cinzel* (titulares solemnes), *Great Vibes* (caligrafía sacra para «de Asís») y *Plus Jakarta Sans* (lectura nítida).

2. **Introducción y Animación del Logo (Stroke Drawing):**
   - Animación de bienvenida a pantalla completa con trazado vectorial progresivo de San Francisco, la cruz, el cordón con los 3 nudos y la paloma de la paz.
   - Resplandor dorado sutil (`goldGlow`).
   - Botón para omitir (ESC) y control de persistencia en `sessionStorage` para no repetir en cada recarga innecesariamente, con opción de revivirla en cualquier momento.
   - Respeto total a `prefers-reduced-motion`.

3. **Hero Section y Galería Visual Cinematográfica:**
   - Carrusel visual con efecto Ken Burns y transiciones suaves.
   - Imágenes sacras de alta calidad: Cristo Salvador, Cruz de San Damián, vitrales y comunidad en oración.
   - Lema y mensajes oficiales institucionales.
   - Acceso directo a Horarios de Misas, Avisos y Solicitud de Intenciones.

4. **Información y Servicios (9 Tarjetas Modales):**
   - Horarios de Santa Misa (Dominicales y Semanales).
   - Confesiones y Reconciliación.
   - Sacramento del Bautismo.
   - Matrimonios y Familia.
   - Catequesis Parroquial (Primera Comunión y Confirmación).
   - Celebraciones y Fiestas Litúrgicas (Fiesta Patronal el 4 de Octubre).
   - Actividades Comunitarias y Pastoral Social (Caritas y enfermos).
   - Información Parroquial y Certificados de Bautismo.
   - Ubicación y Cómo Llegar (Chosica).
   - Filtros dinámicos por categoría y modales con requisitos completos.

5. **Botón Flotante de WhatsApp:**
   - Botón fijo con aura de pulso en verde oficial y dorado.
   - Popover interactivo con opciones rápidas de consulta ("Horarios de Misas", "Anotar Intención", "Bautizos").
   - Configuración centralizada de número telefónico y mensajes iniciales preformateados.

6. **Sección "Todos los Informes y Avisos":**
   - Sistema dinámico desacoplado en `assets/js/reports-data.js`.
   - Buscador en tiempo real de comunicados y avisos.
   - Filtro por categorías (Fiesta Patronal, Comunicados Oficiales, Pastoral Social, Espiritualidad).
   - Lector modal completo con opción de compartir en WhatsApp.

7. **Experiencia Interactiva en Computadoras:**
   - Foco de luz ambiental dorada (`#cursor-spotlight`) que sigue al cursor suavemente.
   - Inclinación 3D tridimensional suave (gentle 3D tilt) en tarjetas al pasar el ratón.
   - Desactivado automáticamente en pantallas táctiles y respetando accesibilidad.

8. **Cookies y Privacidad (RGPD y Ley 29733 de Perú):**
   - Banner de consentimiento con botones: "Aceptar todas", "Rechazar opcionales" y "Configurar preferencias".
   - Panel de configuración con categorías: Técnicas Necesarias, Métricas/Analíticas y Funcionales.
   - Modales independientes para: Política de Privacidad, Política de Cookies y Condiciones de Uso.
   - Bloqueo estricto de scripts analíticos hasta obtener consentimiento expreso.

9. **Seguridad y Resiliencia:**
   - Sanitización de datos anti-XSS y validación de formularios.
   - Campo señuelo honeypot contra bots de spam.
   - Límite de frecuencia (rate limiting) para solicitudes de intención.
   - Sin claves privadas en el cliente.
   - Archivo de documentación `SECURITY.md` y plantilla `.env.example`.

10. **Páginas de Error Personalizadas y Resiliencia de Red:**
    - `404.html`: "Parece que nos hemos perdido en el camino."
    - `500.html`: "Estamos teniendo dificultades."
    - Detección de pérdida de conexión a internet en tiempo real con banner y modal de reintento.

---

## 📁 Estructura del Proyecto

```
capilla-san-francisco/
├── index.html                   # Página principal completa
├── 404.html                     # Página de error 404 personalizada
├── 500.html                     # Página de error 500 personalizada
├── robots.txt                   # Directivas SEO para rastreadores
├── sitemap.xml                  # Mapa del sitio XML
├── .env.example                 # Plantilla de variables seguras
├── SECURITY.md                  # Auditoría y pautas de seguridad
├── README.md                    # Este manual de uso y personalización
└── assets/
    ├── css/
    │   ├── main.css             # Estilos principales, paleta y variables
    │   └── animations.css       # Stroke drawing, Ken Burns, resplandor
    └── js/
        ├── config.js            # Configuración de contacto, teléfono y WhatsApp
        ├── services-data.js     # Datos de los 9 servicios y sacramentos
        ├── reports-data.js      # Datos de avisos, noticias y comunicados
        ├── logo-anim.js         # Controlador de la animación de bienvenida
        ├── cookie-consent.js    # Gestor de cookies y privacidad RGPD/LPDP
        ├── mouse-effects.js     # Foco ambiental y 3D tilt para PC
        ├── offline-detector.js  # Detector de estado sin conexión en vivo
        └── app.js               # Coordinador principal de la aplicación
```

---

## 🛠️ Cómo Personalizar los Datos de la Capilla

### 1. Cambiar Teléfono, WhatsApp y Horarios
Abre `assets/js/config.js` y edita los valores del objeto `CAPILLA_CONFIG`:
```javascript
export const CAPILLA_CONFIG = {
  contacto: {
    direccion: "Tu nueva dirección en Chosica",
    telefonoMovil: "+51 987 654 321",
    email: "correo@parroquia.org"
  },
  whatsapp: {
    numero: "51987654321", // Código país + teléfono
  }
};
```

### 2. Publicar un Nuevo Aviso o Comunicado
Abre `assets/js/reports-data.js` y agrega un nuevo objeto al arreglo `INFORMES_DATA`:
```javascript
{
  id: "mi-nuevo-aviso",
  categoria: "comunicados",
  categoriaLabel: "Comunicado Oficial",
  badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
  titulo: "Título de la noticia",
  fecha: "2026-12-01",
  fechaFormateada: "1 de Diciembre de 2026",
  resumen: "Resumen corto que se muestra en la tarjeta...",
  contenidoCompleto: "<p>Texto detallado de la noticia...</p>",
  imagen: "https://images.unsplash.com/...",
  autor: "Secretaría Parroquial"
}
```

---

## 🚀 Despliegue en Producción

El sitio está desarrollado con estándares modernos de la web (HTML5, ES Modules, Tailwind CSS, SVG). Puede ser alojado inmediatamente en:
- **Netlify / Vercel:** Simplemente arrastrar la carpeta `capilla-san-francisco` o vincular el repositorio Git.
- **GitHub Pages:** Habilitar GitHub Pages apuntando a la rama principal.
- **Hosting Compartido (cPanel / Apache / Nginx):** Copiar los archivos a la carpeta `public_html`.
