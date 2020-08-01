const button = document.getElementsByTagName("button");
console.log(button)
//update database data on clicked button
for(i=0; i<button.length; i++) {
    button[i].addEventListener('click',(e) =>{
        update(event.target.id.toString())
    })    
};

//update database
function update(data){
    db.collection('screen').doc('sLOMp1Y9uTDSgVUjLR6Y').update({
        color: data
    })
}

function refreshScreen(color){
    let screen = document.getElementsByClassName("color");
    screen[0].style.backgroundColor = color
}

//real-time listener
db.collection('screen').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        refreshScreen(change.doc.data().color);
    });
})