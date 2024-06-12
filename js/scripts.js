const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.navigation .btn');
const btn = document.getElementById('btn');
const formTitle = document.getElementById('form-title');
const  title = document.getElementById('title');
const author = document.getElementById('author');
const formAuthor = document.getElementById('form-author');
const content = document.getElementById('content');
const formContent = document.getElementById('form-content');
const subTitle = document.getElementById('sub-title');
const formSubHeading = document.getElementById('form-sub-heading')
const subContent = document.getElementById('sub-content');
const formSubContent = document.getElementById('form-sub-content');
const blogButton = document.querySelector('.blog-button');
const output = document.getElementById('output');
const blogBreak = document.getElementById('break');


document.addEventListener('DOMContentLoaded', function () {
let currentIndex = 0;
function updateSlides() {
    for (let i = 0; i < slides.length; i++) {
        let offset = (i - currentIndex) * 100;
        slides[i].style.transform = 'translateX(' + offset + '%)';
    }
}
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    updateSlides(); 
    updateDots(); 
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        currentIndex = index;
        updateSlides();
        updateDots();
    });
});
updateSlides();
updateDots();
setInterval(showNextSlide, 3000);
});


// from here the  form element starts 

output.style.display = 'none';
    blogButton.style.display = 'none';
    blogBreak.style.display = 'none';



function fun1( ) {
    event.preventDefault();
    const errors = [];
    if (formTitle.value.trim().length < 5) {
        errors.push("Title must be atleast 5 characters.");
        formTitle.style.border = "2px solid red";
    } else {
        formTitle.style.border = "1px solid #ddd";
        }
    if (!/^[A-Za-z\s]+$/.test(formAuthor.value)) {
        errors.push("Author name must contain only letters.");
        formAuthor.style.border = "2px solid red";
        } else {
            formAuthor.style.border = "1px solid #ddd";
        }
    if (formContent.value.trim().length < 20) {
        errors.push("Content must be atleast 20 characters.");
        formContent.style.border = "2px solid red";
        } else {
            formContent.style.border = "1px solid #ddd";
        }
    if (formSubHeading.value.trim().length < 5) {
        errors.push("Sub Heading must be atleast 5 characters.");
        formSubHeading.style.border = "2px solid red";
        } else {
            formSubHeading.style.border = "1px solid #ddd";
        }
        if (formSubContent.value.trim().length < 20) {
            errors.push("Sub Content must be atleast 20 characters.");
            formSubContent.style.border = "2px solid red";
        } else {
            formSubContent.style.border = "1px solid #ddd";
        }
    if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }
        title.innerHTML = formTitle.value;
        author.innerHTML = `Author Name: ${formAuthor.value}`;
        content.innerHTML = formContent.value;
        subTitle.innerHTML = formSubHeading.value;
        subContent.innerHTML = formSubContent.value;
        document.querySelector('.blog-form').reset();
        blogButton.style.display = 'block';
        blogBreak.style.display = 'block';
        output.style.display = 'block';
    }
    
    btn.addEventListener('click', fun1);

    















