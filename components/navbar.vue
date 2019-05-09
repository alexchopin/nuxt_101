<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
      <b-navbar-brand to="/">Nuxt 101</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Accueil</b-nav-item>
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item to="/about">À propos</b-nav-item>
        </b-navbar-nav>
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item to="/profile">Profil</b-dropdown-item>
            <b-dropdown-item to="/logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
