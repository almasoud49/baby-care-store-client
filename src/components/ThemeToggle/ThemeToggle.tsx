import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      {theme === "light" ? <Moon size={25} /> : <Sun size={25} />}
    </button>
  );
};

export default ThemeToggle;
