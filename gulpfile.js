const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("build", (cb) => {
  console.log("Construyendo el sitio");
  setTimeout(() => {
    cb();
  }, 1000);
}); 

gulp.task("server", () => {
  browserSync.init({
    server: "./herramientas/automatizacion/WWW",
    port: 8000,
    online: true,
    watch: true,
  });

  /* Le indica a Gulp que se mantenga observando  los cambios en los arhicvos servidos en browserSync  */
  /* Y al ejecutarse el eventeo change browserSync se recargara */
  gulp.watch("www/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("build", "server"));
