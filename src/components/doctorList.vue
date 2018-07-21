<template>
  <div class="doctorList">
    <div class="container">
      <ul class="media-list">
        <li class="media" v-for="(doctor,idx) in datalist" :key="idx">
          <div class="media-left">
            <router-link :to="{name: 'doctorDetail', params: {id: doctor.id}}"><img class="media-object" v-bind:src="doctor.photo"></router-link>
          </div>
          <div class="media-body">
            <router-link :to="{name: 'doctorDetail', params: {id: doctor.id}}"><h4 class="media-heading"><a v-bind:href="doctor.id">{{doctor.name}}</a></h4></router-link>
            <h5><i>at {{doctor.area}}</i></h5>
            <p>{{doctor.speciality}}</p>
            <p>{{doctor.currency}} {{doctor.rate}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doctorList',
  props: ['source'],
  data () {
    return {
      datalist: [],
      doctor: ""
    }
  },
  mounted(){
      this.$http.get('http://www.baswaratech.com/proxy.php?csurl=http://52.76.85.10/test/datalist.json')
    .then(response => {
      this.datalist=response.body
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .media-object {
    width: 128px;
    padding: 10px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
</style>