document.write([
  '<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">',
    '<link rel="stylesheet" type="text/css" href="css/main.css">',
  '<script type="text/javascript" src="js/angular/angular.min.js"></script>',
  ' <script type="text/javascript" src="js/angular/angular-translate.js"></script>',
  '<script type="text/javascript" src="js/angular/angular-ui-router.js"></script>',
  '<script type="text/javascript" src="js/language/translations_pt_BR.js"></script>',
  
'<script src="https://maps.google.com/maps/api/js?libraries=places,visualization,drawing,geometry,places&key=AIzaSyD5LLoUpb1YwmpWuUMU21Go19kkEFwhHAc"></script>',
  '<script type="text/javascript" src="js/mapa/ng-map.min.js"></script>',

  '<script type="text/javascript" src="js/module/main-module.js"></script>',
  '<script type="text/javascript" src="js/controller/main-controller.js"></script>',
  '<script>',
  'document.addEventListener("DOMContentLoaded", function(event) {',
  '  window.parent.postMessage({height:document.body.getBoundingClientRect().height},"*");',
  '});',
  '</script>'
].join('\n'));
