import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index/index.vue";
import Mine from "@/views/mine/mine.vue";
import Team from "@/views/team/team.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
