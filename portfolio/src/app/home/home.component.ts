import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moveBannerOnCursor();
  }

  moveBannerOnCursor(){
    
    (function() {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      const elem = document.getElementById("banner");
      // Magic happens here
      function parallax(e:any) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.002}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.006}% ${50 - (_mouseY - _h) * 0.006}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          elem!.style.backgroundPosition = x;
      }
  
  })();
  }

}
