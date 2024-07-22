<template>
  <div class="col-12 mx-auto">
    <div class="table-responsive">
      <table class="table rounded-table table-hover">
        <thead class="">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coin</th>
            <th scope="col">Price</th>
            <th scope="col">24H Change</th>
            <th scope="col">Total Supply</th>
            <th scope="col">Maket Cap</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="bg-dark-subtle">
          <tr v-for="data in coins" :key="data.id">
            <td>{{ data.market_cap_rank }}</td>
            <td>
              <div class="d-flex align-items-center gap-3">
                <img :src="data.image" class="coin-image" />
                <div class="fw-bold">
                  {{ data.name }}
                </div>
                <div>{{ convertTextSymbol(data.symbol) }}</div>
              </div>
            </td>
            <td>{{ data.current_price }}</td>
            <td>{{ data.price_change_24h }}</td>
            <td>{{ data.total_supply }}</td>
            <td>{{ data.market_cap }}</td>
            <td>
              <router-link :to="'/detail/' + data.id"
                ><button class="btn btn-primary btn-sm">
                  Detail
                </button></router-link
              >
            </td>
          </tr>
          <tr v-if="loading">
            <td colspan="7">
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

var coins = ref([]);
var loading = ref(false);

onMounted(async () => {
  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/markets",
    params: { vs_currency: "usd" },
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-83uQJKsETukF3qTVAMq6MnST",
    },
  };
  loading.value = true;
  axios
    .request(options)
    .then(function (response) {
      setTimeout(() => {
        loading.value = false;
        coins.value = response.data;
      }, 1500);
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
});
function convertTextSymbol(a) {
  return a.toUpperCase();
}
</script>
<style scoped>
thead tr th {
  padding: 20px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
tbody tr td {
  padding: 20px 10px;
  font-size: 13px;
}
</style>