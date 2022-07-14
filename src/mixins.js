import axios from 'axios';

export default {
    data() {
        return {
            key: '71273b566543e53c34df41c45fcdbe8f',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json',
        }
    },
    methods: {
        async $api(url, param) {
            return (await axios.get(url, {
                params: param
            })
            .catch(e => {
                console.log(e);
            })).data; // .data 앞 까지의 데이터에 대한 data.
        },
        async getBoxOfficeByDay(targetDt) {
            const param = {
                key: this.key,
                targetDt
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, param);
        },
        async getBoxOfficeByWeek(targetDt) {
            const param = {
                key: this.key,
                targetDt,
                weekGb: 0
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, param);
        },
        getOnlyDateStr(date) {
            // const d = new Date(date);
            return date.toISOString().split('T')[0];
        }
    }
}