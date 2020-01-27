import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { SwiperOptions } from "swiper";
import { SwiperComponent } from "angular2-useful-swiper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "swiper-slider";
  // @ViewChild("usefulSwiper", { static: false }) usefulSwiper: SwiperComponent;

  slides = [
    { img: "../assets/miki/miki1.jpg" },
    { img: "../assets/miki/miki2.jpg" },
    { img: "../assets/miki/miki3.jpg" },
    { img: "../assets/miki/miki4.jpg" },
    { img: "../assets/miki/miki5.jpg" },
    { img: "../assets/miki/miki6.jpg" },
    { img: "../assets/miki/miki7.jpg" },
    { img: "../assets/miki/miki8.jpg" },
    { img: "../assets/miki/miki9.jpg" },
    { img: "../assets/miki/miki10.jpg" }
  ];

  config: SwiperOptions = {
    autoplay: { delay: 3000 }, // Autoplay option having value in milliseconds
    initialSlide: 0, // Slide Index Starting from 0
    slidesPerView: 1, // Slides Visible in Single View Default is 1
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30
  };
}
