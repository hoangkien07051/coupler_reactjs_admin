

// ui components

import Starter from "../views/Starter";

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop',  
    component: Starter 
  },
  { 
    path: '/', /*với trang chủ thì redirect tới trang dashbroad*/
    pathTo: '/dashboard', 
    name: 'Dashboard', 
    redirect: true 
  }
];
export default ThemeRoutes;
