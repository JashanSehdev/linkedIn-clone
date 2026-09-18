import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "../ui/navbar/navbar-variant-1";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <nav>
            <Navbar />
          </nav>

          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
