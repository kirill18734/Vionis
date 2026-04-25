import {
  IconFolder,
  IconSettings,
  IconUser,
  IconLogin,
  IconAffiliateFilled,
  type IconProps,
} from "@tabler/icons-react";

export type Icon = React.ComponentType<IconProps>;

export const Icons = {
  settings: IconSettings,
  workspace: IconFolder,
  account: IconUser,
  login: IconLogin,
  title: IconAffiliateFilled,
};
