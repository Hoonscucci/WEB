import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js"

function About() {
    
    return (
        <div className="container mt-2 text-center">
            <h1 className="text-primary fw-bold">저를 소개 합니다. 😀</h1>
            <hr />
            <h4>저는 hoonscucci이고 제가 이 앱을 만들어써요!!</h4>
            <h4>제 주라인은 <span className="fw-bold text-danger">정글</span>이에요</h4>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="https://blog.kakaocdn.net/dn/cPAf9x/btrzZ3PpjSf/8YsXrmalSfmxyFL0yMMI0k/img.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="https://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0404/IE002626091_STD.JPG" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            <hr />
            <Link 
                to={"/"} 
                className="fw-bold text-success" 
                style={{fontSize: "20px"}}
            >
                회원 관리 하러 이동하기 😎
            </Link>
        </div>
    )
}

export default About;