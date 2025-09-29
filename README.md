# 📋 Angular E-commerce Task

## 📖 Notes

1. to try the project use this credentials:

```
- **UserName**: `emilys`
- **Password**: `emilyspass`
- **Role**: `Admin`

```

```
- **UserName**: `logant`
- **Password**: `logantpass`
- **Role**: `User`

```

## **Angular E-commerce Task** is a fully functional web application built with Angular that includes authentication, reusable UI components, reactive forms, and a responsive layout. The project follows Angular best practices and demonstrates component-based design.

## 🚀 DEMO

[Live Demo](https://e-commerce-task-sage.vercel.app/)

---

## 🧰 Tech Stack

- **Angular**
- **RxJS**
- **Angular Router**
- **Reactive Forms**
- **SCSS**
- **TypeScript**

---

## 📁 Project Structure

```plaintext
e-commerce-task/
├── src/
│   ├── app/
│   │   ├── Core/
│   │   │   ├── guards/
│   │   │   ├ interceptors/
│   │   │
│   │   ├── pages/
│   │   │   ├── produtcs/
│   │   │   │── not-found/
│   │   │   │── login/
│   │   ├── Shared/
│   │   │   ├── components/
│   │   │
│   │   ├── Layout/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   └── layout.component.ts
│   │   ├── AppComponent/
│   │   └── app.config.ts
├── assets/
├── environments/
├── angular.json
├── package.json
└── README.md
```

---

## 🔐 Authentication

- **Login**: Using reactive forms, user inputs are validated and sent to a mock API.
- **Token Storage**: The token is stored in `cookies` for authenticated requests.
- **AuthGuard**: Protects routes from unauthorized access.
- **AuthInterceptor**: Automatically attaches token to HTTP requests.
- **PublicGuard**:Prevent user to arrive to login component if is loggedin.

---

## 🧩 Shared Components

- `CardComponent`: Flexible responsive-style card with header/footer slots.
- `paginationComponent`: pagination Component.

---

## 📐 Layout

- **Responsive Design**: Built with scss, ensuring a mobile-first approach.
- **Header & Footer**: Reusable components for consistent layout.

---

## 📄 Pages

- **Login Page**: User authentication with email and password.
- **Not Found Page**: Custom 404 page for unmatched routes.
- **product Page**: product page for display all product.

---

## 📑 Features

- **Authentication**: login functionality with form validation.
- **interceptors**: HTTP interceptors for request/response handling.
- **Guards**: Route guards for protecting routes based on authentication and roles.
- **Reusable Components**: pagination and cards for consistent UI.
- **Responsive Layout**: Mobile-first design using scss.
- **Lazy Loading**: Feature modules are lazy-loaded for better performance.

---

## 🧪 Forms

- **ReactiveFormsModule**: Used for all forms.
- **Validation**: Required, email, password length, password match, terms agreement.

---

## 🧭 Routing

- **Modular Routing**: Feature-based lazy loading.
- **Guards**: `canmatch` used for protecting routes.
- **Navigation**: Clean navigation between login, product.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/taha-mahmoud37/E-commerce-task.git
cd angular-task
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
ng serve
```

### 4. Open in Browser

Open your browser and navigate to `http://localhost:4200`.
