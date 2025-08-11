# 📱 Consumir API Simple - Aplicación de Gestión de Contactos

[![Angular](https://img.shields.io/badge/Angular-20.1.0-red?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![JSON Server](https://img.shields.io/badge/JSON%20Server-1.0.0-orange?style=flat-square)](https://github.com/typicode/json-server)

Una aplicación web moderna y educativa construida con **Angular 20** (standalone components) que demuestra las mejores prácticas para el consumo de APIs REST, gestión de estado reactivo y diseño responsive. Perfecta para aprender desarrollo web moderno con Angular.

## 🎯 Propósito Educativo

Este proyecto ha sido diseñado específicamente para **enseñar y demostrar**:

- ✅ **Nuevas APIs de Angular 20**: Standalone components, Signals, Resources API
- ✅ **Gestión moderna de estado**: Reactive patterns y programación funcional
- ✅ **Consumo de APIs REST**: Operaciones CRUD completas
- ✅ **Diseño responsive**: Mobile-first con TailwindCSS
- ✅ **TypeScript avanzado**: Tipado fuerte y mejores prácticas
- ✅ **Arquitectura escalable**: Separación de responsabilidades
- ✅ **UX/UI moderna**: Feedback visual y estados de carga

## 🚀 Características Principales

### 📋 Gestión Completa de Contactos

- **📖 Listado**: Visualización de contactos en grid responsive
- **➕ Creación**: Formularios reactivos con validación
- **✏️ Edición**: Actualización de información existente
- **🗑️ Eliminación**: Borrado con confirmación de seguridad

### 🎨 Interfaz de Usuario Moderna

- **🌙 Tema oscuro**: Diseño elegante y profesional
- **📱 Totalmente responsive**: Adaptable a móviles, tablets y desktop
- **🔄 Estados de carga**: Feedback visual durante operaciones asíncronas
- **🎯 Componentes reutilizables**: Arquitectura modular

### ⚡ Tecnologías de Vanguardia

- **Angular 20 Standalone**: Sin NgModules, configuración simplificada
- **Signals & Resources**: Estado reactivo moderno
- **Control Flow**: Nueva sintaxis `@if`, `@for` más legible
- **TypeScript estricto**: Tipado fuerte en toda la aplicación

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   └── resource-status/ # Estados de carga (loading, empty, error)
│   ├── data/               # Base de datos JSON local
│   │   └── db.json         # Datos mock para desarrollo
│   ├── interfaces/         # Definiciones TypeScript
│   │   ├── contact.interface.ts  # Tipado para contactos
│   │   ├── user.interface.ts     # Tipado para usuarios
│   │   └── product.ts            # Tipado para productos
│   ├── pages/              # Páginas principales
│   │   ├── index-page/     # Listado de contactos
│   │   ├── create-page/    # Creación de contactos
│   │   └── edit-page/      # Edición de contactos
│   ├── services/           # Servicios y lógica de negocio
│   │   └── contact-management.ts # API service
│   └── environments/       # Configuración de entornos
└── styles.css             # Estilos globales y componentes CSS
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- **Node.js** 18.19+ o 20.11+
- **npm** 9.0+ o **yarn**
- **Git** para clonar el repositorio

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/esteban5tael/consumir-api-simple.git
cd consumir-api-simple
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

### Paso 3: Configurar JSON Server (API Mock)

En una terminal separada, ejecuta:

```bash
npm run jserver
```

Esto iniciará el servidor de desarrollo en `http://localhost:3000`

### Paso 4: Iniciar la Aplicación

En otra terminal:

```bash
npm run dev
# o alternativamente
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## 📚 Guía de Uso Paso a Paso

### 1. 👀 Visualizar Contactos

1. Abre la aplicación en tu navegador
2. La página principal muestra todos los contactos en un grid responsive
3. Observa los **estados de carga**:
   - 🔄 **Loading**: Spinner mientras cargan los datos
   - 📭 **Empty**: Mensaje cuando no hay contactos
   - ❌ **Error**: Manejo de errores de conexión

### 2. ➕ Crear Nuevo Contacto

1. Haz clic en **"Nuevo Contacto"** en la cabecera
2. Completa el formulario con:
   - **Nombre**: Mínimo 3 caracteres, máximo 200
   - **Email**: Formato válido de correo electrónico
   - **Teléfono**: Mínimo 8 caracteres, máximo 100
3. El formulario incluye **validación en tiempo real**
4. Al enviar, recibirás una notificación de éxito/error

### 3. ✏️ Editar Contacto Existente

1. En la tarjeta de cualquier contacto, haz clic en **"Editar"**
2. El formulario se pre-llena con los datos actuales
3. Modifica los campos necesarios
4. Guarda los cambios con validación completa

### 4. 🗑️ Eliminar Contacto

1. En la tarjeta del contacto, haz clic en **"Eliminar"**
2. Confirma la acción en el diálogo de seguridad
3. El contacto se elimina y la lista se actualiza automáticamente

## 🏗️ Arquitectura Técnica Detallada

### 🧩 Componentes Principales

#### 1. **IndexPage** - Página Principal

```typescript
// Ubicación: src/app/pages/index-page/index-page.ts
// Propósito: Lista todos los contactos con estados de carga
```

- **Responsabilidades**:
  - Renderizar lista de contactos
  - Manejar estados de carga/error/vacío
  - Proporcionar navegación a otras páginas

#### 2. **CreatePage** - Creación de Contactos

```typescript
// Ubicación: src/app/pages/create-page/create-page.ts
// Propósito: Formulario para nuevos contactos
```

- **Características**:
  - Formularios reactivos con validación
  - Notificaciones toast para feedback
  - Redirección automática tras éxito

#### 3. **EditPage** - Edición de Contactos

```typescript
// Ubicación: src/app/pages/edit-page/edit-page.ts
// Propósito: Modificar contactos existentes
```

- **Funcionalidades**:
  - Carga de datos existentes
  - Formulario pre-rellenado
  - Actualización en tiempo real

#### 4. **ContactCard** - Tarjeta de Contacto

```typescript
// Ubicación: src/app/pages/index-page/components/contact-card/
// Propósito: Componente reutilizable para mostrar contactos
```

- **Propiedades**:
  - Recibe contacto como input signal
  - Acciones de editar/eliminar
  - Diseño responsive

### 🔧 Servicios y Estado

#### ContactManagementService

```typescript
// Ubicación: src/app/services/contact-management.ts
// Propósito: Centralizar operaciones CRUD
```

**Métodos disponibles**:

- `getContacts()`: Obtener todos los contactos
- `createNewContact(contact)`: Crear nuevo contacto
- `getContactById(id)`: Obtener contacto específico
- `updateContactById(id, contact)`: Actualizar contacto
- `deleteContactById(id)`: Eliminar contacto
- `contactsResource`: Resource API para estado reactivo

### 🎨 Componentes de Estado

#### Resource Status Components

Ubicación: `src/app/components/resource-status/`

1. **IsLoadingComponent**: Spinner animado para carga
2. **IsEmptyComponent**: Mensaje cuando no hay datos
3. **IsErrorComponent**: Manejo elegante de errores

### 🔄 Gestión de Estado Moderno

#### Signals & Resources API

```typescript
// Ejemplo de uso en el servicio
public contactsResource = resource({
  loader: async () => await lastValueFrom(this.getContacts()),
  defaultValue: [],
})
```

**Ventajas**:

- ✅ Estado reactivo automático
- ✅ Manejo declarativo de carga/error
- ✅ Optimización de rendimiento
- ✅ Sintaxis más limpia que Observables

### 🎯 Validaciones de Formularios

```typescript
// Validaciones implementadas
public newContactForm: FormGroup = this._formBuilder.group({
  name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
});
```

## 🎨 Diseño y Estilos

### TailwindCSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: { extend: {} },
  plugins: [],
};
```

### Clases CSS Personalizadas

El archivo `src/styles.css` incluye:

- **Formularios**: `.input`, `.input-primary`, `.input-success`, etc.
- **Botones**: `.btn-primary`, `.btn-secondary`, `.btn-danger`
- **Labels**: `.label`, `.label-required`
- **Tema oscuro**: Esquema de colores consistente

### Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: `md:` (tablet), `xl:` (desktop)
- **Grid adaptativo**: 1 columna → 3 columnas → 5 columnas

## 🔗 API y Base de Datos

### JSON Server Setup

```json
{
  "contacts": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "123-456-7890"
    }
  ]
}
```

### Endpoints Disponibles

- `GET /contacts` - Listar todos los contactos
- `POST /contacts` - Crear nuevo contacto
- `GET /contacts/:id` - Obtener contacto específico
- `PUT/PATCH /contacts/:id` - Actualizar contacto
- `DELETE /contacts/:id` - Eliminar contacto

## 📱 Experiencia de Usuario

### Notificaciones Toast

```typescript
import { toast } from "ngx-sonner";

// Ejemplos de uso
toast.success("Contacto creado exitosamente");
toast.error("Error al crear el contacto");
toast.warning("Contacto eliminado exitosamente");
```

### Estados de Feedback

- ⏳ **Carga**: Spinner elegante con animación
- ✅ **Éxito**: Notificaciones verdes
- ❌ **Error**: Mensajes rojos descriptivos
- 📭 **Vacío**: Mensaje motivacional para crear contenido

## 🧪 Scripts Disponibles

```json
{
  "scripts": {
    "ng": "ng", // CLI de Angular
    "dev": "rm -rf .angular && ng serve", // Desarrollo limpio
    "start": "ng serve", // Servidor de desarrollo
    "build": "ng build", // Construcción para producción
    "watch": "ng build --watch", // Construcción en modo watch
    "test": "ng test", // Ejecutar tests unitarios
    "jserver": "json-server --watch ./src/app/data/db.json --port 3000"
  }
}
```

### Comandos Útiles

```bash
# Desarrollo completo (API + Frontend)
npm run jserver &  # Ejecutar en background
npm run dev

# Solo frontend (si ya tienes API)
npm start

# Construcción para producción
npm run build

# Tests
npm test
```

## 🔧 Configuración Avanzada

### Environment Files

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: "http://localhost:3000",
};

// src/environments/environment.development.ts
// Para configuraciones específicas de desarrollo
```

### TypeScript Configuration

```json
// tsconfig.json - Configuración estricta
{
  "compilerOptions": {
    "strict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Path Mapping

```json
// tsconfig.json - Alias para imports limpios
{
  "paths": {
    "@app/*": ["src/app/*"],
    "@env/*": ["src/environments/*"]
  }
}
```

## 📈 Patrones y Mejores Prácticas

### 1. **Standalone Components**

```typescript
@Component({
  selector: 'app-example',
  imports: [CommonModule, ReactiveFormsModule], // Sin NgModules
  template: `...`
})
```

### 2. **Dependency Injection Moderna**

```typescript
export class MyComponent {
  private service = inject(MyService); // Función inject()
}
```

### 3. **Signals para Estado**

```typescript
export class MyComponent {
  count = signal(0); // Estado reactivo
  doubleCount = computed(() => this.count() * 2); // Computado
}
```

### 4. **Control Flow Moderno**

```html
@if (condition) {
<div>Contenido condicional</div>
} @for (item of items; track item.id) {
<div>{{ item.name }}</div>
}
```

### 5. **Input Signals**

```typescript
export class ChildComponent {
  data = input.required<MyType>(); // Props tipadas y requeridas
}
```

## 🚀 Extensiones Recomendadas

Para una mejor experiencia de desarrollo, instala estas extensiones de VS Code:

- **Angular Language Service**: Intellisense para Angular
- **TypeScript Importer**: Auto-import para TypeScript
- **Tailwind CSS IntelliSense**: Autocompletado para Tailwind
- **Auto Rename Tag**: Renombrado automático de etiquetas HTML
- **Prettier**: Formateo de código consistente
- **GitLens**: Git superpowers en VS Code
- **Paste JSON as Code**: Convertir JSON a interfaces TypeScript
- **Auto Barrel**: Generar barrel exports automáticamente

## 🎓 Conceptos de Aprendizaje

### Para Principiantes

1. **Components**: Bloques reutilizables de UI
2. **Services**: Lógica de negocio compartida
3. **Routing**: Navegación entre páginas
4. **Forms**: Captura y validación de datos
5. **HTTP**: Comunicación con APIs

### Para Intermedios

1. **Signals**: Estado reactivo moderno
2. **Resources**: Gestión de datos asincrónicos
3. **Standalone Components**: Arquitectura sin módulos
4. **TypeScript**: Tipado avanzado
5. **RxJS**: Programación reactiva

### Para Avanzados

1. **Change Detection**: Optimización de rendimiento
2. **Lazy Loading**: Carga bajo demanda
3. **Custom Validators**: Validaciones personalizadas
4. **Interceptors**: Middleware para HTTP
5. **Testing**: Estrategias de testing

## 📖 Métodos HTTP - Guía de Referencia

- **GET** → Para **obtener** datos del servidor. No cambia nada, solo lee. Ej: traer la lista de productos.
- **POST** → Para **crear** un recurso nuevo en el servidor. Ej: registrar un usuario.
- **PUT** → Para **reemplazar** un recurso por completo. Ej: actualizar toda la información de un producto.
- **PATCH** → Para **actualizar parcialmente** un recurso. Ej: solo cambiar el precio de un producto.
- **DELETE** → Para **eliminar** un recurso del servidor. Ej: borrar un cliente de la base de datos.

### 📚 Recursos Adicionales de Aprendizaje

- **Patrones de Diseño**: [patterns.dev](https://www.patterns.dev/)
- **Angular Documentation**: [angular.io](https://angular.io/)
- **TypeScript Handbook**: [typescriptlang.org](https://www.typescriptlang.org/)

## 🤝 Contribuciones

Este proyecto está abierto a contribuciones educativas:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** tus cambios: `git commit -m 'Add: nueva funcionalidad'`
4. **Push** a la rama: `git push origin feature/nueva-funcionalidad`
5. **Abre** un Pull Request

### Ideas para Contribuir

- 📝 Mejoras en documentación
- 🐛 Corrección de bugs
- ✨ Nuevas funcionalidades
- 🎨 Mejoras en diseño
- ⚡ Optimizaciones de rendimiento

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - ve el archivo `LICENSE` para más detalles.

## 📞 Contacto y Soporte

- **GitHub**: [@esteban5tael](https://github.com/esteban5tael)
- **Repositorio**: [consumir-api-simple](https://github.com/esteban5tael/consumir-api-simple)

## 🎯 Próximas Mejoras

- [ ] **Testing**: Unit tests con Jasmine/Karma
- [ ] **E2E Testing**: Tests end-to-end con Cypress
- [ ] **PWA**: Progressive Web App capabilities
- [ ] **Internationalization**: Soporte multi-idioma
- [ ] **Authentication**: Sistema de login/registro
- [ ] **Real Backend**: Integración con API real
- [ ] **Advanced Filtering**: Búsqueda y filtros avanzados
- [ ] **Pagination**: Paginación para grandes datasets

---

**¡Desarrollado con ❤️ para la comunidad educativa!**

_Este proyecto demuestra las últimas características de Angular 20 y sirve como referencia para desarrolladores que buscan aprender tecnologías web modernas._
