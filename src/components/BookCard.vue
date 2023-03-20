<template>
  <v-card class="mx-auto" min-width="200" max-width="500">
    <v-img
      :src="'src/assets/covers/' + title + '.png'"
      cover
    ></v-img>
    
    <v-card-actions style="padding:20px 0 0 0 ">
      <div v-if="passes === '\'True\''" class="green-box">
        <v-icon color="fff" >mdi-check-circle</v-icon>
      </div>
      <div v-else class="red-box">
        <v-icon color="fff">mdi-alpha-x-circle</v-icon>
      </div>
      <v-card-title style="font-size: 28px; color:#0a3d35; font-weight: bold">{{ title.toLocaleUpperCase() }}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-spacer style="height:20px" />
        <v-divider></v-divider>
        <v-spacer style="height:20px" />

        <v-container>
            <v-row no-gutters>
                <v-col>
                  <v-sheet class="ma-3" color=#F1F8E9 rounded = "lg">
                    <v-card-text>
                      <h4>ALL MALE SPEAKERS</h4>
                        <div class="text-center">
                          {{ms_formattedList}}
                        </div>
                    </v-card-text>
                  </v-sheet>
                <v-sheet class="ma-3" color=#F1F8E9 rounded = "lg">
                  <v-card-text>
                    <h4>ALL FEMALE SPEAKERS</h4>
                    <div class="text-center">
                      <!-- <name-list :inputString="female_speakers" /> -->
                      {{fs_formattedList}}
                    </div>
                  </v-card-text>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        <div style="display: flex;">
        <v-spacer></v-spacer>
        <router-link :to="{ name: 'bookChapters', params: { title: title } }">
          <v-btn color="#BF5E8B" variant="text" @click="explore">View Chapters</v-btn>
        </router-link>
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    passes: {
      type: String,
      required: true,
    },
    male_speakers: {
      type: String,
      required: true,
    },
    male_speaker_count: {
      type: Number,
      required: true,
      integer: true,
    },
    female_speakers: {
      type: String,
      required: true,
    },
    female_speaker_count: {
      type: Number,
      required: true,
      integer: true,
    }
  },
  computed: {
    ms_formattedList() {
      const array = this.male_speakers.replace("[","").replace("]","")
      return array
    },
    fs_formattedList() {
      const array = this.female_speakers.replace("[","").replace("]","")
      return array
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style>
a {
  text-decoration: none;
}

.green-box {
  background-color: #68a15c;
  color: white;
  padding: 10px;
  border-radius: 50px;
  font-weight: bold;
}

.red-box {
  background-color: #ff7b63;
  color: white;
  padding: 10px;
  border-radius: 50px;
  font-weight: bold;
}

h4 {
  text-align: center;
  color: #53827a;
  padding: 0 0 10px 0;
}

</style>
