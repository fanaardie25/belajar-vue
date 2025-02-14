<template>
  <h1 class="text-center">Data hobi</h1>
  <router-link :to="{name: 'hobi.create'}" class="btn btn-primary">Tambah Data</router-link>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>no</th>
        <th>name</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(hobi, index) in hobi">
        <td>{{ index + 1 }}</td>
        <td>{{ hobi.nama_hobi }}</td>
        <td >
            <router-link :to="{ name: 'hobi.edit' , params: {id: hobi.id}  }" class="btn btn-warning btn-sm me-1">Edit</router-link>
            <button @click="deleteHobi(hobi.id)" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { ref , onMounted } from 'vue'
import axios from 'axios'

const hobi = ref([])

const Url = 'http://127.0.0.1:8000/api'

 const getHobi = async() => {
    const response = await axios.get(Url + '/hobi')
    hobi.value = response.data.data
}

onMounted(() => {
    getHobi()
})

const deleteHobi = async (id) => {
    await axios.delete(Url + '/hobi/' + id)
    alert('data berhasil dihapus')
    getHobi()
}


</script>
