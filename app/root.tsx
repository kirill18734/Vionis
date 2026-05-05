import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import { TooltipProvider } from "./components/ui/tooltip";
import type { Route } from "./+types/root";

import "@/styles/globals.css";

import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { themeSessionResolver } from "@/.server/theme.sessions";
import { themeStyleCookieStorage } from "@/.server/theme-style.sessions";
import { DEFAULT_THEME_STYLE } from "@/config/theme-style";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookieThemeStyle = (await themeStyleCookieStorage.parse(cookieHeader))
    ?.themeStyle;
  const { getTheme } = await themeSessionResolver(request);
  return {
    themeStyle: cookieThemeStyle || DEFAULT_THEME_STYLE,
    themeColor: getTheme(),
  };
}

export function App() {
  const { themeColor, themeStyle } = useLoaderData();
  const [theme] = useTheme();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      theme-style={themeStyle}
      className={theme ?? ""}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(themeColor)} />
        <Links />
      </head>
      <body className="bg-background overflow-x-hidden overscroll-none font-sans antialiased">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { themeColor } = useLoaderData();
  return (
    <TooltipProvider>
      <ThemeProvider
        specifiedTheme={themeColor}
        themeAction="/action/set-theme"
        disableTransitionOnThemeChange={true}
      >
        <App />
      </ThemeProvider>
    </TooltipProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
