const vini = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
    },
    {
        img: "https://render.fineartamerica.com/images/rendered/default/poster/5/8/break/images/artworkimages/medium/1/neymar-jr-of-barcelona-runs-with-the-ball-don-kuing.jpg"
    },
    {
        img: "https://pbs.twimg.com/media/EuI17zTXAAImwdh.jpg"
    },
    {
        img: "https://www.thesun.co.uk/wp-content/uploads/2023/02/0ca8a2fc-0327-45fc-af98-ee9539d1e72e.jpg"
    }
]
const ronaldo = [...vini,{img:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Jo%C3%A3o_Felix_2019_%28cropped%29.jpg/640px-Jo%C3%A3o_Felix_2019_%28cropped%29.jpg`}]

const img = document.querySelector(".person-img");
let index = 0;
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");

function Ronaldo_image(){
    const change = ronaldo[index];
    img.src = change.img;
}
btnright.addEventListener("click", function(){
    index++;
    if(index === ronaldo.length){
        index = 0;
    }
    Ronaldo_image();
})
btnleft.addEventListener("click", function(){
    index--;
    if(index < 0){
        index = ronaldo.length-1;
    }
    Ronaldo_image();
})

const btnsShow = document.querySelector(".hideAndShow");
const showtext = document.querySelector(".show-text");

btnsShow.addEventListener("click", function(){
    btnsShow.classList.toggle("let-show");
    showtext.classList.toggle("hiding");
})

const contents = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".box");

btns.forEach((tap,index) =>{
    tap.addEventListener("click", ()=>{
        btns.forEach(remove =>{
            remove.classList.remove("active");
        })
        tap.classList.add("active");
        contents.forEach(show=>{
            show.classList.remove("active");
        })
        contents[index].classList.add("active");
    })
    
})
