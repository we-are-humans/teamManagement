<template>
    <div class="dialog" v-if="showDialog">
      <transition name="dialog-fade">
        <div class="dialog-bg" v-if="showDialog" ></div>
      </transition>

      <transition name="dialog-show">
        <div class="dialog-box" v-if="showDialog">
          <div class="dialog-main" v-html="content"></div>
          <div class="dialog-button">
            <div class="dialog-confirm-cancel" @click="clickCancel" v-if="!hideCancle">{{cancelText || '取消'}}</div>
            <div class="dialog-confirm-button" @click="clickConfirm();delt()" v-if="!hideConfirm">{{okText || '确认'}}</div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
    export default {
      name: "cpmDeliveryComfirm",
      props: ['showDialog','content','okText','cancelText','hideConfirm','hideCancle'],

      methods:{
        clickCancel(){
          this.$emit('clickCancel');
        },
        clickConfirm(){
          this.$emit('clickConfirm');
        },
        delt(index){
          this.$emit("delt",index)
        }
      }
    }
</script>

<style scoped>

  .dialog {
    position: fixed;
    top: 0;
    left: 50%;
    width: 120px;
    height: 60px;
    z-index: 100;
    transition: all .6s;
  }

  /*.dialog-bg {*/
     /*position: absolute;*/
     /*top: 0;*/
    /*left: 0;*/
    /*width: 180px;*/
    /*height: 60px;*/
     /*background-color: rgba(0,0,0,.4);*/
   /*}*/

  .dialog-box {
    width: 280px;
    height: 60px;
     position: absolute;
     top:80%;
     left: 50%;
     -webkit-transform: translate3d(-50%,-50%,0);
     transform: translate3d(-50%,-50%,0);
     background-color: #fff;
     /*border-radius: .1rem;*/
     line-height: 1.5;
     text-align: center;
    transition: all .6s;
  }
  .dialog-main {
     padding: 7px 10px 8px;
     text-align: center;
     font-size: 14px;
     color:#333;
   }
  .dialog-button {
     overflow: hidden;
     border-top: 1px solid #EEE;
     font-size:14px;
     line-height: 14px;
     display: flex;
    padding-top: 5px;
    cursor: pointer;
   }

  .dialog-confirm-cancel{
     color: #3ba3f2;
     flex:1;
     border-right: 1px solid #EEE;
     /*margin-right: -1px;*/
  }
  .dialog-confirm-button {
    flex:1;
    color: #3ba3f2;
  }
  .dialog-show-enter-active, .dialog-fade-enter-active {
    transition: all .3s ease;
  }
  .dialog-show-leave-active, .dialog-fade-leave-active {
    transition: all .3s ease;
  }
  .dialog-show-enter, .dialog-show-leave-active {
    top: -35%;
  }
  .dialog-fade-enter, .dialog-fade-leave-active {
    opacity: 0;
  }

</style>
