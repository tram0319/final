    function showSection(sectionId) {

        document.getElementById('beach').style.display = 'none';
        document.getElementById('citytour').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
		document.getElementById('tips').style.display = 'none';
		document.getElementById('review').style.display = 'none';
     
        closeBookingOptionsModal();
   
        document.getElementById(sectionId).style.display = 'block';
	if (sectionId === 'review') {
        displayCustomerReviews();
    }
	}

	function displayBookingOptions() {
        var modal = document.getElementById('bookingOptionsModal');
        modal.style.display = 'block';
    }

    function closeBookingOptionsModal() {
        document.getElementById('bookingOptionsModal').style.display = 'none';
    }

    function confirmBooking() {
        
        alert('Thank you for your booking! We will send you an email about your tour soon.');
        closeBookingOptionsModal();
    }


    function validateForm() {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var number = document.getElementById('number').value;
        var email = document.getElementById('email').value;
        var nameoncard = document.getElementById('nameoncard').value;
        var cardnumber = document.getElementById('cardnumber').value;
        var expired = document.getElementById('expired').value;
        var csv = document.getElementById('cvv').value;
    if (
            !firstName ||
            !lastName ||
            !number ||
            !email ||
            !nameoncard ||
            !cardnumber ||
            !expired ||
            !csv
        ) {
            alert('Please fill out all information before confirm!');
            return false;
        }

        return true;
    }

    function confirmBooking() {
        if (validateForm()) {
            alert('Thank you for your booking! We will send you an email about your tour soon.');
            closeBookingOptionsModal();
        }
    }
	
	function displayCustomerReviews() {
    var reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = ''; 
   
    var reviews = [
        { name: 'Taylor Nguyen', date: '11/12/2023', rating: 4, comment: 'Went to Nha Trang beach with my friend. Great experience!' },
        { name: 'John Smith', date: '9/4/2023', rating: 5, comment: 'Clean hotel, professional staffs. Will take a trip next year.' },
		{ name: 'Ha Do', date: '5/5/2022', rating: 3, comment: 'Just went back home from a wonderful tour to Ha Noi capital. Recomment! ' },
		{ name: 'Denis Welson', date: '11/10/2022', rating: 5, comment: 'Nice eperience!' },
		
        
    ];
    
    reviews.forEach(function (review) {
        var reviewDiv = document.createElement('div');
        reviewDiv.innerHTML = `
            <p><strong>${review.name}</strong> - ${review.date}</p>
            <p>${getStarRating(review.rating)}</p>
            <p>${review.comment}</p>
            <hr>
        `;
        reviewsContainer.appendChild(reviewDiv);
    });
}

function getStarRating(rating) {
    var stars = '';
    for (var i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}


var currentRating = 0;

function startReview() {
    document.getElementById('reviewForm').style.display = 'block';
}

function setRating(event) {
    var selectedStar = event.target;
    if (selectedStar.classList.contains('star')) {
        currentRating = parseInt(selectedStar.getAttribute('data-value'));
        updateStarRating();
    }
}

function updateStarRating() {
    var stars = document.querySelectorAll('#starRating .star');
    stars.forEach(function (star, index) {
        if (index < currentRating) {
            star.innerHTML = '★';
        } else {
            star.innerHTML = '☆';
        }
    });
}

function finishReview() {
    var reviewerName = document.getElementById('reviewerName').value;
    var reviewComment = document.getElementById('reviewComment').value;

    if (!reviewerName || !reviewComment || currentRating === 0) {
        alert('Please fill out all information before finishing the review!');
        return;
    }

    var review = {
        name: reviewerName,
        rating: currentRating,
        comment: reviewComment
    };

   
    displayCustomerReviews();

    alert('Thank you for your feedback!');
    closeReviewForm();
}



function closeReviewForm() {
    document.getElementById('reviewForm').style.display = 'none';
   
    document.getElementById('reviewerName').value = '';
    document.getElementById('reviewComment').value = '';
    currentRating = 0;
    updateStarRating();
}


  

