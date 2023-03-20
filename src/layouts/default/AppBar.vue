<template>
  <v-app-bar flat color="#043028">
    <v-app-bar-title>
      <router-link :to="{ name: 'Home' }" class="bechdel-test-btn">
      <v-btn class="bechdel-test-btn" text>
        <v-icon color="#fff" class="mr-2">mdi-book-open-page-variant</v-icon> Bookdel Test
      </v-btn>
      </router-link>
    </v-app-bar-title>
    <v-toolbar-items class="justify-center">
      <v-flex xs12 class="align-center">
        <router-link :to="{ name: 'ListBooks' }" class="bechdel-test-btn">
          <v-btn text class="text-white text-lg mx-4 align-center hide-on-mobile">All Books</v-btn>
        </router-link>
        <router-link :to="{ name: 'ListChapters' }" class="bechdel-test-btn">
          <v-btn text class="text-white text-lg mx-4 align-center hide-on-mobile">All Chapters</v-btn>
        </router-link>
      </v-flex>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script setup>
  //
</script>

<style scoped>
  .text-white {
    color: #fff;
  }

  .font-semibold {
    font-weight: 600;
  }

  .tracking-wide {
    letter-spacing: 0.05em;
  }

  .text-lg {
    font-size: 1.2rem;
  }


  
  .align-center {
    display: flex;
    align-items: center;
  }

  .bechdel-test-btn {
    font-size: 1.5rem;
    color: #fff;
    text-transform: uppercase;
  }
  a {
  text-decoration: none;
}

@media screen and (max-width: 700px) {
  .hide-on-mobile {
    display: none;
  }
}

.v-app-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.12);
}

</style>
