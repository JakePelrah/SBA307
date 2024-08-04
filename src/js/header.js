document.write(`
    <!-- HEADER -->
<header>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        Fret-Less <img src="./assets/images/gif/contact.webp" height="40em" />
      </a>

      <form id="search-form" role="search">
        <div id="search-input-group" class="input-group mb-3">
          <button
            class="btn"
            type="submit"
            id="search-button"
          >
            <img id="search-icon" src="./assets/icons/search.svg" />
          </button>
          <input
            id="search-input"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            name="search-term"
            aria-label="Search"
          />
        </div>
      </form>

      <button class="cart-button">
        <img src="./assets/icons/cart3.svg" />
      </button>
    </div>
  </nav>
</header>

<!-- NAV MENU -->
<ul
  id="brands"
  class="nav d-flex justify-content-center"
  style="margin: 0.5em 0em 0.5em 0em"
>
  <!-- NAV LINK STYLE -->
  <style>
    .nav-link,
    .nav-link:hover,
    .nav-link:active,
    .nav-link:focus {
      color: black;
      padding: 0em 1em;
    }
  </style>

  <!-- ITEM DROPDOWNS -->
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Basses
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="../fenderBasses.html">Fender</a></li>
      <li>
        <a class="dropdown-item" href="../musicmanBasses.html">Music Man</a>
      </li>
    </ul>
  </li>

  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Guitars
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="../fenderGuitars.html">Fender</a></li>
      <li><a class="dropdown-item" href="../gibsonGuitars.html">Gibson</a></li>
    </ul>
  </li>

  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Amplifiers
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="../markbass.html">Markbass</a></li>
      <li><a class="dropdown-item" href="../marshall.html">Marshall</a></li>
    </ul>
  </li>
</ul>

<div class="hero-image"></div>

        `);

// get cart button
const cartButton = document.querySelector(".cart-button");
cartButton.onclick = () => alert("Coming Soon");

//handle search form
const searchForm = document.querySelector("#search-form");
searchForm.onsubmit = (e) => {
  const inputs = searchForm.elements;
  const inputByIndex = inputs[0];
  const inputByName = inputs["search-term"];
  e.preventDefault();
  alert(`Searching for ${inputByName.value} `);
  searchForm.reset();
};
