import { useTranslation } from "react-i18next";
import "./App.css";
import { useGlobalStore } from "./store/useGlobalStore";
import { EmptyState } from "./components/atoms/EmptyState";
import { Loading } from "./components/atoms/Loading";
function App() {
  const { count, incrementCount } = useGlobalStore();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">ZARTIQ</h1>
          <div className="flex items-center space-x-4"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {t("title")}
            </h2>
            <button
              onClick={incrementCount}
              className="px-6 py-3 cursor-pointer bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Increment counter"
            >
              Add
            </button>
            <div className="text-5xl font-bold text-indigo-600 py-4">
              {count}
            </div>
          </div>
        </div>
      </main>

      {/* Empty State */}
      <EmptyState
        icon="search"
        title="No data available."
        message="Try again."
      />

      {/* Loading Spinner  */}
      <Loading size="lg" color="indigo-600" />

      {/* Footer */}
      <footer className="bg-white py-4 border-t border-indigo-600">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ZARTIQ Template
        </div>
      </footer>
    </div>
  );
}

export default App;
