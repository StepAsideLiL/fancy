import { IconBaseProps } from "react-icons";
import * as SimpleIcons from "react-icons/si";

const icons = {
  Motion: ({ size = 24, color }: IconBaseProps) => (
    <svg viewBox="0 0 41 14" width={size} height={size}>
      <path
        d="M 15.481 0 L 7.38 13.988 L 0 13.988 L 6.325 3.066 C 7.306 1.372 9.753 0 11.791 0 Z M 33.579 3.497 C 33.579 1.566 35.231 0 37.269 0 C 39.307 0 40.959 1.566 40.959 3.497 C 40.959 5.428 39.307 6.994 37.269 6.994 C 35.231 6.994 33.579 5.428 33.579 3.497 Z M 16.865 0 L 24.245 0 L 16.144 13.988 L 8.764 13.988 Z M 25.581 0 L 32.961 0 L 26.636 10.922 C 25.655 12.615 23.208 13.988 21.17 13.988 L 17.48 13.988 Z"
        fill={color}
      ></path>
    </svg>
  ),
  Nextjs: (props: IconBaseProps) => <SimpleIcons.SiNextdotjs {...props} />,
  Shadcn: (props: IconBaseProps) => <SimpleIcons.SiShadcnui {...props} />,
  Tailwind: (props: IconBaseProps) => <SimpleIcons.SiTailwindcss {...props} />,
};

export default icons;
