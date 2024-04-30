const valueNames = [
  "title",
  "instructors",
  "helpers",
  {data: ["country", "delivery", "curriculum"]},
]
const placeholder = "Type to Filter by name or keyword"
const inputClass = "search-input"
const listClass = "filtered"
var documentLoad = "DOMContentLoaded";
document.addEventListener(documentLoad, function() {
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
  const filtersStart = {
    country: "",
    delivery: "",
    curriculum: ""
  }
  let filters = filtersStart
  filterClear.addEventListener("click", () => {
    filters = {
      country: "",
      delivery: "",
      curriculum: ""
    }
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
        userList.filter((item) => {
          const country = !!filters.country ? filters.country == item.values().country : true
          const delivery = !!filters.delivery ? filters.delivery == item.values().delivery : true
          const curriculum = !!filters.curriculum ? filters.curriculum == item.values().curriculum : true
          return country && delivery && curriculum
        })
      }
    })
  })
});

