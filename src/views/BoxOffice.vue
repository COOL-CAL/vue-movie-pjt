<template>
    <div>
        <h1>{{ title }}</h1>
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
            title: '',
            selectedDate: '',
            list: [],
            pathName: ''
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
            switch (this.pathName) {
                case 'boxOfficeByDay':
                    this.list = (await this.getBoxOfficeByDay(targetDt))
                                .boxOfficeResult.dailyBoxOfficeList;
                    break;
                case 'boxOfficeByWeek':
                    this.list = (await this.getBoxOfficeByWeek(targetDt))
                                .boxOfficeResult.weeklyBoxOfficeList;
                    break;
            }
        },
    },
    created() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        this.selectedDate = this.getOnlyDateStr(d);
        this.pathName = this.$route.name;
        switch (this.pathName) {
            case 'boxOfficeByDay':
                this.title = "Daily Box Office";
                break;
            case 'boxOfficeByWeek':
                this.title = "Weekly Box Office";
                break;
        }
    },
    updated() {
        this.pathName = this.$route.name;
        switch (this.pathName) {
            case 'boxOfficeByDay':
                this.title = "Daily Box Office";
                break;
            case 'boxOfficeByWeek':
                this.title = "Weekly Box Office";
                break;
        }
    }
}
</script>

<style>
</style>