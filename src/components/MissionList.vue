<template>
    <div class="list row">
        <h4> Mission Comander</h4>z
        <ul class="list-group">
           
        </ul>
    </div>
</template>

<script>
import MissionService from "../services/MissionService";

export default{
    name: "missionC-list",
     data() {
    return {
   
      mission: []
     
    };
  },
    methods: {
    getAllMission(){
         MissionService.getAllMission()
        .then(response => {
          this.mission = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
} 
}
</script>