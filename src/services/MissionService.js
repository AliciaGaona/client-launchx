import http from "../http-common";

class MissionService{
    getAll() {
        return http.get("/missionCommander");
      }
     
}