import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// reveal states are scoped under .js, so without the script everything is visible
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(<App />);
