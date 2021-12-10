// tested website url: https://setapp.com/apps in the console
// inspire by this video: https://www.youtube.com/watch?v=GDJjovLJpMs

const items = []; 
const allItems = document.querySelectorAll('.all-apps-item')
allItems.forEach((item) => {
  const _item = {}
  _item.name = item.querySelector('.all-apps-item__name').innerHTML.trim(); 
  _item.description = item.querySelector(".all-apps-item__description").innerHTML.trim();
  _item.photo = item.querySelector(".all-apps-item__icon").getAttribute('src').trim();

  items.push(_item)

})
console.log(items)