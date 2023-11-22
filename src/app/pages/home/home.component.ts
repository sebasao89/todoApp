import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ANGULAR MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal([
    'Instalar Angular CLI signal',
    'Crear proyecto',
    'Ejecutar servidor',
    'Crear componentes'
  ])

  inputChangeHandler(event: Event) {
    const input = event.target as HTMLInputElement
    const newTask = input.value
    this.tasks.update((tasks) => [
      ...tasks, newTask
    ])
    input.value = ''
  }

  deleteTask(index: number) {
    //Eliminar un elemento de un array con signal y sin mutar el array utilizando el metodo filter
    this.tasks.update((tasks) => tasks.filter((task, i) => i !== index))
  }

}

