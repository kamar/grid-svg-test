var person = {
    fullname: "Konstas Marmatakis",
    age: "58",
    place: "Chania",
    fb: "150",
    tw: "55",
    insta: "100K"
}
function fillData(){
    document.getElementById("pname").innerHTML=person.fullname +" <span>"+ person.age +"</span>"
    document.getElementById("place").innerHTML=person.place
    document.getElementById("pfb").innerHTML=person.fb +'<div class="profile__social__label">Followers</div>'
    document.getElementById("ptw").innerHTML=person.tw +'<div class="profile__social__label">Likes</div>'
    document.getElementById("pinsta").innerHTML=person.insta + '<div class="profile__social__label">Photos</div>'
}