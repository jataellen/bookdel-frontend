<template>
    <ul>
      <li v-for="(name, index) in names" :key="index">{{ name }}</li>
      <li v-if="names.length === 0">None</li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      inputString: {
        type: String,
        required: true,
      },
    },
    computed: {
      names() {
        const regex = /\'(.+?)\'\,\s*\'\w+\'/;
        const matches = this.inputString.match(new RegExp(regex, "g"));
        if (matches) {
          return matches.map((match) => match.match(regex)[1]);
        } else {
          return [];
        }
      },
    },
  };
  </script>
  
  <style>
ul {
  list-style-type: none;
}
</style>