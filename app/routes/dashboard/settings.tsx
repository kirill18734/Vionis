import { themeStyleCookieStorage } from "@/.server/theme-style.sessions";
import ThemeSelect from "@/components/theme";
import ThemeStyle from "@/components/theme-style";
import { DEFAULT_THEME_STYLE } from "@/config/theme-style";
import { useLoaderData } from "react-router";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookieThemeStyle = (await themeStyleCookieStorage.parse(cookieHeader))
    ?.themeStyle;

  return {
    themeStyle: cookieThemeStyle || DEFAULT_THEME_STYLE,
  };
}

export default function Settings() {
  const { themeStyle } = useLoaderData();

  return (
    <>
      <ThemeSelect />
      <ThemeStyle defaultThemeStyle={themeStyle} />
    </>
  );
}
