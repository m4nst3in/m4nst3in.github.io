var texto = "I'm a Java Developer. Since 2023 doing what i love.";
var index = 0;
var velocidade = 50; // Velocidade de digitação (em milissegundos)
var intervalo; // Variável para armazenar o intervalo
var textoCompleto = false; // Variável para verificar se o texto foi completamente digitado

document.addEventListener("DOMContentLoaded", function() {
    var secaoB = document.querySelector(".secao-b");

    window.addEventListener("scroll", function() {
        console.log("Scroll event fired");
        if (isInViewport(secaoB)) {
            console.log("secaoB is in viewport");
            secaoB.classList.add("visible");
        }
    });

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            (rect.top >= 0 && rect.top <= window.innerHeight) ||
            (rect.bottom >= 0 && rect.bottom <= window.innerHeight)
        );
    }
});


// Função para iniciar a digitação do texto
function iniciarDigitacao() {
    index = 0;
    document.getElementById("descricao").innerHTML = "";
    digitar();
}

// Função para digitar o texto letra por letra
function digitar() {
    if (index < texto.length) {
        document.getElementById("descricao").innerHTML += texto.charAt(index);
        index++;
        intervalo = setTimeout(digitar, velocidade);
    } else {
        textoCompleto = true; // Marca que o texto foi completamente digitado
    }
}

// Evento de quando o cursor passa por cima do texto
document.getElementById("descricao").addEventListener("mouseenter", function() {
    if (textoCompleto) {
        clearTimeout(intervalo); // Para a digitação atual
        iniciarDigitacao(); // Inicia a digitação do texto novamente
        textoCompleto = false; // Reseta a variável para próxima interação
    }
});

// Chamada inicial para iniciar a digitação
iniciarDigitacao();
// Função para abrir o popup correspondente à tecnologia
function openPopup(popupId) {
  // Primeiro, fechamos todos os popups abertos
  closeAllPopups();

  // Em seguida, abrimos o popup específico pelo ID fornecido
  var popup = document.getElementById("popup-" + popupId);
  if (popup) {
      popup.style.display = "block";
  }
}

function closeAllPopups() {
  // Fecha todos os popups definindo o estilo de exibição como "none"
  var popups = document.querySelectorAll(".popup");
  popups.forEach(function(popup) {
      popup.style.display = "none";
  });
}
function closePopup() {
  // Fecha o popup atual ao clicar no botão de fechar (X)
  var popup = document.querySelector(".popup[style='display: block;']");
  if (popup) {
      popup.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
      "particles": {
          "number": {
              "value": 65,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#ffd700" // cor das partículas
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 0,
                  "color": "#ffd700"
              },
              "polygon": {
                  "nb_sides": 5
              }
          },
          "opacity": {
              "value": 1, // opacidade das partículas
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 7, // tamanho das partículas
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffd700",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 4, // velocidade das partículas
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onclick": {
                  "enable": true,
                  "mode": "bubble"
              },
              "resize": true
          },
          "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 100,
                "size": 2,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 60,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            },
            "slow": {
                "delay": 1,
                "factor": 3,
                "radius": 200
            },
            "circle": {
                "distance": 200,
                "size": 50
            },
            "emerge": {
                "opacity_speed": 2,
                "size_speed": 3
            },
            "square": {
                "distance": 150,
                "size": 20
            },
            "triangle": {
                "distance": 200,
                "size": 50
            },
            "image": {
                "distance": 200,
                "size": 50
            },
            "nabe": {
                "distance": 200,
                "size": 50
            }
        }
        
      },
      "retina_detect": true
  });
});
