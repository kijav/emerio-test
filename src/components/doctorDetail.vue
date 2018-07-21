<template>
  <div class="doctorDetail">
    <div class="container">
      <div class="media">
        <div class="media-left">
          <img class="media-object" v-bind:src="profile.photo">
        </div>
        <div class="media-right">
          <h2>{{profile.recommendation}}</h2>
          <h4>Recommendation</h4>
          <h4>Schedule on</h4>
          <p>{{profile.schedule}}</p>
        </div>
      </div>
      <div class="media-body">
        <h2 class="media-heading">{{profile.name}}</h2>
        <h4>{{profile.area}}</h4>
        <h4>{{profile.speciality}}</h4>
        <h4>{{profile.currency}} {{profile.rate}}</h4>
        <p>{{profile.experience}} Years experience</p>
        <p>{{profile.description}}</p>
        <div id="myMap"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doctorDetail',
  props: ['doctor'],
  data () { 
    return {
      profile: []
    }
  },
  mounted(){
  this.$http.get('http://www.baswaratech.com/proxy.php?csurl=http://52.76.85.10/test/profile/'+this.$route.params.id+'.json')
    .then(response => {
      this.profile=response.body
      this.map = new google.maps.Map(document.getElementById('myMap'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(this.profile.latitude, this.profile.longitute),
      zoom: 20
      })
    });
  }
}
</script>

<style scoped>
#myMap{
    width: 100%;
    height: 300px;
    border: 1px solid black;
}
.media-body{
  padding-top:25px;
}
.media-right{
  text-align: center;
  width: 45%;
  padding-top: 30px;
}
.media {
  padding-top: 20px;
}
</style>
