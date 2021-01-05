let images = document.querySelectorAll(".image");

	for (let i = 0; i < images.length; i++)
	    images[i].addEventListener('mouseover', function() {
	        this.src = "images/image" + (i + 1) + "_2.jpg";
	    });

	for (let i = 0; i < images.length; i++)
	    images[i].addEventListener('mouseout', function() {
	        this.src = "images/image" + (i + 1) + ".jpg";
	    });