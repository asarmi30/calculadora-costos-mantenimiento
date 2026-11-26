# Historias de usuario

Cada historia está asociada a una categoría de mantenimiento del SWEBOK. El reparto de responsables es una propuesta y puede ajustarse.

## HU1 - Validar los datos ingresados (Mantenimiento correctivo)

**Historia:** Como usuario, quiero que no se acepten actividades sin nombre ni con horas vacías, en cero o negativas, para que los costos calculados sean correctos.

**Criterios de aceptación:**
- Si el nombre está vacío, no se agrega la actividad.
- Si las horas están vacías, en cero o son negativas, no se agrega la actividad.
- Se muestra un mensaje que explica el motivo del rechazo.

**Responsable:** Roberto Deart · **Rama:** `feature/HU1-validar-datos`

## HU2 - Separar el cálculo de la pantalla (Mantenimiento preventivo)

**Historia:** Como desarrollador, quiero separar el cálculo de los costos de la lógica de pantalla en funciones documentadas, para facilitar el mantenimiento futuro.

**Criterios de aceptación:**
- Hay una función para calcular el costo de una actividad, otra para agregarla y otra para mostrar la lista y el total.
- Cada función tiene un comentario que explica qué hace.
- El comportamiento visible de la aplicación no cambia.

**Responsable:** Roberto Deart · **Rama:** `feature/HU2-refactor-funciones`

## HU3 - Ver el subtotal por categoría (Mantenimiento perfectivo)

**Historia:** Como usuario, quiero ver el subtotal de cada categoría de mantenimiento, para saber en cuál se va más dinero.

**Criterios de aceptación:**
- Se muestra el subtotal de Correctivo, Adaptativo, Perfectivo y Preventivo.
- Los subtotales y el total se actualizan al agregar una actividad.

**Responsable:** Katherin Rodríguez · **Rama:** `feature/HU3-subtotales`

## HU4 - Cambiar el valor de la hora (Mantenimiento adaptativo)

**Historia:** Como usuario, quiero cambiar el valor de la hora sin modificar el código, para adaptar los cálculos a nuevos costos laborales.

**Criterios de aceptación:**
- Hay un campo para el valor de la hora, con un valor inicial de $ 56.250.
- Al cambiarlo, los costos se calculan con el nuevo valor.

**Responsable:** Katherin Rodríguez · **Rama:** `feature/HU4-valor-hora`

## HU5 - Filtrar por categoría (Mantenimiento perfectivo)

**Historia:** Como usuario, quiero filtrar las actividades por categoría, para revisar una categoría a la vez.

**Criterios de aceptación:**
- Hay un selector con las opciones Todas, Correctivo, Adaptativo, Perfectivo y Preventivo.
- Al elegir una categoría, la lista muestra solo las actividades de esa categoría.

**Responsable:** Ana María Sarmiento · **Rama:** `feature/HU5-filtro-categoria`

> Orden de integración sugerido: HU2 (refactorización), HU1, HU3, HU4 y HU5. Como todas modifican `app.js`, integrar por turnos reduce los conflictos.
