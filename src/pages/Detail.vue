<template>
  <div>
    <div class="card text-center border border-0">
      <div class="title">
        <p class="fs-5">
          {{ coin.name }}
        </p>
      </div>
      <div class="card-body">
        <div class="d-flex">
          <div class="col-3">
            <img :src="coin.image.small" class="mb-3" />
            <div class="fw-bold">
              MarketCap Rank : #{{ coin.market_cap_rank }}
            </div>
            <div>MarketCap Rank : {{ coin.low_24h }}</div>
            <div>MarketCap Rank : {{ coin.categories }}</div>
            <div>MarketCap Rank : {{ coin.market_cap_rank }}</div>
            <div>MarketCap Rank : {{ coin.market_cap_rank }}</div>
            <div>MarketCap Rank : {{ coin.market_cap_rank }}</div>
          </div>
          <div class="col-9"></div>
        </div>
      </div>
      <div class="card-footer text-body-secondary">
        <router-link :to="'/'">
          <button class="btn btn-warning">Back to list</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const coinId = ref(null);
const coin = ref({});
const route = useRoute();

onMounted(() => {
  coinId.value = route.params.id;
  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/" + coinId.value,
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-83uQJKsETukF3qTVAMq6MnST",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      coin.value = response.data;
      console.log(coin.value);
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>

<style scoped>
.title {
  padding: 10px 0px;
  background-color: #641630;
  color: white;
  border-radius: 5px 5px 0px 0px;
}
</style>