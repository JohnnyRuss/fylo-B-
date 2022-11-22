import { createRoot } from "react-dom/client";
import "./styles/custom.scss";
import "./styles/main.scss";
import "./styles/utils.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
