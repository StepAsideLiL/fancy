import type { IconBaseProps } from "react-icons";
import * as GameIcons from "react-icons/gi";
import * as LucideIcons from "react-icons/lu";
import * as SimpleIcons from "react-icons/si";

const icons = {
  Github: (props: IconBaseProps) => <SimpleIcons.SiGithub {...props} />,
  NestedHexagons: (props: IconBaseProps) => (
    <GameIcons.GiNestedHexagons {...props} />
  ),
  Nextjs: (props: IconBaseProps) => <SimpleIcons.SiNextdotjs {...props} />,
  Shadcn: (props: IconBaseProps) => <SimpleIcons.SiShadcnui {...props} />,
  Tailwind: (props: IconBaseProps) => <SimpleIcons.SiTailwindcss {...props} />,
  Web: (props: IconBaseProps) => <LucideIcons.LuGlobe {...props} />,
  XSocial: (props: IconBaseProps) => <SimpleIcons.SiX {...props} />,
};

export default icons;
