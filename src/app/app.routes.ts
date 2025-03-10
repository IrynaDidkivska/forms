import { Routes } from "@angular/router";
import { Task1Component } from "./task1/task1.component";
import { Task234Component } from "./task234/task234.component";

export const routes: Routes = [
  { path: "", redirectTo: "/task1", pathMatch: "full" },
  { path: "task1", component: Task1Component },
  { path: "task234", component: Task234Component },
];
