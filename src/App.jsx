import { MotionConfig } from "framer-motion";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HomePage />
    </MotionConfig>
  );
}

export default App;
