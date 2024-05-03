
const placeholder = "Type to Filter by name or keyword"
const inputClass = "search-input"
const listClass = "filtered"
var documentLoad = "DOMContentLoaded";
document.addEventListener(documentLoad, function() {

  let data
  const dataElement = document.getElementById('filtersData')
  if(dataElement) {
    data = JSON.parse(dataElement.textContent)
  }
  const valueNames = [
    "title",
    {data: data.filters.map(f => f.key)},
  ]
  const filtersStart = () => Object.fromEntries(data.filters.map(f => [f.key, ""]))

  var options = {
    valueNames,
    listClass,
    searchClass: inputClass,
    //page: 20,
    //pagination: true
  };
  var userList = new List('filter', options);
  const searchInput = document.querySelector('.search-input')
  const filterSelects = document.querySelectorAll('select[name]')
  const filterClear = document.getElementById('clear-filters')

  let filters = filtersStart()
  filterClear.addEventListener("click", () => {
    filters = filtersStart()
    searchInput.value = ""
    filterSelects.forEach(select => {
      select.value = "none"
    })
    userList.filter()
    userList.search()

  })
  filterSelects.forEach(select => {
    const filterKey = select.getAttribute('name')
    select.addEventListener("change", function() {
      if(!filters[filterKey].includes(this.value)) {
        filters[filterKey] = ""
        filters[filterKey] = this.value
        console.log(filters)
        userList.filter((item) => {
          for (const atFilter in filters) {
            if(!!filters[atFilter]) {
              if(item.values()[atFilter].includes(filters[atFilter])) {
                continue
              } else {
                return false
              }
            } else {
              continue
            }
          }
          return true
        })
      }
    })
  })
});

