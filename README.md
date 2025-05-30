# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

---

## Language Translator App

This app uses the Microsoft Translator API to translate text between languages.

### Setup
1. **Get a Microsoft Translator API Key:**
   - Sign up at https://portal.azure.com/ and create a Translator resource.
   - Copy your API key and region.
2. **Create a `.env` file in the project root:**
   ```env
   VITE_TRANSLATOR_KEY=your-microsoft-translator-key-here
   VITE_TRANSLATOR_REGION=your-region-here
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the app:**
   ```bash
   npm run dev
   ```

### Usage
- Enter text, select source and target languages, and click Translate.
- The translation will appear below.

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
