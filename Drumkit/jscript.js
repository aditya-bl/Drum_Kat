var img= document.querySelector("#main-img");
var idle="idle.png";
window.addEventListener("keydown", function(event){
    var pathimg='Drum Kit Starting Files\\images\\drum-kat-'
    var pathsnd='Drum Kit Starting Files\\sounds\\'
    switch(event.key){
        case "w":
            img.setAttribute("src",pathimg+"tom-1.png");
            var audio = new Audio(pathsnd+'tom-1.mp3');
            audio.volume=0.7;
            audio.play();
            this.addEventListener("keyup",function(event){
                img.setAttribute("src",pathimg+idle);
            });
            break;
        case "a":
            img.setAttribute("src",pathimg+"tom-2.png");
            var audio = new Audio(pathsnd+'tom-2.mp3');
            audio.volume=0.7;
            audio.play();
            this.addEventListener("keyup",function(event){
                img.setAttribute("src",pathimg+idle);
            });
            break;
        case "s":
            img.setAttribute("src",pathimg+"tom-3.png");
            var audio = new Audio(pathsnd+'tom-3.mp3');
            audio.volume=0.7;
            audio.play();
            this.addEventListener("keyup",function(event){
                img.setAttribute("src",pathimg+idle);
            });
            break;
        case "d":
            img.setAttribute("src",pathimg+"tom-4.png");
            var audio = new Audio(pathsnd+'tom-4.mp3');
            audio.volume=0.7;
            audio.play();
            this.addEventListener("keyup",function(event){
                img.setAttribute("src",pathimg+idle);
            });
            break;
        case "j":
            img.setAttribute("src",pathimg+"snare.png");
            var audio = new Audio(pathsnd+'snare.mp3');
            audio.volume=0.7;
            audio.play();
            this.addEventListener("keyup",function(event){
                img.setAttribute("src",pathimg+idle);
            });
            break;
        case "k":
            img.setAttribute("src",pathimg+"crash.png");
            var audio = new Audio(pathsnd+'crash.mp3');
            audio.volume=0.7;
            audio.play();
            this.addEventListener("keyup",function(event){
                img.setAttribute("src",pathimg+idle);
            });
            break;
        case "l":
            img.setAttribute("src",pathimg+"kick-bass.png");
            var audio = new Audio(pathsnd+'kick-bass.mp3');
            audio.play();
            this.addEventListener("keyup",function(event){
                img.setAttribute("src",pathimg+idle);
            });
            break;
        default:
            img.setAttribute("src",pathimg+idle);
    }
});
