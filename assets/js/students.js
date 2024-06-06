let students = [
  {
    id: 1,
    name: "Arda",
    lastname: "Toraman",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 2,
    name: "Aysu",
    lastname: "Aşçı",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 3,
    name: "Berat",
    lastname: "Dimen",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 4,
    name: "Berk",
    lastname: "Uçar",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 5,
    name: "Doğa",
    lastname: "Savaş",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 6,
    name: "Doğukan",
    lastname: "Sarı",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 7,
    name: "Ece",
    lastname: "Ceylan",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 8,
    name: "Emre",
    lastname: "Özçalkap",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 9,
    name: "Fatih Can",
    lastname: "Kaya",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 10,
    name: "Furkan",
    lastname: "Coşar",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 11,
    name: "Gökhan",
    lastname: "Ünlü",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 12,
    name: "Halil İbrahim",
    lastname: "Korkmaz",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 13,
    name: "Kemal",
    lastname: "Özalp",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 14,
    name: "Kerem",
    lastname: "Kaçmaz",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 15,
    name: "Melek",
    lastname: "Dal",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 16,
    name: "Muhammed Baki",
    lastname: "Çağlayan",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 17,
    name: "Muhammed",
    lastname: "Yazıcı",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 18,
    name: "Muhammet Hasan",
    lastname: "Türkmen",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 19,
    name: "Ömer",
    lastname: "Fırat",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 20,
    name: "Sema",
    lastname: "Bekdemir",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 21,
    name: "Sıla",
    lastname: "Kara",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 22,
    name: "Sudenur",
    lastname: "Taştekin",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 23,
    name: "Tunahan",
    lastname: "Orak",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
];

let toplam = 0;
let toplamGirl = 0;
let toplamBoy = 0;
let studentsContainer = document.querySelector('.studentsContainer')
let student = document.querySelector(".students");
let total = document.querySelector(".total");
for (let i = 0; i < students.length; i++) {
  toplam++;
  student.innerHTML +=
    `<td  data-index=${i}>${students[i].name}</td>` +
    `<td  data-index=${i}>${students[i].lastname}</td>` +
    `<td ' data-index=${i}>${students[i].gender}</td>` +
    `<td  data-index=${i}>${students[i].section}</td>` +
    `<td  data-index=${i}>${students[i].role}</td>`;
  total.innerText = toplam;
}

let girlContainer = document.querySelector(".girlContainer");
girlContainer.style.display = "none";

let girlBtn = document.querySelector("#girlBtn");
let girlStudents = document.querySelector(".girlStudents");
let totalGirl = document.querySelector(".totalGirl");
function girls() {
  for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "Kadın") {
      toplamGirl++;
      girlStudents.innerHTML +=
        `<td  data-index=${i}>${students[i].name}</td>` +
        `<td  data-index=${i}>${students[i].lastname}</td>` +
        `<td ' data-index=${i}>${students[i].gender}</td>` +
        `<td  data-index=${i}>${students[i].section}</td>` +
        `<td  data-index=${i}>${students[i].role}</td>`;
      totalGirl.innerText = toplamGirl;
    }
  }
  girlContainer.style.display = "block";
  studentsContainer.style.display = "none"
  girlBtn.style.display = "none"

}
girlBtn.addEventListener('click' , girls)

let boyContainer = document.querySelector('.boyContainer');
boyContainer.style.display = 'none'


let boyBtn = document.querySelector("#boyBtn");
let boyStudents = document.querySelector(".boyStudents");
let totalBoy = document.querySelector(".totalBoy");

function boys() {
  for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "Erkek") {
      toplamBoy++;
      boyStudents.innerHTML +=
        `<td  data-index=${i}>${students[i].name}</td>` +
        `<td  data-index=${i}>${students[i].lastname}</td>` +
        `<td ' data-index=${i}>${students[i].gender}</td>` +
        `<td  data-index=${i}>${students[i].section}</td>` +
        `<td  data-index=${i}>${students[i].role}</td>`;
      totalBoy.innerText = toplamBoy;
    }
  }
  boyContainer.style.display = "block";
  studentsContainer.style.display = "none"
  boyBtn.style.display = "none"
}
boyBtn.addEventListener('click' , boys)