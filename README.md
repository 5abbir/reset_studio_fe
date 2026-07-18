# Reset Studio

A modern, responsive Pilates studio website built with **React, TypeScript, and Tailwind CSS**.

This project is a frontend development project focused on converting a traditional HTML/CSS website into a structured and maintainable React application while preserving the original visual design and user experience.
---

## ✨ Features

* Responsive design for mobile, tablet, and desktop
* Modern Pilates studio landing page
* Reusable React components
* Type-safe development with TypeScript
* Utility-first styling with Tailwind CSS
* Reusable Button component with multiple variants and sizes
* Responsive navigation
* Hero section
* About section
* Pricing section
* Booking section
* Instructor section
* Contact section
* Footer section
* Smooth and consistent UI design

---

## 🛠️ Technologies Used

* **React** – Component-based frontend development
* **TypeScript** – Type-safe JavaScript development
* **Tailwind CSS** – Utility-first CSS framework
* **Vite** – Fast development and build tool
* **JavaScript/JSX** – Application logic and UI behavior
* **Git & GitHub** – Version control and project collaboration

---

## 📁 Project Structure

```text
src/
│
├── assets/
│   └── images/
│
├── components/
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Logo.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Pricing.tsx
│       ├── Booking.tsx
│       ├── Instructor.tsx
│       └── Contact.tsx
│
├── pages/
│   └── Home.tsx
│
├── App.tsx
└── main.tsx
```

---

## 🧩 Component Architecture

The application follows a component-based architecture.

Instead of keeping the entire website inside one large HTML file, the interface is divided into manageable React components.

For example:

```text
App
│
└── Home
    │
    ├── Header
    │   ├── Logo
    │   └── Button
    │
    ├── Hero
    │   └── Button
    │
    ├── About
    │
    ├── Pricing
    │   └── PricingCard
    │
    ├── Booking
    │   └── Calendar
    │
    ├── Instructor
    │   └── InstructorCard
    │
    ├── Contact
    │   └── Input
    │
    └── Footer
```

Reusable components such as `Button`, `Logo`, `Input`, and `Card` are designed to be used across multiple sections of the application.

---

## 🎨 Reusable Button Component

The project includes a reusable and customizable `Button` component.

Example:

```tsx
<Button variant="primary" size="md">
  Book Now
</Button>
```

The component supports:

* Multiple visual variants
* Different sizes
* Full-width buttons
* Native HTML button attributes
* Custom class names
* TypeScript type safety

Example variants:

```tsx
<Button variant="default">
  Login
</Button>

<Button variant="primary">
  Book Now
</Button>

<Button variant="clay">
  Get Started
</Button>

<Button variant="ghost">
  Learn More
</Button>
```

This avoids repeating the same button styling throughout the application.

---

## 📱 Responsive Design

The website is designed to work across different screen sizes:

### Desktop

* Full navigation menu
* Multi-column layouts
* Large hero section
* Expanded content grids

### Tablet

* Adjusted grid layouts
* Flexible spacing
* Responsive typography

### Mobile

* Mobile navigation
* Single-column layouts
* Stacked content
* Responsive buttons and forms

Tailwind CSS responsive utilities are used to handle different breakpoints.

Example:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  ...
</div>
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd reset-studio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎯 Project Goals

The main goals of this project are:

* Practice React component architecture
* Learn TypeScript through practical implementation
* Use Tailwind CSS for responsive styling
* Convert a traditional HTML/CSS website into a React application
* Build reusable UI components
* Maintain the original visual appearance while improving code organization
* Develop clean and maintainable frontend code

---

## 🔮 Future Improvements

Possible future improvements include:

* User authentication
* Online class booking
* Membership management
* Payment integration
* Admin dashboard
* User dashboard
* Backend API integration
* Zustand state management
* React Router navigation
* Form validation
* Toast notifications
* Dark mode
* Animations with Framer Motion

---

## 👨‍💻 Development

This project is being developed as a practical frontend learning project using modern web development technologies.

The focus is on learning by building a real-world application and gradually improving the architecture, reusability, responsiveness, and maintainability of the codebase.

---

## 📄 License

This project is created for educational and development purposes.
