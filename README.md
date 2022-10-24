# PDF to Audio

### Setup
1. Clone or Download the zip file from GitHub.
2. Open the directory and run `npm install`.

### How To Run
1. Place the pdf you would like to convert inside the root directory.

2. Open `index.js` and replace the path to `your_pdf.pdf` with the name of your pdf file.

3. Run `npm run start` to convert the pdf into a `.txt` file.

4. Open the `output.txt` file and make sure you manually remove any text such as indices, appendix, references... before chapter 1 and after the last chapter.

5. Optionally you can also change the `MAX_SIZE` variable in `index.js` to export smaller or larger files, or the `SPEED` variable to export slower/faster audio files (although this isn't recommended).

6. Run `npm start export` and node should start exporting your text to individual `.wav` audio files in `./audio`.
**Note that this may take some time depending on your computer's RAM.**