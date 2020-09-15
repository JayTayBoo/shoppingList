$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();
  let listItem = $('#shopping-list-entry').val();
  console.log(listItem)
  let defaultItem = `
    <li>
      <span class="shopping-item"> ${listItem} </span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>` ;

  $('.shopping-list').append(defaultItem);
})

$('.shopping-list').on('click','.shopping-item-toggle', function(eventChk){
  let checkItem = $(this).parent().siblings();
  checkItem.toggleClass('shopping-item__checked');
})

$('.shopping-list').on('click','.shopping-item-delete', function(eventDel){
  let trashItem = $(this).closest('li');
  trashItem.remove();
})