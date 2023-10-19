$(document).ready(function() {
    // Cuando se haga clic en el enlace a Tablas.html
    $("#tablas-link").click(function() {
      // Mostrar el artículo de la tabla
      $(".article-tablas").show();
      // Ocultar el artículo de contenido central
      $(".article-central").hide();
    });
  });
