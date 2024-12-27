import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/**
 * ScrollToTop Component
 *
 * This component ensures that the page scrolls to the top whenever the user navigates
 * to a new route. By listening to route changes via React Router's `useLocation` hook,
 * it triggers a scroll reset to provide a consistent user experience.
 *
 * To work as expected, this component should be placed within a layout or wrapper
 * that gets re-rendered on route changes (e.g., `PageLayout` in this application).
 * Adding it directly in the `RouterProvider` will not trigger the desired behavior
 * because the provider does not re-render on route changes.
 *
 * Without this component, navigating to a new page might retain the previous scroll
 * position, which could be confusing or undesirable for users.
 *
 * Usage:
 * - Import and include the `ScrollToTop` component within the layout or wrapper
 *   responsible for managing route changes.
 *
 * Example:
 * ```jsx
 * <PageLayout>
 *   <ScrollToTop />
 *   <Outlet />
 * </PageLayout>
 * ```
 */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default ScrollToTop;
