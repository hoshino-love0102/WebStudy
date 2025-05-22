let isChanged = false;

function changeText() {
  const textElement = document.getElementById("titleText");
  
  if (isChanged) {
    textElement.innerText = "안녕하세요!";
  } else {
    textElement.innerText = "반갑습니다!";
  }

  isChanged = !isChanged;
}

function changeImg() {
  document.getElementById("myImg").src = "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/14Fa/image/joib7vCDm4iIP7rNJR2ojev0A20.jpg";
}

function resetImg() {
  document.getElementById("myImg").src = "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg";
}
