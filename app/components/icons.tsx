import { IconFolder, IconSettings, type IconProps } from "@tabler/icons-react";

export type Icon = React.ComponentType<IconProps>;

export const Icons = {
  settings: IconSettings,
  workspace: IconFolder,
};
