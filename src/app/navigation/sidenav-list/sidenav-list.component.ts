import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Link } from "src/app/models/link";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.scss"]
})
export class SidenavListComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();
  @Input() links: Array<Link>;

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeSideNav.emit();
  }
}
