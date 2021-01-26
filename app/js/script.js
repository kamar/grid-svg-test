var person = {
    fullname: "Konstas Marmatakis",
    age: "58",
    place: "Chania",
    photo: "/images/mexx.png",
    fb: "150M",
    tw: "55",
    insta: "100K"
}
function fillData(){
    document.title=person.fullname
    var img = document.getElementById("pphoto")
    img.src=person.photo
    img.alt=person.fullname
    document.getElementById("pname").childNodes[0].nodeValue=person.fullname +" "
    document.getElementById("pname").childNodes[1].innerHTML=person.age
    document.getElementById("place").innerHTML=person.place
    document.getElementById("pfb").childNodes[0].nodeValue=person.fb
    document.getElementById("ptw").childNodes[0].nodeValue=person.tw 
    document.getElementById("pinsta").childNodes[0].nodeValue=person.insta
}