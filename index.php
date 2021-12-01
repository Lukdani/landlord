<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8" />

    <title>Landlord.dk - Lejlighedsportalen</title>

    <meta name="robots" content="All" />
    <meta name="author" content="Udgiver" />
    <meta name="copyright" content="Information om copyright" />

    <link href="./css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="./css/styles.css" rel="stylesheet" type="text/css" />
    <link rel="icon" href="./images/brand_round.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Arvo&family=Lato&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
    <?php include "./includes/navbar.php" ?>
    <div class="container-fluid">


        <div class="row">
            <div class="col-12 usp-header text-light overlay">
                <h2 class="section-header">Lejlighed eller <strong>gratis</strong></h2>
                <span class="hideOnSmall">
                    <p>
                        Du betaler først Landlord.dk, når du har fået en lejlighed.
                        <br>
                        Start derfor din søgning i dag uden at betale en krone.
                    </p>

                </span>
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input class="searchField" type="text" placeholder="Søg efter by eller lign." />
                </div>
                <br>
                <button id="createUser" class="btn btn-primary text-light mt-3"><i class="fas fa-user-circle"></i><span
                        style="margin-left: .5rem; margin-top: 1rem;">Opret bruger</span></button>
            </div>
        </div>
        <div class="section">
            <h2 class="section-header text-secondary">Nyeste lejligheder</h2>
            <div id="apartmentRoot"></div>
            <div style="text-align: center;">
                <button id="moreApartmentsButton" class="btn btn-dark text-light mt-4"><i class="fas fa-plus"></i><span
                        style="margin-left: .5rem"> Indlæs 3 mere</span></button>
                <br>
                <button class="btn btn-primary text-light mt-4"><i class="fas fa-building"></i><span
                        style="margin-left: .5rem">Se
                        alle
                        lejligheder</span></button>

            </div>
        </div>
        <div class="row bg-secondary feature-container overlay section">
            <div class="col-12 text-light ">
                <h2 class="section-header">Dine fordele</h2>
            </div>
            <div class="col-12 feature-card"><i class="fas fa-money-bill-alt"></i>Gratis, indtil du har en lejlighed
            </div>
            <div class="col-12 feature-card"><i class="fas fa-building"></i>1.128 billige lejligheder</div>
            <div class="col-12 feature-card"><i class="far fa-smile"></i>415 hæderlige udlejere</div>
        </div>
        <div id="concept" class="row bg-orange concept-container section">

            <div class="col-12 text-light">
                <h2 class="section-header">Sådan fungerer det</h2>
            </div>
            <div class="col-12 col-lg-4">
                <img src="./images/koncept_1.png" alt="Led efter lejlighed på vores portal">
            </div>
            <div class="col-12 col-lg-4">
                <img src="./images/koncept_2.png" alt="Besigtig lejligheden">
            </div>
            <div class="col-12 col-lg-4">
                <img src="./images/koncept_3.png" alt="Betal først Landlord.dk, når du er flyttet ind">
            </div>

        </div>
    </div>
    <div class="footer">
        <div class="row">
            <div class="col-12 col-lg-4">
                <img src="./images/brand.png" alt="">
                <br>
                <p class="footer-contact">

                    <span class="verticalAlign">
                        <i class="fas fa-envelope-square"></i>hej@landlord.dk
                    </span>
                    <br>
                    <span class="verticalAlign">
                        <i class="fas fa-phone-square-alt"></i>70 50 70 50

                    </span>
                    <br>

                    <span class="verticalAlign">
                        <i class="fas fa-barcode"></i>
                        Cvr-nr. 21252012
                    </span>

                </p>
            </div>
            <div class="col-12 col-lg-4">
                <p>© 2021 Landlord.dk</p>
            </div>
            <div class="col-12 col-lg-4">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </div>
        <span>
        </span>
    </div>
    <script>
    var createUser = document.querySelector("#createUser").addEventListener("click", () => alert(
        "Johan Jespersen er min allerbedste ven!!!1"))
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script type="module" src="./Apartment.js">
    </script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
</body>
<script>

</script>

</html>