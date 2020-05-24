<template>
  <div id="app">
    <button @click="exportExcel">导出</button>
    <button @click="exportOnlieExcel">导出在线表格</button>
    <table id="table">
      <thead>
      <tr>
        <td>序号</td>
        <td>事件</td>
        <td>头像</td>
        <td>头像2</td>
        <td>头像3</td>
        <td>头像4</td>
        <td>头像5</td>
        <td>头像6</td>
        <td>头像7</td>
        <td>头像8</td>
        <td>头像9</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in imgList" :key="index">
        <td >{{item.id}}</td>
        <td >{{item.time}}</td>
        <td >{{item.img}}</td>
        <td >{{item.img2}}</td>
        <td >{{item.img3}}</td>
        <td >{{item.img4}}</td>
        <td >{{item.img5}}</td>
        <td >{{item.img6}}</td>
        <td >{{item.img7}}</td>
        <td >{{item.img8}}</td>
        <td >{{item.img9}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
    import {export_json_to_excel,export_table_to_excel} from './assets/exportExcel'
    export default {
        data(){
            return{
                imgList:[
                    {
                        id:'8998392393923849234',
                        time:'2020-05',
                        img:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img2:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img3:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img4:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img5:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img6:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img7:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img8:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                    },
                    {
                        id:'8998392393923849234',
                        time:'2020-05',
                        img2:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img3:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img4:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img5:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img6:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                    },
                    {
                        id:'8998392393923849234',
                        time:'2020/05/26',
                        img2:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img3:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img4:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img5:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img6:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                    },
                    {
                        id:'89983923939232345234532849234',
                        time:'2020/05',
                        img2:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img3:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img5:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img6:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                    }, {
                        id:'89983923939238243532452349234',
                        time:'2020-05',
                        img2:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img3:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img4:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img5:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img6:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                    }, {
                        id:'899839239392345324523453849234',
                        time:'2020-05',
                        img2:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img3:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                        img4:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                    }, {
                        id:'899839239392384934523542352352353234',
                        time:'2020-05-03',
                        img:'http://www.baidu.com?id=xxxdddddddddddddddddddddd',
                        name:'历史'
                    },
                ]
            }
        },
        methods:{
            // 导出表格（基于json数据）
            exportExcel() {
                const tHeader = ["序号", "日期", "图片地址"];// 设置Excel的表格第一行的标题
                const filterVal = ["id", "time", "img"]; // 标题对应的tableData里对象的属性字段
                const data = this.imgList.map(v => filterVal.map(j => v[j]))
                export_json_to_excel(tHeader, data, "工资表");   //三个参数：标题，数据，文件名
            },
            // 导出table由标签数据生成的表格
            exportOnlieExcel(){
                export_table_to_excel('table','工资表')//两个参数：数据，文件名
            }
        }
    }
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
