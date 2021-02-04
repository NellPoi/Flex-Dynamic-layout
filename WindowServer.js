function disabledSelect() {
    document.body.addEventListener("mousedown", function () {
        window.getSelection().removeAllRanges()  // 去掉所有选中范围，也就是禁止选择内容
    })
}

window.onload = () => {
    //获取拖拽实验对象
    let form = document.querySelector("section")
    let debug_ContentMessage
    //在该对象上绑定鼠标点击事件
    form.onmousedown = (e) => {
        //鼠标按下，计算鼠标触点距离元素左侧和顶部的距离
        let disX = e.clientX - form.offsetLeft
        let disY = e.clientY - form.offsetTop
        document.onmousemove = function (e) {
            disabledSelect()
            //计算需要移动的距离
            let tX = e.clientX - disX
            let tY = e.clientY - disY
            debug_ContentMessage = "tX=>" + tX + "\ntY=>" + tY
            //移动当前元素
            if (tX >= 0 && tX <= window.innerWidth - form.offsetWidth) {
                form.style.left = tX + 'px'
            }
            if (tY >= 0 && tY <= window.innerHeight - form.offsetHeight) {
                form.style.top = tY + 'px'
            }
        }
        //鼠标松开时，注销鼠标事件，停止元素拖拽。
        document.onmouseup = function (e) {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}