function rem(size){
    var el = document.documentElement;
    var wid = document.documentElement.clientWidth;
    if (size>750) {
        el.style.fontSize = '100px'
    } else {
        el.style.fontSize = wid*100/size + 'px'
    }
}
export default rem