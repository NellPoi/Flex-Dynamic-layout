window.onload = function () {
    console.info("Loaded Script Successful")
}

function onchange_Style_flexDirection() {
    let select = document.querySelector("#select_flex-direction")
    document.querySelector(".flex_table").style.flexDirection = select.value
    console.info("flex-direction:", select.value)
}

function onchange_Style_flexWarp() {
    let select = document.querySelector("#select_flex-warp")
    document.querySelector(".flex_table").style.flexWrap = select.value;
    console.info("flex-warp:", select.value)
}

function test_Debug() {
    console.debug(Date(), "| 您正在调用内建函数调试功能")
    document.querySelector(".flex_table").style.flexWrap = "warp"
    document.querySelector(".flex_table").style.flexWrap="wrap"
    document.querySelector(".flex_table").setAttribute("flex-direction","column");
}