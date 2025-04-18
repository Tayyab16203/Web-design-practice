const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
    event.preventDefault();

    const maxMarks = 400;
    const formData = new FormData(calculateFormEl);
    const data = {};

    formData.forEach((value,key) => {
        data[key] =  +value;
    });

    const totalMarks = data.maths + data.english + data.hindi + data.science;
    const percentage = Math.floor((totalMarks / maxMarks) * 100);
    resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%.`;
};