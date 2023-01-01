const firstCarousel = document.querySelector("#firstCarousel");
const secondCarousel = document.querySelector("#secondCarousel");
const thirdCarousel = document.querySelector("#thirdCarousel");



const refreshCarousel = (element, course, i) => {
    element.querySelector('img').src = course[i]['image'];
    element.querySelector('h5').textContent = course[i]['title'];
    element.querySelector('h6').textContent = course[i]['category'];
    element.querySelector('span').textContent = course[i]['price'];



}
setInterval(() => {
    //get Random Courses every 3.5 seconds */
    const randomCourses = [...courses].sort(() => 0.5 - Math.random());
    let myCourses = randomCourses.slice(0, 3);
    refreshCarousel(firstCarousel, myCourses, 0);
    refreshCarousel(secondCarousel, myCourses, 1);
    refreshCarousel(thirdCarousel, myCourses, 2);


}, 3500);

