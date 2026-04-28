import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 p-6">
        <Dashboard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
