<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h4 class="mb-0">Tambah Hobi</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="onSubmit">
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
              <ButtonPrimary :isLoading="loading">
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
import { ref } from 'vue'
import ButtonPrimary from '../../components/ButtonPrimary.vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

const hobi = ref("")
const router = useRouter()
const isLoading = ref(false)
const Url = 'http://127.0.0.1:8000/api'

const onSubmit = async () => {
    isLoading.value = true;
  try {
    await axios.post(Url + '/hobi', {
      nama_hobi: hobi.value,
    }).then(()=>{
        router.push('/')
    })



    alert('Hobi berhasil ditambahkan!')
  } catch (error) {
    console.error('Error:', error)
    alert('Gagal menambahkan hobi!')
  }
}
</script>
