import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  subtitle = 'Bienvenidos!';

  // tasks: string[] = [
  //   'Instalar Angular CLI',
  //   'Crear proyecto',
  //   'Ejecutar servidor',
  //   'Crear componentes'
  // ]

  tasks = signal([
    'Instalar Angular CLI signal',
    'Crear proyecto',
    'Ejecutar servidor',
    'Crear componentes'
  ])

  myName: string = "Sebastian"
  myName2 = signal("Mar")
  age: number = 34

  disabled: boolean = true

  img: string = "https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/679210935de42a1be6065252/images/teaserImage_xxxx_angular_header_1699351460248_1699362954921.png"

  person = signal({
    name: "Sebasao",
    age: 34,
    avatar: "https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/679210935de42a1be6065252/images/teaserImage_xxxx_angular_header_1699351460248_1699362954921.png"
  })

  clickHandler() {
    alert("Welcome!")
  }

  changeHandler(event: Event) {
    console.log(event)
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    console.log( input.value )
  }

  changeHandlerSignal(event: Event) {
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.myName2.set(newValue)
  }

}
