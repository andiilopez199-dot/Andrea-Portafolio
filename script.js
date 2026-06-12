function addRecommendation() {
  // Obtener el texto
  let recommendation = document.getElementById("new_recommendation");
  let text = recommendation.value;

  // Validar que no esté vacío
  if (text !== "") {

    // Crear nuevo elemento
    let element = document.createElement("div");
    element.setAttribute("class", "recommendation");

    // Agregar contenido
    element.innerHTML = "<span>&#8220;</span>" + text + "<span>&#8221;</span>";

    // Agregar a la lista
    document.getElementById("all_recommendations").appendChild(element);

    // Limpiar caja de texto
    recommendation.value = "";

    // Mostrar popup
    showPopup(true);
    function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
  }
}