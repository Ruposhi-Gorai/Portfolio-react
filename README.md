# React + Vite

## Visitor Welcome Form

The backend visitor endpoint stores welcome-form submissions in MongoDB. Configure
these environment variables in the backend deployment before using the form:

```text
MONGODB_URI=your-mongodb-connection-string
MONGODB_DB=portfolio
```

The frontend asks a visitor for their name and place after three seconds on their
first visit. A successful submission is remembered in that browser, so the form is
skipped on later visits from the same browser.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
