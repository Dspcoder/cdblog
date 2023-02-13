import axios from 'axios';

export function getRM() {
    axios({
        url: 'api2/v1/filter/list?catid=2&size=2&pageno=1&rank=ranklatest&cat=言情&area=内地&year=2022&act=杨幂', //v1/filter/list
        method: 'get'
        // data: {
        //     catid: '2', //catid 为电影类型例如：1电影、2电视剧、3动漫、4宗亿
        //     size: '2', //返回数据多少
        //     pageno: '1', //页数
        //     rank: 'ranklatest', //最新或最热
        //     cat: '言情', //类型
        //     area: '内地', //地区
        //     year: '2022', //年代
        //     act: '杨幂' //演员
        // }
    }).then((res) => {
        console.log('@res:', res);
    });
}
