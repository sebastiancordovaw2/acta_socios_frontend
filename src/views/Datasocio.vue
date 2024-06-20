<template>
    <div class="container mx-auto p-2">
      <h2 class="text-xl font-bold mb-6 text-center">Información de Documentos</h2>
      <div class="mb-6 p-4 bg-white rounded-lg shadow-md">
        <div class="mb-4">
          <strong>Nombre:</strong> {{ person.name }}
        </div>
        <div class="mb-2">
          <strong>Registro Social de Hogares:</strong>
          <span :class="getClass(person.registroSocial)">
            {{ person.registroSocial ? ' Sí' : ' No' }}
          </span>
        </div>
        <div class="mb-2">
          <strong>Libreta de Ahorro:</strong>
          <span :class="getClass(person.libretaAhorro)">
            {{ person.libretaAhorro ? ' Sí' : ' No' }}
          </span>
        </div>
        <div class="mb-2">
          <strong>Carnet (Ambos Lados):</strong>
          <span :class="getClass(person.carnet)">
            {{ person.carnet ? ' Sí' : ' No' }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const person = ref(
    {
      name: 'Juan Pérez',
      registroSocial: true,
      libretaAhorro: false,
      carnet: true
    }
    // Agrega más personas según sea necesario
  )
  
  const getClass = (hasDocument) => {
    return hasDocument ? 'font-bold text-green-700' : 'font-bold text-red-700'
  }
  </script>
  
  <style scoped>
    .container {
      max-width: 800px;
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