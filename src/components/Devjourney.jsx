function Devjourney(){
    return(
        <section class="py-5 bg-dark text-white">
          <div class="container text-center">
            <span class="small text-uppercase text-white-50">
              DEVELOPMENT JOURNEY
            </span>
            <h2 class="fw-bold mt-2">From Console to Web</h2>
            <div class="row justify-content-center align-items-center mt-5">
              <div class="col-md-3">
                <div className="card border-0.5 border-secondary bg-dark text-white p-4">
                  <i class="bi bi-terminal fs-1"></i>
                  <h5 class="mt-3">C</h5>
                  <small>Core Logic</small>
                </div>
              </div>
              <div class="col-md-1">
                <i class="bi bi-arrow-right fs-3"></i>
              </div>
              <div class="col-md-3">
                <div className="card border-0.5 border-secondary bg-dark text-white p-4">
                  <i class="bi bi-diagram-3 fs-1"></i>
                  <h5 class="mt-3">Logic</h5>
                  <small>Ticket Operations</small>
                </div>
              </div>
              <div class="col-md-1">
                <i class="bi bi-arrow-right fs-3"></i>
              </div>
              <div class="col-md-3">
                <div className="card border-0.5 border-secondary bg-dark text-white p-4">
                  <i class="bi bi-code-slash fs-1"></i>
                  <h5 class="mt-3">React</h5>
                  <small>Modern Interface</small>
                </div>
              </div>
            </div>
          </div>
        </section>
    );

}
export default Devjourney;