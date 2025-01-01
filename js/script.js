let rating;
const ratingItems = document.querySelectorAll('.item');
const ratingSubmit = document.getElementById('rating-submit');
const cardChoose =  document.querySelector('.choose-rating');
const cardThanks =  document.querySelector('.thank-you');

ratingItems.forEach(item => {
  item.addEventListener('click', function() {
    const selectedRating = this.id;
    
    rating = selectedRating.split('-')[1];
    ratingItems.forEach(item => item.classList.remove('selected'));
    this.classList.add('selected');
  });
});

ratingSubmit.addEventListener('click', function() {
  const rated = document.getElementById('rated');

  cardChoose.style.display = "none";
  cardThanks.style.display = "block";
  rated.innerText = rating;
})
