<template>
  <div class="AreaSelection">
    <div class="jumbotron">
      <autocomplete
        url="http://www.baswaratech.com/proxy.php?csurl=http://52.76.85.10/test/location.json"
        anchor="area"
        label="city"
        placeholder="Search area..."
        :onShouldGetData="getData"
        :on-select="getData">
      </autocomplete>
    </div>
    <router-link class="btn btn-primary btn-lg" to="/doctorList">Find Doctor</router-link>
  </div>
</template>

<script>
import Autocomplete from 'vue2-autocomplete-js';

export default {
  name: 'AreaSelection',
  components: { Autocomplete },
  data () {
    return {
      location: []
    }
  },
  methods: {
    getData(key){
      return new Promise((resolve, reject) => {
          this.$http.get('http://www.baswaratech.com/proxy.php?csurl=http://52.76.85.10/test/location.json')
        .then(response => {
          var location = response.body
          var locationFilter = []
          for(var i = 0 ; i < location.length ; i++){
            if(location[i].area.toLowerCase().startsWith(key.toLowerCase())){
              locationFilter.push(location[i])
            }
          }
          resolve(locationFilter)
        });
      })
    }
  }
  // mounted(){
  //     this.$http.get('http://www.baswaratech.com/proxy.php?csurl=http://52.76.85.10/test/location.json')
  //   .then(response => {
  //     this.location=response.body
  //   });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ul {
  list-style-type: none;
  padding-top: 20px;
}
.autocomplete-input{
  width: 100%;
}
.btn{
  float: right;
}
</style>
