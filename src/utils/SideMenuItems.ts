import { USER_ROLE } from "@/types/role.constants";
import { TDrawerMenuItem, TUserRole } from "@/types/type.global";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const SideMenuItems = (role: TUserRole) => {
  const menuItems: TDrawerMenuItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      menuItems.push(
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: DashboardIcon,
        },
        {
          title: "All Products",
          path: "/dashboard/products",
          icon: ShoppingBagIcon,
        },
        {
          title: "Add Product",
          path: "/dashboard/products/add-product",
          icon: AddBusinessIcon,
        },
        {
          title: "All Orders",
          path: "/dashboard/orders",
          icon: StoreMallDirectoryIcon,
        }
      );
      break;
    case USER_ROLE.USER:
      menuItems.push(
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: DashboardIcon,
        },
        {
          title: "My Order",
          path: "/dashboard/my-orders",
          icon: ShoppingBasketIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...menuItems];
};