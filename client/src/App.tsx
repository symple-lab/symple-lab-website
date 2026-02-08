import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import TopNavigation from "@/components/TopNavigation";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import PublicationsHub from "./pages/PublicationsHub";
import PeopleHub from "./pages/PeopleHub";
import Gallery from "./pages/Gallery";
import Paper from "./pages/publications/Paper";
import Patent from "./pages/publications/Patent";
import Award from "./pages/publications/Award";
import News from "./pages/publications/News";
import Professor from "./pages/people/Professor";
import Student from "./pages/people/Student";
import PeopleGallery from "./pages/people/Gallery";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/research"} component={Research} />
      <Route path={"/publications"} component={PublicationsHub} />
      <Route path={"/publications/paper"} component={Paper} />
      <Route path={"/publications/patent"} component={Patent} />
      <Route path={"/publications/award"} component={Award} />
      <Route path={"/publications/news"} component={News} />
      <Route path={"/people"} component={PeopleHub} />
      <Route path={"/people/professor"} component={Professor} />
      <Route path={"/people/student"} component={Student} />
      <Route path={"/people/gallery"} component={PeopleGallery} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <TopNavigation />
          <main className="pt-16">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
