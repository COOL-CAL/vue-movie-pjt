<template>
  <div>
    <h1>Weekly Box Office</h1>
    <div>
      <input type="date" v-model="selectedDate">
      <button @click="search">Search</button>
    </div>
    <RankTable :list="list"></RankTable>
  </div>
</template>

<script>
import RankTable from '../components/boxoffice/RankTable';

export default {
  data() {
    return {
      selectedDate: '',
      list: []
    }
  },
  components: {
    RankTable
  },
  methods: {
    search() {
      const targetDt = this.selectedDate.replaceAll('-', '');
      this.getData(targetDt);
    },
    async getData(weekGb) {
      const data = await this.getBoxOfficeByWeek(weekGb);
      this.list = data.boxOfficeResult.weeklyBoxOfficeList;
      console.log(data);
    }
  },
  created() {
    const d = new Date();
    d.setDate(d.getDate() -1);
    this.selectedDate = this.getOnlyDateStr(d);
  }
}
</script>

<style>

</style>