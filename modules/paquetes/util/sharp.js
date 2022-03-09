const sharp = require("sharp");

sharp("Phillip.jpg").grayscale().rotate().resize(120).toFile("resized.png");
