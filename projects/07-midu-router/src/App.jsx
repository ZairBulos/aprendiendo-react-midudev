import { Suspense, lazy } from "react";

import SearchPage from "./pages/Search.jsx";

import Route from "./components/Route.jsx";
import Router from "./components/Router.jsx";

const LazyHomePage = lazy(() => import("./pages/Home.jsx"));
const LazyAboutPage = lazy(() => import("./pages/About.jsx"));
const Lazy404Page = lazy(() => import("./pages/404.jsx"));

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage
  }
];

function App() {
  return (
    <main>
      <Suspense fallback={null}>
         <Router routes={appRoutes} defaultComponent={Lazy404Page}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
