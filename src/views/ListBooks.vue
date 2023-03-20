<template>
  <div class="my-component">
    <div class="content-container">
      <h1>ALL BOOKS</h1>
      <div class="checkbox-container">
        <input id="filterByPasses" type="checkbox" v-model="filterByPasses" class="checkbox" />
        <label for="filterByPasses" class="label">Only show books that pass</label>
      </div>
      <div class="card-container">
      
        <book-card v-for="item in filteredItems" 
          :key="item.id" 
          :title = "item.title"
          :passes="item.bechdel" 
          :male_speakers="item.male_speakers"
          :male_speaker_count="item.male_speaker_count"
          :female_speakers="item.female_speakers"
          :female_speaker_count="item.female_speaker_count"
          class="book-card"/>
      </div>
    </div>
    <v-spacer style="height:20px"></v-spacer>
    <v-btn style="margin-left: 47%;" icon @click="scrollToTop">
      <v-icon>mdi-chevron-up-circle</v-icon>
    </v-btn>
  </div>
</template>
  
<script>
import axios from 'axios'
import BookCard from '../components/BookCard.vue'

export default {
  name: 'MyComponent',
  data() {
    return {
      items: [],
      reveal: false,
      filterByPasses: false,
    }
  },
  mounted() {
    axios.get('http://localhost:8000/api/books')
      .then(response => {
        this.items = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  components: {
    'book-card': BookCard
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  computed: {
    filteredItems() {
      if (this.filterByPasses) {
        return this.items.filter(item => item.bechdel === '\'True\'');
      } else {
        return this.items;
      }
    }
  }
}
</script>
  
  
<style>
  .my-component {
    height:100%;
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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

  
  h1 {
    font-size: 2.5rem;
    text-align: center;
    color: #1f3b32;
  }



.book-card {
  width: 80%;
  margin: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}


.checkbox-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 5px;
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