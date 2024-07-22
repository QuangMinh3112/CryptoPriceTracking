<template>
  <div>
    <nav
      class="navbar navbar-expand-lg bg-transparent navbar-dark border-bottom border-secondary"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :active-class="active" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :active-class="active" to="/about"
                >About</router-link
              >
            </li>
          </ul>
          <div class="d-flex gap-3">
            <select class="form-select">
              <option>USD</option>
              <option>VNĐ</option>
              <option>EROU</option>
            </select>
            <button class="btn btn-light">Login</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
const active = "text-white text-decoration-underline";
</script>