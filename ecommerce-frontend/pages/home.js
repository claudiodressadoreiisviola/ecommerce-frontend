import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
  <Html lang="en">

    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Home</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
    </head>
    <style>
      #main {
        min-height: 600px;
        background-color: rgb(215, 210, 210);
      }

      #bottom {
        background-color: rgb(184, 184, 184);
        color: rgb(255, 255, 255);
      }
    </style>

    <body>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" text-left>
          <a class="navbar-brand" href="#">E-commerce</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="mx-auto" style="width: auto">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Gestione ordini</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Catalogo
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Piante</a></li>
                    <li><a class="dropdown-item" href="#">Formaggi</a></li>
                    <li><a class="dropdown-item" href="#">Bevande</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Cerca un prodotto" aria-label="Search"/>
            </form>
            <button type="button" class="btn btn-outline-primary">Profilo</button>
          </div>
        </div>
      </nav>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      <div id="main"></div>
      <footer id="bottom" class="row text-left p-4">
        <div class="col-12 col-md-4">
          <h3>Copyright &copy;</h3>
          <div class="col-12 col-md-8">
            <h2>Informazioni</h2>
            <div class="row">
            </div>
          </div>
        </div>
      </footer>
    </body>

  </Html>
  )
}