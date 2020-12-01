$("button").click(function() {
  let year = $(".year").val();
  year = Number(year);
  let now = $(".now").val();
  now = Number(now);
  let age = now - year;
  age = Number(age);
  let name = $(".name").val();
  let live = 72.6 - age
  $(".message").append(
    `<p>You, ${name}, are ${age} years old. You are likely to live ${live} more years.</p> <img class="unusAnnus" src="https://i.pinimg.com/736x/17/be/cb/17becb965113483e3803877a55c5ac84.jpg">`
  );
});
