"use strict";
class team {
    constructor(teamname = "Example teamname", trainer = "Example trainer", roster = []) {
        this.teamname = teamname;
        this.trainer = trainer;
        this.roster = roster;
    }

    describe() {
        return ` team ${this.team} with trainer ${this.trainer} has the following ${[...this.roster]}`
    }
}

export default team;