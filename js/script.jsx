const { useState, useEffect } = React;
const Calculating = () => {
  const [gender, setGender] = useState('female');
  const [activityLevel, setActivityLevel] = useState('small');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [calories, setCalories] = useState("____"); // Valeur par défaut

  const calculateCalories = () => {
    const ratio = {
      low: 1.2,
      small: 1.375,
      medium: 1.55,
      high: 1.725,
    }[activityLevel];

    const baseCalories = 
      gender === 'male'
        ? 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5
        : 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161;

    setCalories(Math.round(baseCalories * ratio));
  };

  useEffect(() => {
    if (height && weight && age) {
      calculateCalories();
    }
  }, [gender, activityLevel, height, weight, age]);

  return (
    <div className="calculating">
      <div className="container">
        <div className="calculating__field">
          <div className="calculating__subtitle">Votre sexe</div>
          <div className="calculating__choose" id="gender">
            <div
              id="female"
              className={`calculating__choose-item ${gender === 'female' ? 'calculating__choose-item_active' : ''}`}
              onClick={() => setGender('female')}
            >
              Femme
            </div>
            <div
              id="male"
              className={`calculating__choose-item ${gender === 'male' ? 'calculating__choose-item_active' : ''}`}
              onClick={() => setGender('male')}
            >
              Homme
            </div>
          </div>

          <div className="calculating__subtitle">Vos mensurations</div>
          <div className="calculating__choose calculating__choose_medium">
            <input
              type="number"
              id="height"
              placeholder="Votre taille (cm)"
              className="calculating__choose-item"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="number"
              id="weight"
              placeholder="Votre poids (kg)"
              className="calculating__choose-item"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <input
              type="number"
              id="age"
              placeholder="Votre âge"
              className="calculating__choose-item"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="calculating__subtitle">Votre niveau d'activité physique</div>
          <div className="calculating__choose calculating__choose_big">
            {['low', 'small', 'medium', 'high'].map((level) => (
              <div
                key={level}
                data-ratio={level}
                id={level}
                className={`calculating__choose-item ${activityLevel === level ? 'calculating__choose-item_active' : ''}`}
                onClick={() => setActivityLevel(level)}
              >
                {level === 'low'
                  ? 'Sédentaire'
                  : level === 'small'
                  ? 'Légèrement actif'
                  : level === 'medium'
                  ? 'Actif'
                  : 'Très actif'}
              </div>
            ))}
          </div>

          <div className="calculating__divider"></div>

          <div className="calculating__total">
            <div className="calculating__subtitle">Vos besoins caloriques journaliers :</div>
            <div className="calculating__result">
              <span>{calories}</span> kcal
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

function Content() {
  return (
    <div>
      <div class="contact">
        <div>
          <a href="#">
            {" "}
            <i class="bx bx-phone"> </i>+33-1-23-45-67-89
          </a>
          <a href="#">
            {" "}
            <i class="bx bx-envelope"> </i>contact@etudiant.univ-reims.fr
          </a>
        </div>{" "}
        <div>
          <p> </p>{" "}
        </div>{" "}
      </div>{" "}
      <header>
        <div class="navlist-m">
          <a href="#" class="logo">
            <img class="logo-dark" src="image__1_-removebg-preview.png" alt="logo" />
            <img class="logo-light" src="image__1_-removebg-preview.png" alt="logo" />
          </a>
          <ul class="navlist">
            <li>
              {" "}
              <a href="#"> Home </a>
            </li>
            <li>
              {" "}
              <a href="#objectif"> Objectifs </a>
            </li>
            <li>
              {" "}
              <a href="#about"> À propos de nous </a>
            </li>
            <li><a href="#calculator">Calculateur</a></li>
            <li>
              <a href="#services"> Nos Services </a>
            </li>
            <li>
              <a href="#more-info"> PLUS D'INFOS </a>
            </li>
          </ul>{" "}
        </div>
        <div class="right-info">
          <div class="toggle-container">
            <input type="checkbox" id="switch" name="theme" />{" "}
            <label for="switch"> Toggle </label>{" "}
          </div>{" "}
          <div class="bx bx-menu" id="menu-icon">
            {" "}
          </div>{" "}
        </div>{" "}
      </header>
      <section class="home" id="home">
        <div class="home-text">
  
          <h1>
    Bienvenue sur notre projet<br />
     dédié à la révolution{" "}
    
    <span>du suivi nutritionnel grâce à l'Intelligence Artificielle</span> <br />
    Plus besoin de peser vos aliments :{" "}
    prenez simplement une photo de votre plat, et notre IA fait le reste. <br />
    <br />
  </h1>
  <p>
    Notre technologie analyse avec précision chaque ingrédient, 
    calcule les calories,
    et fournit des recommandations nutritionnelles personnalisées en fonction de votre profil.{" "}
  </p>{" "}
          <a href="#" class="btn">
            {" "}
            Commencer l'analyse
          </a>{" "}
        </div>
        <div class="home-img">
          <img src="img/Group 3.svg" alt="main img" />
          <div class="circle">
            <div class="logo-cr"> </div>{" "}
            <div class="text">
              <p> URCA• CAL AI• </p>{" "}
            </div>{" "}
          </div>{" "}
          <img src="img/Rectangle 3.svg" alt="mainp img" />
        </div>{" "}
      </section>
      <section class="hr-solution">
        <div class="head-text">
        <h6> Objectifs du Projet </h6>{" "}
<h1 class="objectif" id="objectif">
  Développement d'une IA Efficace pour l'Analyse Nutritionnelle des Repas{" "}
</h1>{" "}
        </div>
        <div class="container">
          <div class="hr-solution-img">
            <img src="img/Rectangle 3.svg" alt="" />
          </div>{" "}
          <div class="hr-solution-text">
            <ul>
              <li>
                <i class="bx bxs-caret-right-circle"> </i>Détection instantanée des ingrédients par notre IA{" "}
              </li>{" "}
              <li>
                {" "}
                <i class="bx bxs-caret-right-circle"> </i>Analyse nutritionnelle détaillée par ingrédient
              </li>
              <li>
                <i class="bx bxs-caret-right-circle"> </i>Calcul détaillé des calories{" "}
              </li>{" "}
              <li>
                <i class="bx bxs-caret-right-circle"> </i>Suivi de vos objectifs nutritionnels en temps réel{" "}
              </li>{" "}
              <li>
                {" "}
                <i class="bx bxs-caret-right-circle"> </i>Recommandations personnalisées selon votre profil
              </li>
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <section class="about" id="about">
        <div class="head-text">
        <h6> À propos de nous </h6>{" "}
        <h1> Votre repas, notre analyse : une technologie d'IA pour une alimentation sur mesure ! </h1>{" "}
        </div>
        <div class="container">
          <div class="about-img">
            <img src="img/img22.png" alt="" />
          </div>
          <div class="about-text">
            <p class="des">
            Bienvenue sur notre site dédié à la révolution du suivi nutritionnel
      grâce à l'Intelligence Artificielle ! Nous sommes une équipe passionnée
      par l'utilisation de l'IA pour analyser vos repas . Notre mission est de
      rendre le suivi nutritionnel plus simple et accessible en utilisant la
      technologie pour identifier les ingrédients, calculer les calories et
      offrir des conseils adaptés à vos besoins.{" "}
            </p>
            <div className="three-div">
  <div>
    <div className="cr"> 01 </div> 
    <h6> Prenez une photo de votre plat </h6>
    <p>
      Prenez simplement une photo de votre repas et laissez notre IA analyser les ingrédients.
    </p>
  </div>
  <div>
    <div className="cr"> 02 </div> 
    <h6> Consultez votre historique de repas </h6>
    <p>
      Visualisez les analyses précédentes, classées par type de repas : petit déjeuner, déjeuner, dîner, etc.
    </p>
  </div>
  <div>
    <div className="cr"> 03 </div> 
    <h6> Suivi de vos repas </h6>
    <p>
      Suivez vos repas passés et obtenez un aperçu détaillé des ingrédients et des calories pour chaque plat.
    </p>
  </div>
</div>

          </div>{" "}
        </div>{" "}
      </section>
      <section className="calculator" id="calculator">
        <div className="head-text">
          <h6>CALCULATEUR</h6>
          <h1>Calculez vos besoins caloriques</h1>
        </div>
        <Calculating />
      </section>
      <section className="services" id="services">
  <div className="head-text">
    <h6> NOS SERVICES </h6>
    <h1> Nous proposons une gamme de services adaptés à vos besoins nutritionnels </h1>
  </div>
  <div className="boxs">
    <div className="box-text">
      <h1>
        Des services avancés pour vous aider à gérer votre alimentation et atteindre vos objectifs de santé grâce à l'IA et à l'analyse des repas.
      </h1>
      <p> Découvrez nos services ! </p>
    </div>

    <div className="box box1">
      <div className="icon">
        <i className="mdi mdi-food"> </i>
      </div>
      <p>
        Prise en charge complète de vos repas : analyse des ingrédients et calcul des calories automatiquement.{" "}
      </p>
      <a href="#" className="btnReamMore">
        Lire plus
      </a>
    </div>

    <div className="box box2">
      <div className="icon">
        <i className="mdi mdi-nutrition"> </i>
      </div>
      <p>
      Classer les repas en fonction de différents critères (petit déjeuner, déjeuner, etc.) pour une analyse détaillée.
      </p>
      <a href="#" className="btnReamMore">
        Lire plus
      </a>
    </div>

    <div className="box box3">
      <div className="icon">
        <i className="mdi mdi-history"> </i>
      </div>
      <p>
      Suivi détaillé de l'historique de vos repas pour une gestion optimale de vos objectifs nutritionnels.{" "}
      </p>
      <a href="#" className="btnReamMore">
        Lire plus
      </a>
    </div>

    <div className="box box4">
      <div className="icon">
        <i className="mdi mdi-google-analytics"> </i>
      </div>
      <p>
      Analyser la composition nutritionnelle des repas (calories, vitamines) pour garantir un équilibre.{" "}
      </p>
      <a href="#" className="btnReamMore">
        Lire plus
      </a>
    </div>

    <div className="box box5">
      <div className="icon">
      <i class='bx bxs-food-menu'></i>
      </div>
      <p>
      Suivi des Objectifs Nutritionnels{" "}
      </p>
      <a href="#" className="btnReamMore">
        Lire plus
      </a>
    </div>

    <div className="box box6">
      <div className="icon">
        <i className="mdi mdi-food-fork-drink"> </i>
      </div>
      <p>
        Élaboration de plans alimentaires personnalisés pour répondre à vos objectifs de santé et de bien-être.{" "}
      </p>
      <a href="#" className="btnReamMore">
        Lire plus
      </a>
    </div>
  </div>
</section>




<section class="more-info"  id="more-info">
  <div class="head-text">
    <h6>PLUS D'INFOS</h6>
    <h1>Questions fréquentes</h1>
  </div>
  <div class="containerd">
    <div class="container-m">
      <div class="box box1">
        <h4 class="question">
          Quel est le rôle de l'IA dans l'analyse nutritionnelle ?
        </h4>
        <button class="toggle-btn">
          <i class="bx bx-plus"></i>
        </button>
        <div class="answer">
          <p>
            L'IA joue un rôle essentiel dans l'identification précise des ingrédients des photos de nourriture et le calcul des valeurs nutritionnelles. Elle utilise des algorithmes d'apprentissage profond pour analyser les images, identifier les ingrédients et fournir des informations nutritionnelles précises, y compris les calories, les vitamines et les macronutriments. Cette technologie permet aux utilisateurs de suivre facilement leur apport alimentaire quotidien et d'obtenir des recommandations personnalisées en fonction de leurs objectifs nutritionnels.
          </p>
        </div>
      </div>
      <div class="box box2">
        <h4 class="question">
          Comment l'IA détecte-t-elle les ingrédients dans les photos ?
        </h4>
        <button class="toggle-btn">
          <i class="bx bx-plus"></i>
        </button>
        <div class="answer">
          <p>
            Le système d'IA utilise des techniques de reconnaissance d'images, en particulier des réseaux neuronaux convolutifs (CNN), pour détecter et classer les ingrédients dans les images de nourriture. En s'entraînant sur un grand ensemble de données d'images alimentaires et de leurs informations nutritionnelles associées, l'IA apprend à reconnaître divers aliments, même lorsqu'ils sont présentés sous différents angles ou conditions d'éclairage.
          </p>
        </div>
      </div>
      <div class="box box3">
        <h4 class="question">
          Quelle est la précision de l'analyse nutritionnelle fournie par l'IA ?
        </h4>
        <button class="toggle-btn">
          <i class="bx bx-plus"></i>
        </button>
        <div class="answer">
          <p>
            L'IA est conçue pour offrir des analyses nutritionnelles aussi précises que possible, mais il peut y avoir des variations en fonction de la qualité de l'image, de la diversité des ingrédients ou des spécificités régionales des plats. Toutefois, grâce à des mises à jour continues et à l'amélioration de l'algorithme, la précision s'améliore constamment pour offrir une expérience plus fiable aux utilisateurs.
          </p>
        </div>
      </div>
      <div class="box box4">
        <h4 class="question">
          Comment personnaliser les recommandations nutritionnelles ?
        </h4>
        <button class="toggle-btn">
          <i class="bx bx-plus"></i>
        </button>
        <div class="answer">
          <p>
            Les recommandations nutritionnelles sont personnalisées en fonction des objectifs de santé de l'utilisateur, de son profil alimentaire, de ses préférences et de ses besoins spécifiques. Après avoir analysé les repas, l'IA suggère des ajustements dans l'alimentation pour atteindre les objectifs de calories, de macronutriments ou de vitamines recommandés.
          </p>
        </div>
      </div>
      <div class="box box5">
        <h4 class="question">
          Comment suivre l'historique des repas et des analyses ?
        </h4>
        <button class="toggle-btn">
          <i class="bx bx-plus"></i>
        </button>
        <div class="answer">
          <p>
            Vous pouvez facilement consulter l'historique de vos repas en accédant à une section dédiée sur l'application. Chaque repas est classé selon son type (petit déjeuner, déjeuner, dîner) et vous permet de visualiser les analyses passées, y compris les ingrédients, les calories et d'autres informations nutritionnelles.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <footer>
        <div class="container-f">
          <div class="social">
            <img class="logo-dark" src="image__1_-removebg-preview.png" alt="logo" />
            <img class="logo-light" src="image__1_-removebg-preview.png" alt="logo" />
            <div class="social-icon">
              <div class="social-icon-i">
                <a href="#">
                  {" "}
                  <i class="bx bxl-instagram"> </i>
                </a>
              </div>{" "}
              <div class="social-icon-i">
                <a href="#">
                  {" "}
                  <i class="bx bxl-facebook-circle"> </i>
                </a>
              </div>{" "}
              <div class="social-icon-i">
                <a href="#">
                  {" "}
                  <i class="bx bxl-twitter"> </i>
                </a>
              </div>{" "}
              <div class="social-icon-i">
                <a href="#">
                  {" "}
                  <i class="bx bxl-linkedin-square"> </i>
                </a>
              </div>{" "}
            </div>{" "}
          </div>
          <div class="info">
            <div class="one">
              <p>
                About pages are perfect spaces to talk <br />
                about where you started, how you 've <br />
                grown, and the ideals that have helped <br />
                your organization mature{" "}
              </p>{" "}
            </div>
            <div class="two">
              <h6> Address </h6>{" "}
              <a href="#">
                {" "}
                <i class="bx bxs-map"> </i>UFR des Sciences Exactes et Naturelles
Moulin de la Housse <br />
                Reims 51100, France{" "}
              </a>{" "}
            </div>
            <div class="three">
              <h6> Contact </h6>{" "}
              <div>
                <a href="#">
                  {" "}
                  <i class="bx bx-phone"> </i>+33-1-23-45-67-89
                </a>
                <a href="#">
                  {" "}
                  <i class="bx bx-envelope"> </i>contact@etudiant.univ-reims.fr
                </a>
              </div>{" "}
            </div>
            <div class="four">
              <h6> Office </h6> <p> Sunday - Thursday </p> <p> 8 AM - 5 PM </p>{" "}
            </div>{" "}
          </div>
          <div class="copyr">
            <p>
              {" "}
              © <span class="year"> </span>{" "}
              <span class="logo-text"> CAL AI </span> - All rights reserved.{" "}
            </p>{" "}
            <div class="f-item">
              <a href="#"> Privacy </a> <a href="#"> Security </a>{" "}
              <a href="#"> Terms </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
      <a href="#" class="scroll">
        <div class="circle2">
          <div class="logo-cr2">
            {" "}
            <i class="bx bx-up-arrow-alt"> </i>
          </div>
          <div class="text2">
            <p> SCROLL TO TOP• SCROLL TO TOP• </p>{" "}
          </div>{" "}
        </div>{" "}
      </a>
    </div>
  );
}

ReactDOM.render(<Content />, document.getElementById("homePage"));

const header = document.querySelector("header");
let navlist = document.querySelector(".navlist");
let scroll = document.querySelector(".scroll");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
  navlist.classList.toggle("middle", window.scrollY > 60);
  scroll.classList.toggle("scroll-tt", window.scrollY > 650);
});

