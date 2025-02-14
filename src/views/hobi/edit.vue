<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h4 class="mb-0">Tambah Hobi</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="onUpdate">
              <div class="mb-3">
                <label for="nama_hobi" class="form-label">Nama Hobi</label>
                <input
                  type="text"
                  v-model="hobi"
                  class="form-control"
                  placeholder="Masukkan nama hobi"
                  required
                />
              </div>
              <ButtonPrimary :isLoading="isLoading">
                Tambah Hobi
              </ButtonPrimary>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import { ref } from 'vue';
import ButtonPrimary from '../../components/ButtonPrimary.vue'
import { useRouter , useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted } from 'vue';

const hobi = ref("")

const isLoading = ref(false)
const router = useRouter();
const route = useRoute();

console.log(route)

const Url = "http://127.0.0.1:8000/api"

const getData = async() => {
    axios.get(Url + `/hobi/${route.params.id}`)
  .then(function (response) {
    hobi.value = response.data.data.nama_hobi
  })
}

const onUpdate = async() => {
    isLoading.value = true
    const response = await axios.put(Url + `/hobi/${route.params.id}`, {
        nama_hobi: hobi.value
        }).then(() => {
            router.push('/')
            alert('data sukses diupdate')
        })
        
}

onMounted(() => {
    getData();
})
</script>