<template>
  <div>
    <h1>Weekly Box Office</h1>
    <div>
      <input type="date" v-model="selectedDate">
      <button @click="search">Search</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>순위</th>
          <th>제목</th>
          <th>개봉일</th>
          <th>누적관객수</th>
          <th>누적매출액</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.movieCd">
          <td>{{ item.rank }}</td>
          <td>{{ item.movieNm }}</td>
          <td>{{ item.openDt }}</td>
          <td>{{ item.audiAcc }}</td>
          <td>{{ item.salesAcc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: '',
      list: []
    }
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