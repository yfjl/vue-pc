<template>
  <div>
    <Select v-model="model1" style="width:200px" placeholder="请选择城市" @on-change="change">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <br>
    <div  style=" padding:10px 0;" >已选择城市：<span style="color:red;">{{model1}} </span></div>
   
    <ul class="ul" v-for="(item,index) of datas" :key="index">
      <li>日期：{{item.date}}</li>
      <li>最高温度：{{item.high}}</li>
      <li>最低温度：{{item.low}}</li>
      <li>风向：{{item.fengxiang}}</li>
      <li>天气：{{item.type}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      datas: null,
      cityList: [
        {
          value: "合肥",
          label: "合肥"
        },
        {
          value: "北京",
          label: "北京"
        },
        {
          value: "上海",
          label: "上海"
        },
        {
          value: "天津",
          label: "天津"
        },
        {
          value: "宿州",
          label: "宿州"
        },
        {
          value: "萧县",
          label: "萧县"
        }
      ],
      model1: "合肥"
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let { data } = await this.$api.getWeather({ city: this.model1 });
      this.datas = data.forecast;
    },
    change(city){
      this.model1 = city
      this.init();
    }
  }
};
</script>



<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0px;
}
.ul {
  border: 1px solid rgb(221, 220, 220);
  display: inline-block;
  padding: 0 50px;
  border-radius: 5px;
  margin-right: 10px;
  li {
    list-style: none;
    height: 30px;
    line-height: 30px;
  }
}
</style>


