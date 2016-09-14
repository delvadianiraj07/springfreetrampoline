<section class="clearfix news-letter text-center white">
	<div class="container">
		<h3 class="animated transparent">Sign up to get the latest news</h3>
		<div class="clearfix animated transparent" id="newsForm">
			<form>
				<i class="fa fa-envelope"></i>
				<div class="input-wrap">
					<input type="text" name="fname" placeholder="First Name">
				</div>
				<div class="input-wrap">
					<input type="text" name="lname" placeholder="Last Name">
				</div>
				<div class="input-wrap">
					<input type="email" name="email" placeholder="Email">
				</div>
				<input type="submit" name="submit" value="join" class="btn btn-submit">
			</form>
		</div>
	</div>
</section>
<footer class="footer clearfix text-center">
	<div class="container-fluid">
		<div class="clearfix social transparent animated">
			<a href="#" class="fa fa-facebook"></a>
			<a href="#" class="fa fa-twitter"></a>
			<a href="#" class="fa fa-vimeo"></a>
			<a href="#" class="fa fa-instagram"></a>
			<a href="#" class="fa fa-pinterest-p"></a>
		</div>
		<ul class="clearfix transparent animated" id="foonNav">
			<li><a href="#">Support</a></li>
			<li><a href="#">Find a Store</a></li>
			<li><a href="#">About Us</a></li>
			<li><a href="#">Blog</a></li>
			<li><a href="#">Media/News</a></li>
			<li><a href="#">Privacy Policy & Terms</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</div>
	<div class="clearfix container-fluid copyright">
		<ul class="clearfix transparent animated" id="copyright">
			<li>©Tgoma® 2016</li>
			<li><a href="#">Terms & Conditions</a></li>
			<li><a href="#">Privacy Policy</a></li>
			<li>Designed & developed by Weave</li>
		</ul>
	</div>
</footer>
<!-- footer Ends -->
<!-- JS Files -->
<script type="text/javascript" src="js/modernizr.min.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- JS Plugins -->
<script type="text/javascript" src="js/jquery.waypoints.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fitvids/1.1.0/jquery.fitvids.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/jquery.bxslider.min.js"></script>
<script type="text/javascript" src="js/owl.carousel.min.js"></script>
<script src="js/owl.js"></script>
<script type="text/javascript" src="js/vnav.js"></script>
<script type="text/javascript" src="js/timeline.js"></script>
<script type="text/javascript" src="js/skrollr.js"></script>
<script type="text/javascript" src="js/ilightbox.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script> (function() { var v = document.getElementsByClassName("youtube-player"); for (var n = 0; n < v.length; n++) { v[n].onclick = function () { var iframe = document.createElement("iframe"); iframe.setAttribute("src", "//www.youtube.com/embed/" + this.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel="+ this.dataset.related +"&controls="+this.dataset.control+"&showinfo=" + this.dataset.info); iframe.setAttribute("frameborder", "0"); iframe.setAttribute("id", "youtube-iframe"); iframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"); if (this.dataset.fullscreen == 1){ iframe.setAttribute("allowfullscreen", ""); } while (this.firstChild) { this.removeChild(this.firstChild); } this.appendChild(iframe); }; } })(); </script>
</body>
</html>