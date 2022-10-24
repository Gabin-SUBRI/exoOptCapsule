const ulist = document.querySelectorAll("ul")

for (let i = 0; i < ulist.length ; i++){
ulist[i].firstElementChild.textContent = 'First';
ulist[i].lastElementChild.textContent = 'Last';
};