<template>
  <div>
    <v-carousel hide-delimiters show-arrows="hover" style="height: calc(100vH - 60px);">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
      >
        <v-container class="fill-height d-flex flex-column">
          <v-row class="fill-height">
            <v-col class="d-flex align-center justify-center flex-grow-1">
              <router-link :to="{ name: 'bookChapters', params: { title: item.title } }">
                <div class="title front-page" style="text-align: center; transition: opacity 0.2s;padding:10px 25px 10px 25px ;  border-radius: 10px;">
                  {{ item.title }}
                </div>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <div class="aboutUs front-page" style="text-align: center; transition: opacity 0.2s;padding:10px 25px 10px 25px ;  border-radius: 10px;" @click="scrollToNextSection">
        About our Project
        <v-icon color="#fff" class="mr-2">mdi-chevron-down</v-icon>
      </div>
    </v-carousel>

    <div ref="nextSection">
      <div class="my-component">
        <div class="content-container-about">
          <h1>About Bookdel</h1>
          <p class=text-center>Bookdel is an adaptation of the Bechdel test. It focuses primarily on the novels of Jane Austen, an English author renowned for her exploration of marriage and the role of women in society. We analyzed her novels to investigate how female characters are portrayed in relation to marriage, family, and societal expectations. Our aim is to shed light on how literature reflects and shapes cultural norms and values.
          </p>
        </div>
        <v-spacer style="height:20px" />
        <div class="content-container-about">
          <h1>What is the Bechdel test?</h1>
          <p class="text-center">       
              Originally created by cartoonist Allison Bechdel, the Bechdel test evaluates female representation in media. A work of fiction passes the Bechdel test if it features a scene with least two named female characters who have a conversation about something other than a man. Bookdel extends the Bechdel test to the context of literature, using chapters instead of scenes as the unit of analysis. 
          </p>
        </div>
        <v-btn style="margin-left: 47%;" icon @click="scrollToTop">
          <v-icon>mdi-chevron-up-circle</v-icon>
        </v-btn>



      </div>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      items: [
        {
          title: 'Emma',
          src: 'src/assets/Emma.png',
        },
        {
          title: 'Pride and Prejudice',
          src: 'src/assets/Pride and Prejudice.png',
        },
        {
          title: 'Sense and Sensibility',
          src: 'src/assets/Sense and Sensibility.png',
        },
        {
          title: 'Mansfield Park',
          src: 'src/assets/Mansfield Park.png',
        },
        {
          title: 'Persuasion',
          src: 'src/assets/Persuasion.png',
        },
      ],
    };
  },
  methods: {
    scrollToNextSection() {
      const nextSection = this.$refs.nextSection;
      const offset = -60; // adjust this value to change the offset
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offset: { top: offset } });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style>
.title {
  position: absolute;
  color: white;
  font-weight: bolder;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  cursor: pointer;
}

.aboutUs {
  position: absolute;
  color: white;
  font-weight: bolder;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  cursor: pointer;
}

.my-component {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-image: url('../assets/bg.png');
  background-repeat: repeat;
  background-size: auto;
  background-position: center center;
  padding: 50px 0 50px 0; /* add padding-top here */
  background-attachment: fixed;
}

.content-container-about {
  background-color: #fcebe6;
  width: 80%;
  margin: 0 auto 20px auto;
  padding: 20px; /* add padding-top here */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.front-page:hover {
  background-color: rgba(255, 255, 255, 0.1);
  /* Add any other necessary styles */
}

</style>
