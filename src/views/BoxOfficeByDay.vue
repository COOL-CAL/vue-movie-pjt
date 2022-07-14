<template>
  <div>
    <h1>Daily Box Office</h1>
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
    async getData(targetDt) {
      const data = await this.getBoxOfficeByDay(targetDt);
      this.list = data.boxOfficeResult.dailyBoxOfficeList;
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