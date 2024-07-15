# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# LMS frontend 

## Setup instruction 

1.  clone the project
```
    git clone https://github.com/VivekSharma102001/lms-frontend.git

```
2. move into the directory 

```
cd lms-frontend

```
3. install dependencies

```
    npm i

```

4. run the server 

```
    npm run dev
```
## Setup instruction of tailwindcss

[Tailwind official instruction docs] [https://tailwindcss.com/docs/guides/vite]
1. install tailwindcss
```
    npm install -D tailwindcss postcss autoprefixer
```
2. create tailwindcss config file
```
    npx tailwindcss init -p
```
3. Add file extensions to tailwind config file in the contents property 

```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
4. Add the tailwind directives at the top of the `index.css` file 
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
