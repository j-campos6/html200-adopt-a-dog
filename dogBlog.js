const test = document.getElementsByClassName('dog-gallery')[0];

/**console.log(test);**/

const formContainer = document.createElement('div');
test.appendChild(formContainer);
formContainer.setAttribute('class','blogBox');

const fields = [
  {
        name:'full-name',
        label: 'Full Name'
  },
  {
        name: 'email',
        label: 'Email Address'
  },
  {
        name: 'headline',
        label: 'Blog Title'
  },
  {
        name: 'content',
        label: 'Blog Content'
  }
];

const form = document.createElement('form');
form.setAttribute('class','blogForm');

document.body.appendChild(form);

for (let i = 0; i < fields.length; i +=1) {
    const field = fields[i];

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const input = document.createElement('input');
    input.setAttribute('id', field.name);

    form.appendChild(label);
    form.appendChild(input);
}

formContainer.appendChild(form);

const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

let submission = [];
let i = 0;
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let blogSubmission = {
      name: document.getElementById('full-name').value,
      email: document.getElementById('email').value,
      headline: document.getElementById('headline').value,
      content: document.getElementById('content').value
    };
    submission.push(blogSubmission);
    document.forms[0].reset();
    console.warn('added',JSON.stringify({submission},'\t', 2));

    alert('Thank you. The form information has been received');

/**Posting the blog to the page**/
const blogPost = document.createElement('div');
test.appendChild(blogPost);
blogPost.setAttribute('class','dogCard-top');
test.appendChild(blogPost);

/**Put new blog at the top**/
test.insertBefore(blogPost,test.firstChild);

/**create and append blog post html elements**/
const blogDiv = document.createElement('div');
const blogHeader = document.createElement('h5');
const blogParagraph = document.createElement('p');
blogPost.appendChild(blogDiv);
blogDiv.appendChild(blogHeader);
blogHeader.innerText = submission[i].headline;
blogDiv.appendChild(blogParagraph);
blogParagraph.innerText = submission[i].content;
console.log(i);
i = ++i;
});
