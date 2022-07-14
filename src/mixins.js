import axios from 'axios';

export default {
    data() {
        return {
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
        }
    },
    methods: {
        async $api(url, data) {
            return (await axios({
                method: 'get',
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data; // .data 앞 까지의 데이터에 대한 data.
        },
        async getBoxOfficeByDay() {
            return await this.$api(this.baseUrl + this.boxOfficeByDay, {});
        }
    }
}