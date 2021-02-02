window.onload = function () {
    console.info("Loaded Script Successful")
}

function interface_OptionSync_flexFlow(v1,v2){
    // let direction=document.getElementById("")
    console.log(v1)
}

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

}

function onchange_Style_flexFlow_Wrap() {

}

function test_Debug() {
    console.debug(Date(), "| 正在调用内建函数调试功能")

}