Description
===========
jsRequire is simple plugin to import javascript file(s) within single javascript file, if you implement MVC line of work. You may reduce line of codes with just 3 lines.

Dependencies
============
- jQuery
- jsRequire
- jsPackages

How To Use
==========
1. Include jQuery library in head tag
2. Include jsRequire as plugin lib
3. Then include jsPackages which you had been import all javascript for your project
4. Edit jsPackages.js to put your external scripts file

Implementation
==============
<script>
	$.jsRequire('your_file_url');
</script>
