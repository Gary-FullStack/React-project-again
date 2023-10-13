import { createRoot } from "react-dom/client";

const title = "Doing React without JSX";
const desc = "rendering React into the dom"

const element = (
    <>
        <h1>{title}</h1>
        <p>{desc}</p>
    </>
)


const root = createRoot(document.getElementById("root"));
root.render(element);