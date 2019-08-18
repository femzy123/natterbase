<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand mr-5" href="#"><img src="/images/Logo.png" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <a href="#"  class="nav-link">Buy insurance</a>
            </li>
            <li class="nav-item">
              <router-link to="/about"  class="nav-link">Account Settings</router-link>
            </li>
          </ul>
          <span class="navbar-text">
              <span class="name-icon">LD</span>Lois Durello <i class="fa fa-angle-down fa-lg"></i>
          </span>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
.nav-item {font-size: 15px; margin-right: 2em !important;}
.navbar { box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06); margin-bottom: 50px}
/* .navbar-brand {margin-right: 2em !important} */
.name-icon {background: #00AD8E; color: #fff; padding: 10px 10px; border-radius: 3px; margin-right: 10px;}
.navbar-text {font-size: 16px; font-weight: bold}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {font-weight: bold !important}

</style>
