<template>
  <div style="padding-top: 200px;height: 100%;">
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
      <button @click="button">点击选择区域</button>
      <p>{{provinceValue ? provinceValue : '请选择'}}-{{cityValue ? cityValue : '请选择'}}-{{areaValue ? areaValue : '请选择'}}</p>
    </div>
    <mt-popup v-model="popupVisible4" position="bottom" class="popup">
      <mt-picker :slots="provinceSlots" @change="provinceChange" class="picker"></mt-picker>
      <mt-picker :slots="citySlots" @change="cityChange" class="picker"></mt-picker>
      <mt-picker :slots="areaSlots" @change="areaChange" class="picker"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {CITY_DATA} from '../api/city'
  export default {
    data () {
      return {
        popupVisible4:false,
        provinceSlots:[
          {
//            values:this.getProvince()  //页面mounted完毕就加载数据
            values:[]
          }
        ],
        citySlots:[
          {
            values:[]
          }
        ],
        areaSlots:[
          {
            values:[]
          }
        ],
        flag:0,//解决mounted完毕不存在数据所有values找不到，会报错的问题，用一个标识控制。
        provinceValue:'',
        cityValue:'',
        areaValue:'',
      }
    },
    watch:{
      provinceValue(v){
        this.citySlots[0].values = this.city
      },
      cityValue(v){
        this.areaSlots[0].values = this.area
      }
    },
    computed:{
      city(){
        let city = {}
        let cityAll = []
        for (var i in CITY_DATA){
          if (this.provinceValue == CITY_DATA[i].name){
            city = CITY_DATA[i].city
          }
        }
        for (var i in city){
          cityAll.push(city[i].name)
        }
        return cityAll
      },
      area(){
        let city = {}
        let area = {}
        for (var i in CITY_DATA){
          if (this.provinceValue == CITY_DATA[i].name){
            city = CITY_DATA[i].city
          }
        }
        for (var k in city){
          if(this.cityValue == city[k].name){
            area = city[k].area
          }
        }
        return area
      }
    },
    mounted(){

    },
    created(){

    },
    methods:{
      button(){
        this.popupVisible4 = true
        this.getProvince()
        this.flag = 1
      },
      provinceChange(picker,values){
        if (this.flag == 0){
          return
        }
        this.provinceValue = values[0]
      },
      cityChange(picker,values){
        if (this.flag == 0){
          return
        }
        this.cityValue = values[0]
      },
      areaChange(picker,values){
        if (this.flag == 0){
          return
        }
        this.areaValue = values[0]
      },
      getProvince(){
        let pros = []
        for (var i in CITY_DATA){
          pros.push(CITY_DATA[i].name)
        }
//        return pros //页面mounted完毕就加载
        this.provinceSlots[0].values = pros
      },
    }
  }
</script>
<style scoped>
  button {
    color:#FFF;
    font-size:16px;
    outline:none;
    width:300px;
    height:48px;
    background:#26A1D9;
    border:none;
    -webkit-border-radius:5px;
    border-radius:5px;
  }
  button:active{
    outline:none;
    background:#208FC1;
    /*执行动画*/
    -webkit-animation:showBtn 0.5s 1;
    animation:showBtn 0.5s 1;
    /*停止在最后一帧*/
    -webkit-animation-fill-mode:forwards;
    animation-fill-mode:forwards;
  }
  /*
  定义动画
  */
  @-webkit-keyframes showBtn{ 10%{
    background:-webkit-radial-gradient(Circle,#1E7AA5 28%, #2287B7 30%, #2287B7 48%,#208FC1 60%);
    background:radial-gradient(Circle,#1E7AA5 28%, #2287B7 30%, #2287B7 48%,#208FC1 60%);
  } 20%{
    background:-webkit-radial-gradient(Circle,#1E7AA5 32%, #2287B7 34%, #2287B7 52%,#208FC1 60%);
    background:radial-gradient(Circle,#1E7AA5 32%, #2287B7 34%, #2287B7 52%,#208FC1 60%);
  } 40%{
    background:-webkit-radial-gradient(Circle,#1E7AA5 34%, #2287B7 36%, #2287B7 54%,#208FC1 60%);
    background:radial-gradient(Circle,#1E7AA5 34%, #2287B7 36%, #2287B7 54%,#208FC1 60%);
  } 60%{
    background:-webkit-radial-gradient(Circle,#1E7AA5 36%, #2287B7 38%, #2287B7 56%,#208FC1 60%);
    background:radial-gradient(Circle,#1E7AA5 36%, #2287B7 38%, #2287B7 56%,#208FC1 60%);
  } 80%{
    background:-webkit-radial-gradient(Circle,#1E7AA5 38%, #2287B7 40%, #2287B7 58%,#208FC1 60%);
    background:radial-gradient(Circle,#1E7AA5 38%, #2287B7 40%, #2287B7 58%,#208FC1 60%);
  } 100%{
    background:-webkit-radial-gradient(Circle,#1E7AA5 40%, #2287B7 42%, #2287B7 60%,#208FC1 60%);
    background:radial-gradient(Circle,#1E7AA5 40%, #2287B7 42%, #2287B7 60%,#208FC1 60%);
  }
  }
  .popup{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:200px;
    overflow: hidden;
  }
  .popup .picker{
    width: 33.3%;
  }
</style>
