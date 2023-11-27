import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// ANGULAR MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

// MODELS
import { task } from '../../models/tasks.model';


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
    MatIconModule,
    MatDividerModule
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

  tasks2 = signal<task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false,
      editing: true
    },
    {
      id: Date.now(),
      title: 'Ejecutar proyecto',
      completed: false,
      editing: true
    }
  ])

  newTask2Ctrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  })

  // editing: boolean = false

  // inputChangeHandler(event: Event) {
  //   const input = event.target as HTMLInputElement
  //   const newTask = input.value 
  //   this.addTask(newTask)
  //   input.value = ''   
  // }

  inputChangeHandler() {
    if( this.newTask2Ctrl.valid ) {
      const value = this.newTask2Ctrl.value.trim()
      if( value !== "") {
        this.addTask(value)
        this.newTask2Ctrl.setValue('')   
      }
    }
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }

    this.tasks2.update((tasks2) => [
      ...tasks2, newTask
    ])
  }

  deleteTask(index: number) {
    //Eliminar un elemento de un array con signal y sin mutar el array utilizando el metodo filter
    this.tasks2.update((tasks2) => tasks2.filter((task2, i) => i !== index))
  }

  updateTask(index: number) {
    this.tasks2.update((tasks2) => {
      return tasks2.map((task, position) => {
        if(position === index) {
          return {
            ...task,
            completed: !task.completed
        }
      }
      return task
      })
    })
  }

  editingModeTask(index: number) {
    // this.editing.set(false)
    // this.editing = !this.editing;

    this.tasks2.update((tasks2) => {
      return tasks2.map((task, position) => {
        if(position === index) {
          return {
            ...task,
            editing: false
        }
      }
      return {
        ...task,
        editing: true
      }
      })
    })
  }


}

