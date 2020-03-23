import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'new title';
}

// $('.cinema-seats .seat').on('click', function() {
//   $(this).toggleClass('active');
// });


// class AdminTS {
//   constructor() {
//     let btn = document.getElementById(".cinema-seat");
//     btn.addEventListener("click", (e:Event) => this.toggleClass('active'));
//   }
//   toogleClass(n:number){
//      // button click handler
//   }
// }
