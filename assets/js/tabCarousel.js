$("#myCarousel").carousel({
  interval: 0,
});

let $tabs = $("#myCarousel>.nav-tabs>li");
$('[data-slide="next"]').on("click", function () {
  if ($tabs.filter(".active").next("li").length) {
    $tabs.filter(".active").next("li").find('a[data-toggle="tab"]').tab("show");
  } else {
    $tabs.eq(0).find('a[data-toggle="tab"]').tab("show");
  }
});
$('[data-slide="prev"]').on("click", function () {
  if ($tabs.filter(".active").prev("li").length) {
    $tabs.filter(".active").prev("li").find('a[data-toggle="tab"]').tab("show");
  } else {
    $tabs
      .eq($tabs.length - 1)
      .find('a[data-toggle="tab"]')
      .tab("show");
  }
});
