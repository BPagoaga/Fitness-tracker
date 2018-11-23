import { Component } from "@angular/core";
import { Link } from "./models/link";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string = "fitness-tracker";
  openSideNave: boolean = false;
  links: Array<Link> = [
    {
      text: "Signup",
      url: "/signup",
      icon: "face"
    },
    {
      text: "Login",
      url: "/login",
      icon: "input"
    },
    {
      text: "Training",
      url: "/training",
      icon: "fitness_center"
    }
  ];
}
