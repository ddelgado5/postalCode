var CODE = [
    {
      name: "medellin",
      code: 050032,
    },
    {
      name: "envigado",
      code: 055422,
    },
    {
      name: "sabaneta",
      code: 055450,
    },
    {
      name: "bello",
      code: 051050,
    },
    {
      name: "manizales",
      code: 170004,
    },
    {
      name: "pasto",
      code: 520003,
    },
  ];

document.addEventListener(
    "DOMContentLoaded",
    function(){
        $input = document.querySelector(".js-input")
        $buton = document.querySelector(".js-buton")
        $text = document.querySelector(".js-text")

        var postalCode = "No existe";
        $buton.addEventListener("click", function(){
            CODE.forEach(function(element){
           

                if(element.name == $input.value.toLowerCase()){
                    postalCode = element.code;

                }
            });


            // llenar la variable

            $text.innerText= postalCode;
        })
}
)