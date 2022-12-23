import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";
import { ErrorPage } from "./pages/ErrorPage";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

export default function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}
