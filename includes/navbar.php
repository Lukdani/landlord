<nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand hideOnLarge" href="#"><img class="brand" src="./images/brand.png" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a id="brandImageLink" class="navbar-brand hideOnSmall" href="#">
            <img id="brandImage" class="brand shown" src="./images/brand.png" />
            <img id="brandImageHovered" class="brand" src="./images/brand_hovered.png" />
        </a>

        <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
                <a class="nav-link" href="#">Lejligheder <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Udlejere</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Om Landlord.dk</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user"></i><span style="margin-left: .25rem">Jens Antonsen</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#"><i class="fas fa-save"></i>Se gemte lejligheder</a>
                    <a class="dropdown-item" href="#"><i class="fas fa-envelope"></i>Beskeder</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt"></i>Log ud</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
<script>
var image = document.querySelector("#brandImage");
var imageHovered = document.querySelector("#brandImageHovered")
var brandImageLink = document.querySelector("#brandImageLink");

brandImageLink.addEventListener("mouseenter", () => {
    console.log("hovered")
    image.classList.toggle("shown");
    imageHovered.classList.toggle("shown");

});
brandImageLink.addEventListener("mouseleave", () => {
    image.classList.toggle("shown");
    imageHovered.classList.toggle("shown");
});
</script>