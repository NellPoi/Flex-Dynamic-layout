window.onload = function () {
    console.info("Loaded Script Successful")
}

// function interface_OptionSync_flexFlow(v1, v2) {
//     // let direction=document.getElementById("")
//
// }

function onchange_Style_flexDirection() {
    let select = document.querySelector("#select_flex-direction")
    document.querySelector(".flex_table").style.flexDirection = select.value
    // 镜像传递参数给对应接口
    document.querySelector("#select_flex-flow_direction")[select.selectedIndex].selected = true
}

function onchange_Style_flexWrap() {
    let select = document.querySelector("#select_flex-wrap")
    document.querySelector(".flex_table").style.flexWrap = select.value;
    document.querySelector("#select_flex-flow_wrap")[select.selectedIndex].selected = true;
}

function onchange_Style_flexFlow_Direction() {
    let self=document.querySelector("#select_flex-flow_direction")
    let partner=document.querySelector("#select_flex-flow_wrap")
    let v1=self.value
    let v2=partner.value
    document.querySelector("#select_flex-direction").selectedIndex=self.selectedIndex
    document.querySelector(".flex_table").style.flexFlow=v1+" "+v2
}

function onchange_Style_flexFlow_Wrap() {
    let self=document.querySelector("#select_flex-flow_wrap")
    let partner=document.querySelector("#select_flex-flow_direction")
    let v1=self.value
    let v2=partner.value
    document.querySelector("#select_flex-wrap").selectedIndex=self.selectedIndex
    document.querySelector(".flex_table").style.flexFlow=v1+" "+v2
}
function oninput_Count(){

    let value=document.querySelector("#range_Count").value

    let element=document.createElement("div")
    for(let i=1;i<=value;i++){
        document.querySelector(".flex_table").appendChild(element)
        element.innerText=i.toString()
    }
}
// function onclick_RemoveAll(){
//     let obj=document.querySelector(".flex_table")
//     obj.parentNode.removeChild(obj)
// }
function test_Debug() {
}