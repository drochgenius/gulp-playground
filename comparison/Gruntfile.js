module.exports = grunt => {

    // Project configuration.
    grunt.initConfig({
        clean: ['dest'],
        copy: {
            main: {
                files: [
                    { expand: false, src: ['epubs/**'], dest: 'dest/' },
                ],
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['clean','copy']);

};