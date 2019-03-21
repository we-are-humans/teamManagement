<template>
    <div class="box">
      <cpm-left :data="menuInfo" @appe="appe" @appear="appear" @rename="rename"></cpm-left>
      <div class="right" :is="isshow" :data="menuInfo" :isview="isview"></div>
    </div>
</template>

<script>
    import Dairy from "../components/cmsPublic/header/dairy";
    import Password from "../components/cmsPublic/header/password";
    import PersonInfo from "../components/cmsPublic/header/personInfo";
    import data from "../../static/json/menu";
    import CpmLeft from "../components/cmsPublic/left/cpmLeft";
    import CpmRight01 from "./guanLi/cpmRight01";
    import CpmRight10 from "./shangPin/cpmRight10";
    import CpmRight11 from "./shangPin/cpmRight11";
    import CpmRight12 from "./shangPin/cpmRight12";
    import CpmRight13 from "./shangPin/cpmRight13";
    import CpmRight14 from "./shangPin/cpmRight14";
    import CpmRight15 from "./shangPin/cpmRight15";
    import CpmRight16 from "./shangPin/cpmRight16";
    import CpmRight20 from "./wenZhang/cpmRight20";
    import CpmRight21 from "./wenZhang/cpmRight21";
    import CpmRight22 from "./wenZhang/cpmRight22";
    import CpmRight23 from "./wenZhang/cpmRight23";
    import CpmRight24 from "./wenZhang/cpmRight24";
    import CpmRight30 from "./dingDan/cpmRight30";
    import CpmRight31 from "./dingDan/cpmRight31";
    import CpmRight32 from "./dingDan/cpmRight32";
    import CpmRight33 from "./dingDan/cpmRight33";
    import CpmRight40 from "./huiYuan/cpmRight40";
    import CpmRight41 from "./huiYuan/cpmRight41";
    import CpmRight42 from "./huiYuan/cpmRight42";
    import CpmRight50 from "./guangGao/cpmRight50";
    import CpmRight51 from "./guangGao/cpmRight51";
    import CpmRight60 from "./zhuanTi/cpmRight60";
    import CpmRight61 from "./zhuanTi/cpmRight61";
    import CpmRight70 from "./tongJi/cpmRight70";
    import CpmRight71 from "./tongJi/cpmRight71";
    import CpmRight80 from "./lianJie/cpmRight80";
    import CpmRight81 from "./lianJie/cpmRight81";
    import CpmRight90 from "./xiTong/cpmRight90";
    import CpmRight91 from "./xiTong/cpmRight91";
    import CpmRight92 from "./xiTong/cpmRight92";
    import CpmRight93 from "./xiTong/cpmRight93";
    import CpmRight94 from "./xiTong/cpmRight94";
    import CpmRight95 from "./xiTong/cpmRight95";
    import CpmRight96 from "./xiTong/cpmRight96";
    import CpmRight97 from "./xiTong/cpmRight97";
    export default {
        name: "cpmBox",
      components: { CpmRight01,
        CpmRight10, CpmRight11,CpmRight12,CpmRight13,CpmRight14,CpmRight15,CpmRight16,
        CpmRight20, CpmRight21,CpmRight22,CpmRight23,CpmRight24,
        CpmRight30, CpmRight31,CpmRight32,CpmRight33,
        CpmRight40, CpmRight41,CpmRight42,
        CpmRight50, CpmRight51,
        CpmRight60, CpmRight61,
        CpmRight70, CpmRight71,
        CpmRight80, CpmRight81,
        CpmRight90, CpmRight91, CpmRight92, CpmRight93, CpmRight94, CpmRight95, CpmRight96, CpmRight97,
        Dairy, Password, PersonInfo,
        CpmLeft},
      props:["father"],
      data(){
        return{
          menuInfo: '',
          isshow:"cpmRight01",
          isview:""
        }
      },
      mounted(){
        this.menuInfo = data.list;
        // this.isshow = "father"
      },
      methods: {
        appear(name){
          this.isshow = name;
        },
        appe(mingzi){
          this.isshow = mingzi;
        },
        rename(view){
          this.isview = view;
        }
      }
    }
</script>

<style scoped>
  .box{
    display: flex;
    flex: 1;
  }
</style>
