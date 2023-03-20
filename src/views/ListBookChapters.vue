
<template>
  <div class="my-component">
    <div class="content-container">
      <h1>{{ title.toLocaleUpperCase() }}</h1>
      <h5>CHAPTERS</h5>
      <div class="search-container align-center">
        <v-icon color="grey" class="mr-2">mdi-magnify</v-icon>
        <input style = "max-width:400px" type="text" v-model="searchTerm" placeholder="Search for Keywords" />
      </div>
      <div class="checkbox-container">
        <input id="filterByPasses" type="checkbox" v-model="filterByPasses" class="checkbox" />
        <label for="filterByPasses" class="label">Only show chapters that pass</label>
      </div>
      <div class="card-container">
        <chapter-card v-for="item in displayedItems"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :text="item.text"
          :passes="item.bechdel"
          :male_mentions="item.male_mentions"
          :male_speakers="item.male_speakers"
          :female_speakers="item.female_speakers"
          class="chapter-card"
        />
      </div>
      <v-pagination v-model="page" :length="pages" @click.native="goToTop"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ChapterCard from '../components/ChapterCard.vue';

export default {
  name: 'ListBookChapters',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: [],
      page: 1,
      pageSize: 5,
      searchTerm: '',
      filterByPasses: false,
    };
  },
  computed: {
    displayedItems() {
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      let filteredItems = this.items.filter(item =>
        item.text.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      if (this.filterByPasses) {
        filteredItems = filteredItems.filter(item => item.bechdel.includes('True'));
      }
      return filteredItems.slice(start, end);
    },
    pages() {
      return Math.ceil(this.items.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase())).length / this.pageSize);
    },
  },
  mounted() {
    const formattedTitle = this.title.toLowerCase().replace(' ', '-');
    axios
      .get(`http://localhost:8000/api/chapters/title/${formattedTitle}`)
      .then((response) => {
        this.items = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    'chapter-card': ChapterCard,
  },
  methods: {
    goToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
};
</script>

<style>
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

.content-container {
  background-color: #fcebe6;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0 50px 0; /* add padding-top here */
}

h1 {
  text-align: center;
  color: #1f3b32;
  font-size: 2.5rem;
}
h5 {
  text-align: center;
  color: #53827a;
  padding: 0 0 10px 0;
}

.chapter-card {
  width: 80%;
  margin: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}


.checkbox-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 5px;
}

input[type="text"] {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
}

input[type="checkbox"] {
  appearance: none;
  margin-top: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #ccc;
  background-color: white;
  vertical-align: middle;
  margin-right: 5px;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: #68a15c;
}


label {
  color: #1f3b32;
  font-size: 0.9rem;
  display: flex;
  cursor: pointer;
}

</style>

