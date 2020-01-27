import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// import { SwiperModule } from "../../node_modules/swiper";

import { Angular2UsefulSwiperModule } from "node_modules/angular2-useful-swiper";

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: "horizontal",
//   slidesPerView: "auto"
// };

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Angular2UsefulSwiperModule],
  providers: [
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
