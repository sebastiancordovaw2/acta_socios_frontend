<script setup>

</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-6 text-center">Ingreso Socios</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="rut" class="block text-gray-700 text-sm font-bold mb-2">RUT:</label>
              <input
                @input="formatRUT"
                v-model="rut"
                type="text"
                id="rut"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingresar RUT"
              />
              <p v-if="rutError" class="text-red-500 text-xs italic mt-2">{{ rutError }}</p>
            </div>
            <div class="mb-4">
              <label for="memberNumber" class="block text-gray-700 text-sm font-bold mb-2">Número de Socio:</label>
              <input
                v-model="memberNumber"
                type="text"
                id="memberNumber"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingresar Número de Socio"
              />
              <p v-if="memberNumberError" class="text-red-500 text-xs italic mt-2">{{ memberNumberError }}</p>
            </div>
            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from "vue-router"
const { push } = useRouter()

const rut = ref('')
const memberNumber = ref('')
const rutError = ref('')
const memberNumberError = ref('')
const formatRUT = () => {
      let value = rut.value.replace(/\D/g, ''); // Elimina todo lo que no sea dígitos
      if (value.length > 1) {
        value = value.slice(0, -1) + '-' + value.slice(-1); // Añade guión antes del dígito verificador
      }
      value = value
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.') // Añade puntos cada tres dígitos
        .replace(/^(\d{2})(\.\d{3})$/, '0$1$2'); // Asegura el formato de dos dígitos al principio si es necesario

      rut.value = value;
    }

const validateRut = (rut) => {
  rut = rut.replace(/\./g, '').replace(/-/g, '')
  if (rut.length < 8) {
    return false
  }
  const body = rut.slice(0, -1)
  let dv = rut.slice(-1).toUpperCase()

  let sum = 0
  let multiplier = 2

  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * multiplier
    multiplier = multiplier < 7 ? multiplier + 1 : 2
  }

  const expectedDv = 11 - (sum % 11)
  if (expectedDv === 11) {
    dv = '0'
  } else if (expectedDv === 10) {
    dv = 'K'
  } else {
    dv = expectedDv.toString()
  }

  return dv === rut.slice(-1).toUpperCase()
}

const validateMemberNumber = (number) => {
  return /^\d+$/.test(number)
}

const handleSubmit = async () => {
  rutError.value = ''
  memberNumberError.value = ''

  if (!validateRut(rut.value)) {
    rutError.value = 'RUT inválido'
    return
  }

  if (!memberNumber.value) {
    memberNumberError.value = 'Número de miembro requerido'
    return
  }

  if (!validateMemberNumber(memberNumber.value)) {
    memberNumberError.value = 'Número de miembro debe ser numérico'
    return
  }

  try {
    const response = await axios.post(import.meta.env.VITE_API_URL+'/login_socios', {
      rut: rut.value,
      memberNumber: memberNumber.value,
    })

    localStorage.setItem('socioLogeado', JSON.stringify(response.data));

    push('/datasocio');  // Navega a la ruta /about

  } catch (error) {
    console.error('Error logging in:', error)
  }
}
</script>