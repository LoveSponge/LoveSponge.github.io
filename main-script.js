function onload() {
 let iframes = document.querySelectorAll('iframe');

 for (iframe of iframes) {
  iframe.setAttribute('scrolling', 'no');
 }
}

function foo(target) {
 console.log();
 let body = document.querySelector('body');
 let content = document.querySelector('.content');
 let cards = document.querySelectorAll('.card');
 let $thisIframe = target.parentNode.parentNode.querySelector('.card-iframe').querySelector('iframe');

 if (target.innerText === 'View') {
  for (let card of cards) {
   if (card === target.parentNode.parentNode) {
    content.setAttribute('style', 'grid-template-rows: 1fr; grid-template-columns: 1fr;');
    target.innerText = 'Close';
    window.scrollTo(0, body.scrollHeight);
    document.body.setAttribute('style', 'overflow-y: hidden;');
    $thisIframe.setAttribute('scrolling', 'yes');
   } else {
    card.setAttribute('style', 'display: none;');
   }

  }
 } else if (target.innerText === 'Close') {
  target.innerText = 'View';
  content.setAttribute('style', '');
  document.body.setAttribute('style', '');
  $thisIframe.setAttribute('scrolling', 'no');
  window.scrollTo(0, body.scrollHeight);
  for (let card of cards) {
   card.setAttribute('style', '');
  }
 } else if (target.innerText === 'Blog') {
  // redirect to blog page
  alert('Coming soon!');
  // console.log(target.innerText);
 }

}


function iterateOverTargets(targets) {
 for (let target of targets) {
  // do something
 }
}