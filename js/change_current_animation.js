"use strict";
let boneScale = 0.2;
let current_spine = "";
let activeid, activeSpineVersion;
let premultipliedAlphaValue = false;

const change_spine = (id, assetSpineVersion) => {

    if (current_spine !== ""){
        current_spine.dispose();
    }

    activeid = id
    activeSpineVersion = assetSpineVersion

    let runtimeSpineVersion;


    runtimeSpineVersion = spine


    document.getElementById("player-container").innerHTML = "";
    current_spine = new runtimeSpineVersion.SpinePlayer("player-container", {
        jsonUrl: "/assets/" + id + "/" + id + ".json",
        // skelUrl: "/assets/" + id + "/" + id + ".skel",
        atlasUrl: "/assets/" + id + "/" + id + ".atlas",
        backgroundColor: "2f353a",
        alpha: false,
        premultipliedAlpha:  premultipliedAlphaValue,
        preserveDrawingBuffer:true,
        success: function (player) {
            player.play();
         }
    });
    console.log(premultipliedAlphaValue)

    document.querySelector(".spine-player-canvas").width = 6000
    document.querySelector(".spine-player-canvas").height = 6000
    document.querySelector(".spine-player-canvas").style ="transform: scale("+boneScale+"); position: absolute;"

    // document.querySelector(".spine-player-canvas").style.width = null
    // document.querySelector(".spine-player-canvas").style.display = "inline"
}

const reloadSpine = () => {
    change_spine(activeid, activeSpineVersion)
}