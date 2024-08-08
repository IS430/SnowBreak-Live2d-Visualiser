"use strict";
let boneScale = 0.38;
let current_spine = "";



let activeid, activeSpineVersion;
let premultipliedAlphaValue = false;

const change_spine = (id, assetSpineVersion) => {

    // if (current_spine !== ""){
    //     current_spine.dispose();
    // }

    activeid = id
    activeSpineVersion = assetSpineVersion

    let runtimeSpineVersion;


    runtimeSpineVersion = spine
    let root=document.querySelector(":root")
    console.log(getComputedStyle(root).getPropertyValue("--alt-dark-theme"))
    let bgColor = getComputedStyle(root).getPropertyValue("--alt-dark-theme")

    document.getElementById("player-container").innerHTML = "";
    current_spine = new runtimeSpineVersion.SpinePlayer("player-container", {
        jsonUrl: "assets/" + id + "/" + id + ".json",
        // skelUrl: "/assets/" + id + "/" + id + ".skel",
        atlasUrl: "assets/" + id + "/" + id + ".atlas",
        // alpha: true,
        backgroundColor: bgColor,
        // backgroundColor:"#00000000",

        premultipliedAlpha:  premultipliedAlphaValue,
        preserveDrawingBuffer:true,
        success: function (player) {
            player.play();
         }
    });
    console.log(premultipliedAlphaValue)
    console.log(current_spine)

    document.querySelector(".spine-player-canvas").width = window.screen.width*2;
    document.querySelector(".spine-player-canvas").height = window.screen.height*2;
    document.querySelector(".spine-player-canvas").style ="transform: scale("+boneScale+"); position: absolute; "

    // document.querySelector(".spine-player-canvas").style.width = null
    document.querySelector(".spine-player-canvas").style.display = "inline"
}

const reloadSpine = () => {
    change_spine(activeid, activeSpineVersion)
}
