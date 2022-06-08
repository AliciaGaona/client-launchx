<template>
    <div class="list row">
        <h4> Mission Comander</h4>z
        <ul class="list-group">
           <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(mission, index) in missions"
          :key="index"
          
        >
          {{ mission.name }}
        </li>
        </ul>
    </div>
</template>

<script>
import MissionService from "../services/MissionService";

export default{
    name: "missionC-list",
     data() {
    return {
   
    mission: [],
    currentMission: null
     
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
} ,

mounted() {
    this.getAllMission();
  }
};
</script>