import { Suspense, lazy } from "react";
import "./App.css";

const MgtContent = lazy(() => import("./MgtContent"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MgtContent />
      </Suspense>
    </>
  );
}

export default App;
