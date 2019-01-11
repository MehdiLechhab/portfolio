import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';


var mobileMenu = new MobileMenu();
// toggle reveals of elements below
new RevealOnScroll($(".large-hero__text-content"), "11rem");
new RevealOnScroll($(".site-header__logo"), "-670px");


// header color change below
new StickyHeader($(".large-hero__title"), "site-header--dark");
new StickyHeader($(".page-section__trigger--first"), "site-header--dark1");
new StickyHeader($(".page-section__trigger--second"), "site-header--dark2");
var stickyHeader = new StickyHeader();
// modal
var modal = new Modal();
