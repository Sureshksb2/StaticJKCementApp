import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: any;
  ngOnInit(){
    this.images=[
      { id:0, src:'slide/img1.webp', alt:'image1'},
      { id:1, src:'slide/img2.webp', alt:'image2'},
      { id:2, src:'slide/img3.webp', alt:'image3'},
      { id:3, src:'slide/img4.webp', alt:'image4'},
      { id:4, src:'slide/img5.webp', alt:'image5'},
      { id:5, src:'slide/img6.webp', alt:'image6'},
      { id:6, src:'slide/img7.webp', alt:'image7'},
      { id:7, src:'slide/img8.webp', alt:'image8'},
      { id:8, src:'slide/img9.webp', alt:'image9'},
      { id:9, src:'slide/img10.webp', alt:'image10'},
      { id:10, src:'slide/img11.webp', alt:'image11'},
      { id:11, src:'slide/img12.webp', alt:'image12'}
    ]
  }
}
