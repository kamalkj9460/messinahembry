if (window.innerWidth < 768) {
  $(window).on('scroll', function() {
    var snize_panel = $('#snize_results.snize-mobile-design.snize-new-version div.snize-main-panel');
    if (snize_panel.length > 0) {
      snize_panel.toggleClass('isFixed', $(window).scrollTop() >= 115);
    }
  });
}