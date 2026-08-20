import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main>
      <h1>المكتبة التي في رأسي</h1>
      <p>قريبًا ستُفتح أبواب المكتبة...</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
