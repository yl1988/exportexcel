<template>
  <div id="app">
<!--    <hellow></hellow>-->
<!--    <router-view></router-view>-->
<!--    <button @click="exportExcel" >导出</button>-->
<!--    <button @click="exportOnlieExcel">导出在线表格</button>-->
<!--    <table id="table">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <td>序号</td>-->
<!--        <td>事件</td>-->
<!--        <td>头像</td>-->
<!--        <td>头像2</td>-->
<!--        <td>头像3</td>-->
<!--        <td>头像4</td>-->
<!--        <td>头像5</td>-->
<!--        <td>头像6</td>-->
<!--        <td>头像7</td>-->
<!--        <td>头像8</td>-->
<!--        <td>头像9</td>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="(item,index) in imgList" :key="index">-->
<!--        <td >{{item.id}}</td>-->
<!--        <td >{{item.time}}</td>-->
<!--        <td >{{item.img}}</td>-->
<!--        <td >{{item.img2}}</td>-->
<!--        <td >{{item.img3}}</td>-->
<!--        <td >{{item.img4}}</td>-->
<!--        <td >{{item.img5}}</td>-->
<!--        <td >{{item.img6}}</td>-->
<!--        <td >{{item.img7}}</td>-->
<!--        <td >{{item.img8}}</td>-->
<!--        <td >{{item.img9}}</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--    <div>-->
<!--      <ul :class="['animationClose','animationOpen'][type]" :style="{height:containHeight+'px'}">-->
<!--        <li v-for="(item,index) in imgList" :key="index">{{item.time}}</li>-->
<!--      </ul>-->
<!--      <button @click="togetherShow">切换</button>-->
<!--    </div>-->
<!--    <button @click="click">{{btn}}</button>-->
<!--    <div class="animationTest" :style="{height:height+'px',opacity}">{{text}}</div>-->
    <router-link to="/mkf">麦克风</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
    import {export_json_to_excel,export_table_to_excel} from './assets/exportExcel'
    // import Hellow from "@/components/hellow";
    export default {
      // components: {Hellow},
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
                ],
              containHeight:100,
              isOpen:0,
              defaultContainHeight:300,
              type:null,
              maxContainHeight:1000,
              head:null,
              defaultHeight:300,
              height:0,
              btn:'展开',
              pageHeight:1000,
              text:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
              opacity:0,
              userInfo:{}
            }
        },
      mounted() {
        // let head=document.querySelector('head')
        // console.log(head)
        // this.head=head
        this.height=this.defaultHeight
        this.userInfo.name='张三'
        setTimeout(()=>{
          this.opacity=1
        },500)

        navigator.mediaDevices.getUserMedia({audio: true,}).then(mediaStream=>{
          console.log(mediaStream)
        })



      },
      methods:{
        click(){
          console.log('ddddddddddddddddd')
          this.isOpen=this.isOpen ? 0 : 1
          this.height=[300,this.pageHeight][this.isOpen]
          this.btn=['展开','收缩'][this.isOpen]
          console.log(this.height)
        },
        togetherShow(){
          let {isOpen,maxContainHeight,head}=this
          console.log(head)
          let oldStyle=head.querySelector('#animationStyle')
          oldStyle && (head.removeChild(oldStyle))
          this.isOpen=!isOpen
          let type=this.isOpen ? 1 : 0
          this.type=type
          let animationCssName=['animationClose','animationOpen'][type]
          let keyFrames= `
            @keyframes ${animationCssName} {
              from{
                height:${[maxContainHeight,100][type]}px
              }
              to{
                height:${[100,maxContainHeight][type]}px
              }
            }
          `
          let style=document.createElement('style')
          style.setAttribute('id','animationStyle')
          style.setAttribute('type','text/css')
          style.innerHTML=keyFrames
          head.appendChild(style)
          setTimeout(()=>{
            this.containHeight=[100,maxContainHeight][this.type]
            console.log(this.containHeight)
            this.type=null
            head.removeChild(style)
          },1000)

        },

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
        },
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
  .animationOpen{
    animation: animationOpen 1s forwards;
  }
  .animationClose{
    animation: animationClose 1s forwards;
  }
  //@keyframes animationOpen {
  //  from{
  //    height:100px
  //  }
  //  to{
  //    height:500px
  //  }
  //}
  //@keyframes animationClose {
  //  from{
  //    height:500px
  //  }
  //  to{
  //    height:100px
  //  }
  //}
  .animationTest{
    width:200px;
    transition: all 0.5s ease;
    border:solid 1px red;
  }
</style>
