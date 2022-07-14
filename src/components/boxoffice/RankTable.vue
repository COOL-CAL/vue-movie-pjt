<template>
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
            <RankRow v-for="item in list" :key="item.movieCd" :item="item"></RankRow>

        <!-- <tr v-for="item in list" :key="item.movieCd">
            <td>{{ item.rank }}</td>
            <td>{{ item.movieNm }}</td>
            <td>{{ item.openDt }}</td>
            <td>{{ item.audiAcc }}</td>
            <td>{{ item.salesAcc }}</td>
        </tr> -->
        </tbody>
    </table>
</template>

<script>
import RankRow from './RankRow';

export default {
    props: {
        list: Array
    },
    components: {
        RankRow
    }
}
</script>

<style>

</style>