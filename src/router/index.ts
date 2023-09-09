import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/attendance",
    alias: "/",
    name: "Attendance Logs",
    component: () => import("../pages/attendanceLogs.vue"),
  },
  {
    path: "/attendance/exports",
    name: "Attendance Exports",
    component: () => import("../pages/attendanceExport.vue"),
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    component: () => import("../pages/maintenance.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404 Error page",
    component: () => import("../pages/error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
