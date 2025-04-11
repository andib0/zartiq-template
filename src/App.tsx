import { useTranslation } from "react-i18next";
import "./App.css";
import { useAppStore } from "./store/useGlobalStore";
function App() {
  const { count, incrementCount } = useAppStore();
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <header className="p-4">
          <h1 className="text-xl font-bold">{t("title")}</h1>
          <p>{t("greeting")}</p>
        </header>
        <p>Zustand basic store</p>
        <p className="text-center text-xl">{count}</p>
        <button
          onClick={() => incrementCount()}
          className="text-xl text-center bg-black text-white py-2 px-1 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
