<template>
    <div class="my-component">
      <h1>My Items</h1>
      <!-- <chapter-card :reveal="reveal" /> -->
      <!-- <v-btn @click="reveal = !reveal">Toggle</v-btn> -->
      <div class="card-container">
        <chapter-card v-for="item in items" 
        :key="item.id" 
        :id = "item.id"
        :title="item.title"
        :text="item.text" class="chapter-card"/>
      </div> 
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'MyComponent',
    data() {
      return {
        items: []
      }
    },
    mounted() {
      axios.get('http://localhost:8000/api/chapters')
        .then(response => {
          this.items = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      exploreChapter(title) {
        const formattedTitle = title.replace(' ', '-')
        axios.get(`http://localhost:8000/api/chapters/title/${formattedTitle}`)
          .then(response => {
            console.log(response.data)
            // do something with the response data
          })
          .catch(error => {
            console.log(error)
          })
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
}

  
  h1 {
    text-align: center;
    color: #1f3b32;
  }



.chapter-card {
  width: 80%;
  margin: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}




</style>