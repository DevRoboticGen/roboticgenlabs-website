import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import RouteEffects from "./components/RouteEffects";

const Home = lazy(() => import("./pages/Home"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

export default function App() {
  return (
    <Router>
      <SpeedInsights />
      <RouteEffects />

      {/* Optional quick nav for testing, remove if Navbar already has links */}
      {/* <nav className="p-3 text-sm">
        <Link to="/" className="mr-3 underline">Home</Link>
        <Link to="/privacy-policy" className="underline">Privacy Policy</Link>
      </nav> */}

      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-white">
                <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
                <Link to="/" className="underline">
                  Go back home
                </Link>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
