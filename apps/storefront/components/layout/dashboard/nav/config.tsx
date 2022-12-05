// component
import SvgColor from "ui/components/svg-color";

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: "내 성격",
    path: "/dashboard/app",
    icon: icon("ic_me.png"),
  },
  {
    title: "친구",
    path: "/dashboard/app",
    icon: icon("ic_friend.png"),
  },
];

export default navConfig;
