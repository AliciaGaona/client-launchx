import http from "../http-common";

class MissionService{
    getAllMission() {
        return http.get("/missionCommander");
      }
      getMission(id) {
        return http.get(`/missionCommander/${id}`);
      }
     
}