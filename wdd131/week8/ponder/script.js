
const aCourse = {
  // First we have an object that is in a key value pair
  code: 'CSE121b',
  name: 'Javascript Language',
  logo: 'images/js-logo.png',
  // This is an array of objects
  sections: [
      { sectionNum: 1, roomNum: 'STC 353', enrolled: 0, days: 'TTh', instructor: 'Bro T'},
      { sectionNum: 2, roomNum: 'STC 347', enrolled: 0, days: 'TTh', instructor: 'Sis A'},
      { sectionNum: 3, roomNum: 'STC 333', enrolled: 0, days: 'MW', instructor: 'Sis B'}
  ],

  // this method takes a sectionNum like 1,2,3 
  enrollStudent: function (sectionNum) {
      // and finds the right section...Array.findIndex will work here
      // and we are finding the num from the sections array that matches the userinput
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      // if we find it we then increase the enrollement num and call the rendersection to have it show on the screen
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
      }
    }
  };

// this takes one section object and turns it into html
function sectionTemplate(section) {
    // as table rows and table data
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
      </tr>`;
}


function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
       
document.querySelector("#courseName").textContent = aCourse.name;
document.querySelector("#courseCode").textContent = aCourse.code;
document.querySelector("#logo").src = aCourse.logo;

