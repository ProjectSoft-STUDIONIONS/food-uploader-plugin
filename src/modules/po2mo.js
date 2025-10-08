const { spawnSync } = require("child_process");

module.exports = function (grunt) {
  grunt.registerMultiTask(
    "po2mo",
    "Compiles .po files into binary .mo files with msgfmt.",
    function () {
      const options = this.options({
        alignment: 1,
        checkAccelerators: null,
        checkCompatibility: false,
        checkDomain: false,
        checkFormat: false,
        checkHeader: false,
        deleteSrc: false,
        endianness: null,
        noConvert: false,
        noHash: false,
        noRedundancy: false,
        useFuzzy: false,
      });

      this.files.forEach(function (file) {
        const src = file.src[0];
        let dest = file.dest;

        if (dest.endsWith(".po")) {
          dest = dest.replace(".po", ".mo");
        }

        // Default arguments
        const args = ["--output", dest, src];

        // Add custom arguments
        if (options.alignment && !isNaN(options.alignment)) {
          args.unshift("--alignment", options.alignment);
        }

        if (options.checkFormat) {
          args.unshift("--check-format");
        }

        if (options.checkHeader) {
          args.unshift("--check-header");
        }

        if (options.checkDomain) {
          args.unshift("--check-domain");
        }

        if (options.checkCompatibility) {
          args.unshift("--check-compatibility");
        }

        if (options.checkAccelerators) {
          args.unshift("--check-accelerators", options.accelerators);
        }

        if (options.endianness) {
          args.unshift("--endianness", options.endianness);
        }

        if (options.noConvert) {
          args.unshift("--no-convert");
        }

        if (options.noHash) {
          args.unshift("--no-hash");
        }

        if (options.noRedundancy) {
          args.unshift("--no-redundancy");
        }

        if (options.useFuzzy) {
          args.unshift("--use-fuzzy");
        }

        grunt.file.write(dest);
        grunt.verbose.writeln("Executing:", "msgfmt", args.join(" ").trim());

        const result = spawnSync("msgfmt", args);

        grunt.verbose.writeln("Executed with status:", result.status);

        if (result.status !== 0) {
          grunt.log.error(result.stderr);
        }

        if (options.deleteSrc) {
          grunt.verbose.writeln("Deleting source file:", src);
          grunt.file.delete(src);
        }
      });
    }
  );
};