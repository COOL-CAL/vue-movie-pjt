import axios from 'axios';

export default {
    data() {
        return {
            key: '1a0a7ecf96ad3364d8de70e91560767a',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
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
        getOnlyDateStr(date) {
            // const d = new Date(date);
            return date.toISOString().split('T')[0];
        }
    }
}