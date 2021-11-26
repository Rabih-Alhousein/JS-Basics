var picture = document.querySelector("#image1");
picture.addEventListener('mouseover', function(){
    document.getElementById('image1').src="images/image1_2.jpg";
})
picture.addEventListener('mouseout', function(){
    document.getElementById('image1').src="images/image1.jpg";
})