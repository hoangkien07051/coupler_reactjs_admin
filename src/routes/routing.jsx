

// ui components

import AccountManagement from "../components/presentational/AccountManagement";
import Advertisement from "../components/presentational/Advertisement";
import ReportAccountManagement from "../components/presentational/ReportAccountManagement";
import Starter from "../views/Starter";

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop',  
    component: Starter 
  },
  { 
    path: '/account_management', 
    name: 'Account', 
    icon: 'ti-user',  
    component: AccountManagement 
  },
  { 
    path: '/advertisement', 
    name: 'Quảng cáo', 
    icon: 'ti-medall',  
    component: Advertisement 
  },
  { 
    path: '/report', 
    name: 'Báo cáo', 
    icon: 'ti-id-badge',  
    component: ReportAccountManagement 
  },
  { 
    path: '/notification', 
    name: 'Thông báo', 
    icon: 'ti-bell',  
    component: ReportAccountManagement 
  },
  { 
    path: '/', /*với trang chủ thì redirect tới trang dashbroad*/
    pathTo: '/dashboard', 
    name: 'Dashboard', 
    redirect: true 
  }
];
export default ThemeRoutes;
