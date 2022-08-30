
function searchMovies() {
  var inputted = document.getElementById("inputted").value;
  inputted = inputted.toLowerCase();

  var search_Form = document.getElementById("searchForm");
  search_Form.action = "#" + inputted;
  search_Form.submit();
}



// Navigation bar------------------------

//const navTag = document.getElementById("navTag");
//navTag.innerHTML = ``



// Animated slider -------------------------


const aniSlide = document.getElementById("aniSlide");

aniSlide.innerHTML = ` <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/coachingNotes.jpeg/" class="d-block w-100" alt="..."  >
        </div>
        <div class="carousel-item">
          <img src="/img/ncertBooks.png/" class="d-block w-100" alt="..." >
        </div>
        <div class="carousel-item">
          <img src="/img/otherStudiesMaterials.jpeg/" class="d-block w-100" alt="...">
        </div>
      </div>


      
      
    
        
        
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
`;












let foot = document.getElementById('b-example-divider');

foot.innerHTML=` <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">


                  <img class="bi" width="30" height="24" src="/img/1.png">


                </a>
                <span class="text-muted">&copy; 2022 , CBSE Coaching Centre</span>
              </div>

              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="https://wa.me/919708268593/">

                    <img class="bi" width="24" height="24" src="/img/whatsapp.jpeg">

                  </a></li>
                <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/aditya_kumar_6414119/">


                    <img class="bi" width="24" height="24" src="/img/instagram.jpeg">



                  </a></li>
                <li class="ms-3"><a class="text-muted" href="https://www.facebook.com/profile.php?id=100027830802048">

                    <img class="bi" width="24" height="24" src="/img/facebook.png">


                  </a></li>
              </ul>
            </footer>





`
