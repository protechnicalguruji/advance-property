import { Layout } from "@/components/Layout";
import { SoundProvider } from "@/hooks/useSoundEffects";
import { WishlistProvider } from "@/hooks/useWishlist";
import About from "@/pages/About";
import Commercial from "@/pages/Commercial";
import Construction from "@/pages/Construction";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import Properties from "@/pages/Properties";
import Services from "@/pages/Services";
import Testimonials from "@/pages/Testimonials";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});
const propertiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties",
  component: Properties,
});
const commercialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/commercial",
  component: Commercial,
});
const constructionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/construction",
  component: Construction,
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: Gallery,
});
const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/testimonials",
  component: Testimonials,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  propertiesRoute,
  commercialRoute,
  constructionRoute,
  galleryRoute,
  testimonialsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <SoundProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </SoundProvider>
  );
}
