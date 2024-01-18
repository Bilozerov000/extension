import { createRoot } from "react-dom/client";
import "../styles/index.css";
import App from "./App";

function main() {
  const rootElement = document.getElementById("app");
  if (!rootElement) {
    return;
  }

  const root = createRoot(rootElement);
  root.render(<App />);
}

main();
