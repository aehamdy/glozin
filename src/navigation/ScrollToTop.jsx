import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/**
 * ScrollToTop Component
 *
 * This component ensures that the page scrolls to the top whenever the user navigates
 * to a new route. By listening to route changes via React Router's `useLocation` hook,
 * it triggers a scroll reset to provide a consistent user experience.
 *
 * Without this component, navigating to a new page might retain the previous scroll
 * position, which could be confusing or undesirable for users.
 *
 * Usage:
 * - Import and include the `ScrollToTop` component at the root of your application,
 *   typically within the main layout or router configuration.
 *
 * Example:
 * ```jsx
 * <BrowserRouter>
 *   <ScrollToTop />
 *   <App />
 * </BrowserRouter>
 */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default ScrollToTop;
