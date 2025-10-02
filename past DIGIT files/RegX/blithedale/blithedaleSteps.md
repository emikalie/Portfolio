Steps for Converting The Blithedale Romance 

## 1. Remove Front and Back Matter
- Delete everything before the title.
- Delete everything after the last line: `"I--I myself--was in love--with--Priscilla!"`

## 2. Replace Reserved Characters
- Find: `&` → Replace: `&amp;`
- Find: `<` → Replace: `&lt;`
- Find: `>` → Replace: `&gt;`

## 3. Remove Extra Blank Lines
- Find: `\n{3,}` → Replace: `\n\n`  

## 4. Wrap Paragraphs in `<p>` Tags
- Find: `\n\n` → Replace: `</p>\n<p>`  
- Manually add `<p>` before the first paragraph and `</p>` at the end.

## 5. Tag Chapter Titles with `<title>`
- Find: `(?<=\n)([IVXLCDM]+\. .*)\n`  
- Replace: `<title>\1</title>\n`
- Ensure chapter titles are not inside `<p>` tags.

## 6. Wrap Chapters in `<chapter>` Tags
- Find: `(<title>.*?</title>)` → Replace: `</chapter>\n<chapter>\n\1`
- Manually add `<chapter>` at the start and `</chapter>` at the end.

## 7. Tag Quotations with `<quote>`
- Enable Dot matches all in regex options.
- Find: `"(.+?)"`  
- Replace: `<quote>\1</quote>`

## 8. Final Cleanup
- Ensure `<book>` wraps everything.
- Check for well-formed XML in oXygen.