let menu = document.querySelector("#menu-icon");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const text = document.querySelector(".text p");
const text2 = document.querySelector(".text2 p");

text.innerHTML = text.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 14.2}deg)">${char}</span>`
  )
  .join("");

text2.innerHTML = text2.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 11}deg)">${char}</span>`
  )
  .join("");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const box = btn.parentNode;
    const answer = box.querySelector(".answer");

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      btn.innerHTML = "<i class='bx bx-plus'></i>";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      btn.innerHTML = "<i class='bx bx-minus'></i>";
    }
  });
});

let year = new Date().getFullYear();
document.querySelector(".year").innerText += year;

const sr = ScrollReveal();

const scrollTop = {
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: true,
};
const scrollBottom = {
  origin: "bottom",
  distance: "85px",
  duration: 2500,
  reset: true,
};
const scrollLeft = {
  origin: "left",
  distance: "85px",
  duration: 2500,
  reset: true,
};
const scrollRight = {
  origin: "right",
  distance: "85px",
  duration: 2500,
  reset: true,
};
const scrollRight2 = {
  origin: "right",
  distance: "30px",
  duration: 2500,
  reset: true,
};

sr.reveal(
  ".home-text, .hr-solution-img, .about-text, .container-m .box",
  scrollTop,
  { delay: 300 }
);
sr.reveal(".home-img", scrollTop, { delay: 400 });
sr.reveal(".hr-solution-text, .about-img", scrollBottom, { delay: 300 });
sr.reveal(".box-text, .testimonial-text", scrollLeft, { delay: 300 });
sr.reveal(".services .box", scrollRight, { delay: 300 });
sr.reveal(".testimonial-img", scrollRight2, { delay: 300 });

let logod = document.querySelectorAll(".logo-dark");
let logol = document.querySelectorAll(".logo-light");

var checkbox = document.querySelector("input[name=theme]");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");

    for (var i = 0; i < logod.length; i++) {
      logod[i].classList.toggle("logo-dark-hide");
    }

    for (var i = 0; i < logol.length; i++) {
      logol[i].classList.toggle("logo-light-show");
    }
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");

    for (var i = 0; i < logod.length; i++) {
      logod[i].classList.toggle("logo-dark-hide");
    }

    for (var i = 0; i < logol.length; i++) {
      logol[i].classList.toggle("logo-light-show");
    }
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 300);
};

const boxes = document.querySelectorAll(".boxs .box");
boxes.forEach((box) => {
  VanillaTilt.init(box, {
    max: 13,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
});

