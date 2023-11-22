import { CiBoxes, CiMemoPad } from "react-icons/ci";
import { LuWrench, LuUserCog, LuDatabaseBackup } from "react-icons/lu";

export const cardItems = [
  {
    id: 1,
    icon: <CiBoxes className="text-indigo-500" />,
    text: "Stock",
    picture: "/assets/inventory.png",
    path: "/stock",
  },
  {
    id: 2,
    icon: <LuWrench className="text-green-500" />,
    text: "Manufacturial",
    picture: "/assets/manufacturing.png",
    path: "/menufacturial",
  },
  {
    id: 3,
    icon: <LuUserCog className="text-red-500" />,
    text: "Manage User",
    picture: "/assets/teamwork.png",
    path: "/user-management",
  },
  {
    id: 4,
    icon: <LuDatabaseBackup className="text-yellow-500" />,
    text: "Raw Materials",
    picture: "/assets/MasterData.png",
    path: "/raw-materials",
  },
  {
    id: 5,
    icon: <CiMemoPad className="text-blue-500" />,
    text: "Supplier",
    picture: "/assets/seo-report.png",
    path: "/suppliers",
  },
  {
    id: 6,
    icon: <CiMemoPad className="text-blue-500" />,
    text: "Report",
    picture: "/assets/statistics.png",
    path: "/report",
  },
];
