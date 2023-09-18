import IMask from "imask";
import JustValidate from "just-validate";

const inputs = document.querySelectorAll("input[type='tel']");

inputs.forEach(item => {
  const mask = new IMask(item, {
    mask: '+{7}(000)000-00-00'
  });
});

let validateHeroForm = new JustValidate(".hero__form")
.addField(document.querySelector("#phone"), [{
  rule: "required",
  errorMessage: 'Это поле обязательно',
},
{
  rule: 'minLength',
  value: 16,
  errorMessage: 'Введите корректный номер телефона',
}
]);

let validateRecordForm = new JustValidate(".record__form")
.addField(document.querySelector("#phone1"), [{
  rule: "required",
  errorMessage: 'Это поле обязательно',
},
{
  rule: 'minLength',
  value: 16,
  errorMessage: 'Введите корректный номер телефона',
}])
.addField(document.querySelector("#name"), [{
  rule: "required",
  errorMessage: 'Это поле обязательно',
},
{
  rule: 'minLength',
  value: 16,
  errorMessage: 'Введите корректное имя от 2 символов',
}]);
