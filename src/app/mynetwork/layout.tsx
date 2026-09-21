import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "../ui/navbar/navbar-variant-1";
import HomeNavbar from "../ui/navbar/home-navbar/home-navbar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <main>
        <AppRouterCacheProvider>
          <nav>
            <HomeNavbar />
          </nav>

          {children}
        </AppRouterCacheProvider>
      </main>
  );
}
