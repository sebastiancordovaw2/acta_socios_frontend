<template>
    <div class="container mx-auto p-2">
      <h2 class="text-xl font-bold mb-6 text-center">Información de Documentos</h2>
      <div class="mb-6 p-4 bg-white rounded-lg shadow-md">
        <div class="mb-4">
          <strong class="text-gris">Nombre: {{ person.name }}</strong> 
        </div>
        <div class="mb-2">
          <strong class="text-gris">Registro Social de Hogares:</strong>
          <span :class="getClass(person.registroSocial)">
            {{ person.registroSocial ? ' Sí' : ' No' }}
          </span>
        </div>
        <div class="mb-2">
          <strong class="text-gris">Libreta de Ahorro:</strong>
          <span :class="getClass(person.libretaAhorro)">
            {{ person.libretaAhorro ? ' Sí' : ' No' }}
          </span>
        </div>
        <div class="mb-2">
          <strong class="text-gris">Carnet (Ambos Lados):</strong>
          <span :class="getClass(person.carnet)">
            {{ person.carnet ? ' Sí' : ' No' }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import Swal from 'sweetalert2';
  const data = JSON.parse(localStorage.getItem('socioLogeado'));

  const person = ref(
    {
      name: data[0].nombre_completo,
      registroSocial: data[0].registro_social_de_hogares,
      libretaAhorro: data[0].libreta_de_ahorro,
      carnet:  data[0].carnet_ambos_lados
    }
    // Agrega más personas según sea necesario
  )
  
  const getClass = (hasDocument) => {
    return hasDocument ? 'font-bold text-green-700' : 'font-bold text-red-700'
  }

  const showAlert = () => {
  Swal.fire({
    title: 'Próxima reunión',
    html: `<p class='font-bold text-left'>Estimado/a ${data[0].nombre_completo}</p>,

            <p class='text-left'>Te invitamos a la reunión del día domingo 30 de junio a las 15:00. hrs</p></br>

            <p class='text-left'>Detalles:</p></br>

            <p class='text-left font-bold'>
            Fecha: Domingo 30 de junio</br>
            Hora: 15:00 hrs</br>
            Lugar: Cancha corral de Pérez</br>
            Saludos cordiales</p>`,
    icon: 'info',
    confirmButtonText: 'OK'
  });

  

};
onMounted(()=>{
    showAlert();
 })
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
    .text-gris{
      color: #2c3e50;
    }
  </style>