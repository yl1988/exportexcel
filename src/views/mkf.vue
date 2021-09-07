<template>
  <div>
    <button @click="readyOriginal">{{isVoice ? '停止' : '录音'}}</button>
    <audio id="myAudi" controls></audio>
    <audio :src="myAodu" controls></audio>
    <div>{{msg}}</div>
  </div>
</template>
<script>
import {HZRecorder} from "@/components/mkf";

let audio_context
let recorder
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      audio_context:null,
      recorder:null,
      myAodu:'',
      isVoice:false,
      msg:''
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      try {
        // <!-- 检查是否能够调用麦克风 -->
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
        window.URL = window.URL || window.webkitURL;

        audio_context = new AudioContext;
        console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
        this.msg='navigator.getUserMedia ' + (navigator.mediaDevices ? 'available.' : 'not present!')
      } catch (e) {
        this.msg='No web audio support in this browser!'
        alert('No web audio support in this browser!');
      }
      // navigator.getUserMedia ( { audio: true, video: true }, (res=>{
      //   console.log(res)
      // }), err=>{
      //   console.log(err)
      // } )
      navigator.getUserMedia({audio: true},  (stream)=> {
        recorder = new HZRecorder(stream)
        console.log('初始化完成');
        this.msg="初始化完成"

      }, function(e) {
        console.log('No live audio input: ' + e);
      });
      // navigator.mediaDevices.getUserMedia({audio: true,video:true})
      //     .then((stream)=> {
      //       /* 使用这个stream stream */
      //       console.log(stream)
      //       this.msg=JSON.stringify(stream)
      //     }).catch(err=>{
      //       console.log(err)
      //   this.msg=JSON.stringify(err)
      // })
    })
  },
  methods:{
    readyOriginal () {
      if (!this.isVoice) {
        // <!-- 开启录音 -->
        recorder && recorder.start();
        this.isVoice = true
      } else {
        this.isVoice = false
        // <!-- 结束录音 -->
        recorder && recorder.stop();
        setTimeout(()=> {
          // <!-- 录音上传 -->
          var mp3Blob = recorder.upload();
          var fd = new FormData();
          fd.append('audio', mp3Blob);
          let autoSrc=window.URL.createObjectURL(recorder.getBlob())
          this.myAodu=autoSrc
          recorder.play( document.getElementById('myAudi'))
          this.msg=autoSrc
        },1000)
      }
    },
  },
  watch: {}
}
</script>
<style lang="less" scoped type="text/less">
</style>
