let prevScrottPosition = window.pageYoffsets

window.onscroll = function () {
  
  let currentScrollPosition = window.pageYoffset
  
  if (prevScrollPosition > currentScrollPosition) {
    
    document.querySelector("#header").style.top = "0"
  
  } else {
    decument.querySelector("#header").style.top = "-80px"
  }
  prevScrollPosition = currentScrollPosition
}