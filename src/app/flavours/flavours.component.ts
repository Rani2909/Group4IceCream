import { Component } from '@angular/core';

@Component({
  selector: 'app-flavours',
  templateUrl: './flavours.component.html',
  styleUrls: ['./flavours.component.css']
})
export class FlavoursComponent {
  selectedType: string = ''; // To store the selected type
  selectedSize: string = ''; // To store the selected size
  selectedToppings: any = []; // To store the selected toppings
  additionalRequest: string = ''; // To store additional comments
  constructor() {
    this.selectedToppings = []; // Initialize selectedToppings as an empty array
  }
  toppings: any[] = [
    { id: 1, name: 'Oreo Crumbs', isSelected: false },
    { id: 2, name: 'Chocolate Crunch', isSelected: false },
    { id: 3, name: 'Rainbow Sprinkles', isSelected: false },
    { id: 4, name: 'Chocolate Sprinkles', isSelected: false },
    { id: 5, name: 'Fudge', isSelected: false },
    { id: 6, name: 'Dry Nuts', isSelected: false },
    { id: 7, name: 'Fruits', isSelected: false },
    { id: 8, name: 'M & M', isSelected: false }
  ]

  public flavoursArray = [
    {
      id: "01",
      fName: "Vanilla",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "vanilla.jpg"
    },
    {
      id: "02",
      fName: "Strawberry",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "strawberry.jpg"
    },
    {
      id: "03",
      fName: "Chocolate",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "chocolate.jpg"
    },
    {
      id: "04",
      fName: "Pista",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "pista.jpg"
    },
    {
      id: "05",
      fName: "Butter Pecan",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "Butter Pecan.jpeg"
    },
    {
      id: "06",
      fName: "Neapolitan",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "neapolitan.jpg"
    },

    {
      id: "07",
      fName: "Butterscotch",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "butterscotch.jpg"
    },

    {
      id: "08",
      fName: "Raspberry Ripple",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "Raspberry.jpg"
    },

  ]
  counterValue: number = 0;

  increment() {
    this.counterValue++;
  }

  decrement() {
    if (this.counterValue > 0) {
      this.counterValue--;
    }
  }
  updateSelectedToppings(id: any, name: any) {
    this.toppings.filter(item => {
      if (item.id == id) {
        this.selectedToppings.push(item);
      }
    })
    console.log(this.selectedToppings)
  }
  cartArray: any = [];
  iceCreamDetail :any ={}
  addToCart() {

    this.iceCreamDetail = {
      type: this.selectedType,
      size: this.selectedSize,
      toppings: this.selectedToppings,
      customerComments: this.additionalRequest,
      count: this.counterValue
    }
  this.cartArray.push(this.iceCreamDetail)

  console.log(this.cartArray)

  }
}
