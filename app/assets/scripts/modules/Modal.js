import $ from 'jquery';

// turns out just using this code below saved me from going crazy
$(".toggle-modal").click(function(){
  $(".modal").toggleClass("modal--is-visible");
});


// class Modal {
// 	constructor() {
// 		this.toggleModalButton = $(".toggle-modal");
// 		this.modal = $(".modal");
// 		this.events();
// 	}

// 	events() {
// 		//toggles the modal 
// 		this.toggleModalButton.click(this.toggleModal.bind(this));

// 	}

// 	toggleModal() {
// 		// adds the class below to .modal if the class .toggle-modal is clicked on
// 		this.modal.toggle("modal--is-visible");
		
// 	}
// }


// export default Modal;