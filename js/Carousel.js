const navleft = document.getElementById("left-side");
const handleOnNavMove = e => {
  const p = e.clientX / window.innerWidth * 100;
  navleft.style.width = `${p}%`;
}

document.onmousemove = e => handleOnNavMove (e);
document.ontouchmove = e => handleOnNavMove (e.touches[0]);