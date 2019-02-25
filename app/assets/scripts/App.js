import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import Todolist from './modules/Todolist';
import ReturnToTop from './modules/ReturnToTop';

var mobileMenu = new MobileMenu();
// toggle reveals of elements below
new RevealOnScroll($(".large-hero__text-content"), "11rem");
// makes logo disappear at 670px..
// new RevealOnScroll($(".site-header__logo"), "-670px");


// header color change below
new StickyHeader($(".large-hero__title"), "site-header--dark");
new StickyHeader($(".page-section__trigger--first"), "site-header--dark1");
new StickyHeader($(".page-section__trigger--second"), "site-header--dark2");
new StickyHeader($(".page-section__trigger--third"), "site-header--dark3");
var stickyHeader = new StickyHeader();
// modal
var modal = new Modal();
// todos list
var todolist = new Todolist();
//returnToTop
var returnToTop = new ReturnToTop();
