<template>
  <div>
    <pie-chart :data="data" :options="options"></pie-chart>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  props: {
    male_speaker_count: {
      type: Number,
      required: true,
      integer: true,
    },
    female_speaker_count: {
      type: Number,
      required: true,
      integer: true,
    }
  },
  mounted() {
    this.renderChart({
      labels: ['Male Speakers', 'Female Speakers'],
      datasets: [
        {
          backgroundColor: ['#68a15c', '#ff7b63'],
          data: [this.male_speaker_count, this.female_speaker_count],
        },
      ],
    }, { responsive: true, maintainAspectRatio: false });
  },
  computed: {
    data() {
      return {
        labels: ['Male Speakers', 'Female Speakers'],
        datasets: [
          {
            backgroundColor: ['#68a15c', '#ff7b63'],
            data: [this.male_speaker_count, this.female_speaker_count],
          },
        ],
      };
    },
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Speaker Gender',
        },
      };
    },
  },
};
</script>
