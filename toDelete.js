const all = document.querySelector('.all');
const BTNfilter = document.querySelector('#BTNfilter');
const btnMission = document.querySelector('#btnMission');
const input = document.querySelector('#input');
const table = document.querySelector('#table');
const id = document.querySelector('#id');
const popup = document.querySelector('.popup');
const updatebutton = document.querySelector('.updatebutton');
const Updatetext = document.querySelector('#Updatetext');

const tbody = document.querySelector("#tbody");

btnMission.addEventListener('click', function() {
    const tr = document.createElement('tr');
    const inputr = document.createElement('td');
    const Actionsr = document.createElement('td');
    const isDoner = document.createElement('td');
    const idr = document.createElement('td');

    const deletedBTN = document.createElement('button');
    deletedBTN.className = 'deletedBTN';
    deletedBTN.textContent = 'מחק';

    const UpdatedBTN = document.createElement('button');
    UpdatedBTN.className = 'UpdatedBTN';
    UpdatedBTN.textContent = 'עדכן';

    const DonedBTN = document.createElement('button');
    DonedBTN.className = 'DonedBTN';
    DonedBTN.textContent = 'בוצע';

    isDoner.textContent = false; 
    inputr.textContent = input.value;
    idr.textContent = generateId(); 

    Actionsr.appendChild(deletedBTN);
    Actionsr.appendChild(UpdatedBTN);
    Actionsr.appendChild(DonedBTN);

    tr.appendChild(Actionsr);
    tr.appendChild(isDoner);
    tr.appendChild(inputr);
    tr.appendChild(idr);

    tbody.appendChild(tr);

    const id = generateId();
    deletedBTN.dataset.id = id; 
    UpdatedBTN.dataset.id = id;
    DonedBTN.dataset.id = id;
    
    deletedBTN.onclick = () => deleteRow(id);
    UpdatedBTN.onclick = () => openPopup(id);
    DonedBTN.onclick =()=>donefun(id);
    
    input.value = '';
});

function deleteRow(id) {
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
        const deleteButton = row.querySelector('.deletedBTN'); 
        if (deleteButton.dataset.id === id) { 
            tbody.removeChild(row); 
        }
    });
}

function updatefun(id) {  
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
        const updateButton = row.querySelector('.UpdatedBTN');
        if (updateButton.dataset.id === id) { 
            const tds = row.querySelectorAll('td');
            tds[2].textContent = Updatetext.value; 
        }
    });
}

function openPopup(id) {
    popup.dataset.id = id;
    popup.style.display = 'block';
}

updatebutton.addEventListener('click', function() {
    const id = popup.dataset.id;
    updatefun(id);
    popup.style.display = 'none';
});

function donefun(id) {  
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
        const DonedBTN = row.querySelector('.DonedBTN');
        if (DonedBTN.dataset.id === id) { 
            const tds = row.querySelectorAll('td');
            tds[1].textContent = true; 
        }
    });
}


function filterfun() {  
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
        const tds = row.querySelectorAll('td');
                if (tds[1].textContent === 'true') { 
            row.style.display='none';
             
        }
    });
}

BTNfilter.addEventListener('click',function(){
    filterfun();
})


 
function generateId() {
    return Math.random().toString(36).substr(2, 4);
}




// לוקאל סטוראז

const userArr =['yosef',25]//מכריז על משתנה שמחזיק מערך
localStorage.setItem('user',JSON.stringify(userArr));//שולח אותו עם השם יוזר ללוקאל סטוראז
const userData =JSON.parse(localStorage.getItem('user'));//מכריז על משתנה חדש שמקבל את אותו יוזר מהלוקאל סטוראז
console.log(userData)//סתם הדפסתי אותו
localStorage.removeItem('user');//מוחק אותו
localStorage.clear();//מוחק את כל הלוקאל סטורז
