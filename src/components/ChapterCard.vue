<template>
    <v-card class="mx-auto" min-width="200" max-width="500">
      <v-card-actions>
      <div v-if="passes === 'True'" class="green-box">
        <v-icon color="fff" >mdi-check-circle</v-icon>
      </div>
      <div v-else class="red-box">
        <v-icon color="fff">mdi-alpha-x-circle</v-icon>
      </div>
      <v-card-id style="padding: 0 0 0 20px">Chapter ID: {{ id }}</v-card-id>
      
        <v-spacer></v-spacer>
        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-container>
            <v-row no-gutters>
                <v-col>
                  <v-sheet class="ma-3" color=#F1F8E9 rounded = "lg">
                    <v-card-text>
                      <h4>MALE MENTIONS</h4>
                      <div class = "text-center">
                        <name-list :inputString="male_mentions" />
                      </div>
                    </v-card-text>
                  </v-sheet>
                  <v-sheet class="ma-3" color=#F1F8E9 rounded = "lg">
                    <v-card-text>
                      <h4>MALE SPEAKERS</h4>
                        <div class="text-center">
                          <name-list :inputString="male_speakers" />
                        </div>
                    </v-card-text>
                  </v-sheet>
                <v-sheet class="ma-3" color=#F1F8E9 rounded = "lg">
                  <v-card-text>
                    <h4>FEMALE SPEAKERS</h4>
                    <div class="text-center">
                      <name-list :inputString="female_speakers" />
                    </div>
                  </v-card-text>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
          <div style="display: flex;">
            <v-spacer></v-spacer>
            <v-btn color="#e0467e" variant="text" @click="dialog = true">View Chapter Text</v-btn>
            <v-dialog v-model="dialog" style="margin: 20px;">
              <v-card style="padding: 25px;">
                <v-card-title style="display: flex;">
                  <v-card-id>Chapter ID: {{ id }}</v-card-id>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="dialog = false" style="height:20px; width:20px"><v-icon>mdi-close-circle</v-icon></v-btn>
                </v-card-title>
                <v-card-text>{{ text }}</v-card-text>
                <v-card-actions style="display: flex;">
                  <v-spacer></v-spacer>
                  <v-btn color="#ff7b63" @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          
        </div>
      </v-expand-transition>
    </v-card>
  </template>
  
  <script>
  import NameList from "@/components/NameList.vue";
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      explore: {
        type: Function,
        required: true,
      },
      passes: {
        type: String,
        required: true,
      },
      male_mentions:{
        type: String,
        required: true,
      },
      male_speakers:{
        type: String,
        required: true,
      },
      female_speakers:{
        type: String,
        required: true,
      }
    },
    components: {
      NameList,
    },
    data: () => ({
      show: false,
      dialog: false,
    }),
  };
  </script>
  
  <style>
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