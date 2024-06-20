<template>
    <div class="container mx-auto p-6">
      <h2 class="text-2xl font-bold mb-6 text-center">Información de Documentos</h2>
      <table class="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Nombre</th>
            <th class="py-2 px-4 border-b">Registro Social de Hogares</th>
            <th class="py-2 px-4 border-b">Libreta de Ahorro</th>
            <th class="py-2 px-4 border-b">Carnet (Ambos Lados)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person.name">
            <td class="py-2 px-4 border-b">{{ person.name }}</td>
            <td class="py-2 px-4 border-b" :class="getClass(person.registroSocial)">
              {{ person.registroSocial ? 'Sí' : 'No' }}
            </td>
            <td class="py-2 px-4 border-b" :class="getClass(person.libretaAhorro)">
              {{ person.libretaAhorro ? 'Sí' : 'No' }}
            </td>
            <td class="py-2 px-4 border-b" :class="getClass(person.carnet)">
              {{ person.carnet ? 'Sí' : 'No' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const people = ref([
    {
      name: 'Juan Pérez',
      registroSocial: true,
      libretaAhorro: false,
      carnet: true
    }
    // Agrega más personas según sea necesario
  ])
  
  const getClass = (hasDocument) => {
    return hasDocument ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
  }
  </script>
  
  <style scoped>
    .container {
      max-width: 800px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      text-align: left;
    }
    .border-b {
      border-bottom: 1px solid #e5e7eb;
    }
    .bg-green-100 {
      background-color: #d1fae5;
    }
    .text-green-700 {
      color: #047857;
    }
    .bg-red-100 {
      background-color: #fee2e2;
    }
    .text-red-700 {
      color: #b91c1c;
    }
  </style>
  