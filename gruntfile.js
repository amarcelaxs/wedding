module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass:{
          dist:{
            files:{
                //src : ["scss/style.scss"],
                //dest : "css/style.css"
                'css/style.css':'scss/style.scss'
              }
          }
        },
        watch: {
    			css: {
    				files: 'dist/sass/style.scss',
    				tasks: ['sass']
    			}
    		}
        /*uglify:{
            my_target:{
                files:[{
                  src:'ljs/main.js',
                  dest:'dist/js/',
                  expand:true,
                  flatten:true,
                  ext:'.min.js'
                }]
            }
        }*/
      });
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');
      //grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.registerTask('default',['watch']);
}