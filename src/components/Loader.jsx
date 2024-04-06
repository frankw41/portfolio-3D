import { Html, useProgress } from "@react-three/drei";
import { useDarkMode } from "../hoc/DarkModeContext";

const Loader = () => {
  const { isDarkMode } = useDarkMode();
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: isDarkMode ? "#f1f1f1" : "black",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
