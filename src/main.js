(function() {
 const menuButton=document.getElementById('menuToggle');
 const nav=document.getElementById('mainNav');
 function setMenu(open) {
   nav.classList.toggle('open',open);
   menuButton.setAttribute('aria-expanded',String(open));
   menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
   menuButton.textContent=open?'×':'☰';
 }
 menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
 nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
 document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false);});
 const lightbox=document.getElementById('lightbox');
 const lightboxImage=document.getElementById('lightboxImage');
 const closeButton=document.getElementById('lightboxClose');
 let lastFocus=null;
 function closeLightbox() {
   lightbox.classList.remove('open');
   lightbox.setAttribute('aria-hidden','true');
   lightboxImage.removeAttribute('src');
   if(lastFocus)lastFocus.focus();
 }
 document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
   lastFocus=button;
   lightboxImage.src=button.getAttribute('data-image');
   lightboxImage.alt=button.getAttribute('data-alt')||'Imagem do acervo do projeto';
   lightbox.classList.add('open');
   lightbox.setAttribute('aria-hidden','false');
   closeButton.focus();
 }));
 closeButton.addEventListener('click',closeLightbox);
 lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox();});
})();
