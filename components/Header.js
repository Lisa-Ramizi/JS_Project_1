export function Header() {
    return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Harmonia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active ms-5" aria-current="page" href="home.html">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link ms-5" href="home.html#top-tracks">Tracks</a>
      </li>
      <li class="nav-item">
      <a class="nav-link ms-5" href="artists.html">Artists</a>
      </li>
      </ul>
      
        <button class="btn ms-5" id=search-btn><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</nav>
 `
}