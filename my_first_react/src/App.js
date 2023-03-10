import './App.css';

//Module for navbar, copied from Bootstrap and modified
function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href='#'>BOOTCAMP Batch 5 : Experiment with REACTJS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href='#'>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='#'>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

//Module for the body, in this case only heading text
function Body() {
  return (
    <div class="container-fluid">
      <h1>This is React</h1>
    </div>
  );
}

export { Navbar, Body };
